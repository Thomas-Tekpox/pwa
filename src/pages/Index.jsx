import { Card, Container, List, ListItem, Modal, Rating } from "@mui/material";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import image1 from "../assets/images/antinea/img1.jpg";
import image2 from "../assets/images/antinea/img2.jpg";
import image3 from "../assets/images/antinea/img3.jpg";
import { Box } from "@mui/system";

const restaurants = [
  {
    name: "Antinéa",
    rating: 4,
    image: image1,
  },
  {
    name: "République",
    rating: 3,
    image: image2,
  },
  {
    name: "Vespucci",
    rating: 2,
    image: image3,
  },
];

const Index = ({ visible }) => {
  return (
    <Modal open={visible}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
          paddingTop: 2,
          paddingBottom: 2,
          height: "100%",
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          backgroundColor: "white",
        }}
      >
        <Typography as={"h1"} variant={"h4"}>
          Choisir un restaurant
        </Typography>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            width: "100%",
          }}
        >
          {restaurants.map((restaurant, i) => (
            <ListItem
              key={`restaurant-${i}`}
              onClick={() => {
                if (restaurant.name === "Antinéa") {
                  window.location.href = `/?restaurant=${restaurant.name}`;
                }
              }}
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    width: 100,
                  }}
                >
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    style={{
                      width: "100%",
                    }}
                  />
                </Box>
                <Typography as={"h2"} variant={"h6"}>
                  {restaurant.name}
                </Typography>
                <Rating value={restaurant.rating} />
                <ArrowForwardIosIcon />
              </Card>
            </ListItem>
          ))}
        </List>
      </Box>
    </Modal>
  );
};

export default Index;
