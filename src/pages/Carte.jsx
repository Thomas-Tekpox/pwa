import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";
import pizza1 from "../assets/images/pizza1.jpg";
import reine from "../assets/images/reine.jpg";
import { Card, Container, List, ListItem } from "@mui/material";

const carte = [
  {
    name: "Pizza",
    key: "pizza",
    items: [
      {
        name: "Marina",
        ingredients: ["tomate", "ail", "origan", "huile d'olive"],
        price: 9,
        image: pizza1,
        altImage: "Marina",
      },
      {
        name: "Reine",
        ingredients: ["tomate", "ail", "origan", "huile d'olive"],
        price: 9,
        image: reine,
        altImage: "Reine",
      },
    ],
  },
];

const chiefSuggestion = "Pizza marinara";

const Carte = () => {
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
        Carte
      </Typography>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {carte.map((item) => (
          <Accordion key={item.key}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${item.key}-content`}
              id={`${item.key}-header`}
            >
              <Typography>{item.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 3,
                }}
              >
                {item.items.map((item) => (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                    key={item.name}
                  >
                    <img
                      alt={item.altImage}
                      src={item.image}
                      style={{
                        objectFit: "cover",
                        maxWidth: "50%",
                        maxHight: "100%",
                      }}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        flex: 1,
                        padding: 2,
                      }}
                    >
                      <Typography as={"h3"} variant={"h5"}>
                        {item.name}
                      </Typography>
                      <List>
                        {item.ingredients.map((ingredient) => (
                          <ListItem
                            key={ingredient}
                            sx={{
                              padding: 0.5,
                            }}
                          >
                            <Typography>{ingredient}</Typography>
                          </ListItem>
                        ))}
                      </List>
                      <Typography variant={"h6"}>{item.price}€</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </AccordionDetails>
          </Accordion>
        ))}
      </Card>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          padding: 2,
        }}
      >
        <Typography>Suggestion du chef: {chiefSuggestion}</Typography>
      </Card>
    </Container>
  );
};

export default Carte;
