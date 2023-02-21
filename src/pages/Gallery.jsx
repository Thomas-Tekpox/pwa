import { Box, Container, Typography } from "@mui/material";
import image1 from "../assets/images/antinea/img1.jpg";
import image2 from "../assets/images/antinea/img2.jpg";
import image3 from "../assets/images/antinea/img3.jpg";

const itemData = [
  {
    img: image1,
    title: "Cantine antinea",
  },
  {
    img: image2,
    title: "Cantine antinea",
  },
  {
    img: image3,
    title: "Cantine antinea",
  },
];

const Gallery = () => {
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
        Galerie
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        {itemData.map((item) => (
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
            key={item.img}
          />
        ))}
      </Box>
    </Container>
  );
};

export default Gallery;
