import { Container } from "@mui/material";
import { useNavigation } from "../contexts/NavigationContext";

const Photo = () => {
  const { location } = useNavigation();
  const isActive = location === 2;

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
      <h1>Photo</h1>
    </Container>
  );
};

export default Photo;
