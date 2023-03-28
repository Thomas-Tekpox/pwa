import { Button, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useApi } from "../contexts/ApiContext";
import { useNavigation } from "../contexts/NavigationContext";

const User = () => {
  const { location } = useNavigation();
  const isActive = location === 3;

  const { disconnect, writeColorNoDebounce } = useApi();
  const [curInterval, setCurInterval] = useState(null);

  const [color, setColor] = useState();
  const [average, setAverage] = useState(0);

  if (!isActive && curInterval) {
    clearInterval(curInterval);
    setInterval(null);
    setAverage(0);
  }

  const startTone = () => {
    if (curInterval) {
      clearInterval(curInterval);
      setCurInterval(null);
    } else {
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          const audioContext = new AudioContext();
          const source = audioContext.createMediaStreamSource(stream);
          const analyser = audioContext.createAnalyser();
          analyser.fftSize = 2048;
          const bufferLength = analyser.frequencyBinCount;
          const dataArray = new Uint8Array(bufferLength);
          source.connect(analyser);
          setCurInterval(
            setInterval(() => {
              analyser.getByteFrequencyData(dataArray);
              const total = dataArray.reduce((acc, curr) => acc + curr);
              const average = total / bufferLength;
              console.log(average);
              setAverage(average);
              // If above 50, we have a tone
              if (average > 50) {
                writeColorNoDebounce("#ff0000");
                setColor("#ff0000");
              } else {
                writeColorNoDebounce("#ffffff");
                setColor("#ffffff22");
              }
            }, 100)
          );
        })
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    return () => {
      clearInterval(curInterval);
      setAverage(0);
    };
  }, [curInterval, isActive]);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
        paddingTop: 2,
        paddingBottom: 2,
        height: "100%",
        backgroundColor: color,
      }}
    >
      <Typography component={"h1"} variant="h3">
        User
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          startTone();
        }}
      >
        {curInterval ? "Stop Listening" : "Start listening"}
      </Button>
      <Button
        variant="contained"
        color="error"
        onClick={() => {
          disconnect();
        }}
      >
        Déconnexion
      </Button>
      <Typography>{average} db</Typography>
    </Container>
  );
};

export default User;
