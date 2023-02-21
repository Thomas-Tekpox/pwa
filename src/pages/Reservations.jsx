import {
  Button,
  Container,
  FormControl,
  FormGroup,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { useState } from "react";

const Reservations = () => {
  const [dateValue, setDateValue] = useState(new Date());
  const [timeValue, setTimeValue] = useState(new Date());
  const [numberOfPeople, setNumberOfPeople] = useState(2);

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
      }}
    >
      <Typography as={"h1"} variant={"h4"}>
        Réservation
      </Typography>
      <FormControl
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          width: "100%",
        }}
      >
        <DatePicker
          label="Date"
          value={dateValue}
          onChange={(newValue) => {
            setDateValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        <TimePicker
          label="Heure"
          value={timeValue}
          onChange={(newValue) => {
            setTimeValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        <FormGroup>
          <Typography>Nombre de personnes</Typography>
          <Slider
            value={numberOfPeople}
            onChange={(event, newValue) => {
              setNumberOfPeople(newValue);
            }}
            className="no-swipe"
            valueLabelDisplay="auto"
            marks
            min={1}
            max={10}
          />
        </FormGroup>
        <Button
          variant="contained"
          sx={{
            alignSelf: "center",
          }}
          type="submit"
        >
          Réserver
        </Button>
      </FormControl>
    </Container>
  );
};

export default Reservations;
