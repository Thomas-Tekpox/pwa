import {
  Backdrop,
  Button,
  Container,
  Fade,
  Modal,
  Paper,
  Rating,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "max-content",
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
};

const Informations = () => {
  const [ratingModalOpen, setRatingModalOpen] = useState(false);

  const handleRatingModalOpen = () => {
    setRatingModalOpen(true);
  };

  const handleRatingModalClose = () => {
    setRatingModalOpen(false);
  };

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
        Informations
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography as={"h1"} variant={"h6"}>
          Le restaurant Antinea
        </Typography>
        <Typography>
          Ici info de contact et Geolocalisation + saisie de l'avis
        </Typography>
        <Typography>
          Type de restauration : Brasserie, pizzeria Accessible aux personnes à
          mobilité réduite WIFI disponible Modes de payement : CB, Izly
        </Typography>
        <Typography as={"h2"} variant={"h7"}>
          Horaires
        </Typography>
        <Typography>11h30-13h45</Typography>
        <Typography as={"h2"} variant={"h7"}>
          Acces
        </Typography>
        <Typography>
          15 rue Vaux de Foletier 17000 LA ROCHELLE Téléphone : 05.46.44.18.57
        </Typography>
      </Box>
      <Button variant="contained" onClick={handleRatingModalOpen}>
        Laisser un avis
      </Button>
      <Modal
        open={ratingModalOpen}
        onClose={handleRatingModalClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={ratingModalOpen}>
          <Paper style={modalStyle}>
            <Typography as={"h1"} variant={"h4"}>
              Laisser un avis
            </Typography>
            <Rating />
            <Button variant="contained" onClick={handleRatingModalClose}>
              Envoyer
            </Button>
          </Paper>
        </Fade>
      </Modal>
    </Container>
  );
};

export default Informations;
