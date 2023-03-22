import { useNavigation } from "../contexts/NavigationContext";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { useApi } from "../contexts/ApiContext";
import { HexColorPicker } from "react-colorful";

const Picker = () => {
  const { location } = useNavigation();
  const isActive = location === 0;

  const { writeColor } = useApi();

  const [color, setColor] = useState("#ffffff");

  const handleChange = (color) => {
    setColor(color);
    writeColor(color);
  };

  return (
    <Box className={"no-swipe"}>
      <Typography component={"h1"} variant="h3">
        Picker
      </Typography>
      <HexColorPicker color={color} onChange={handleChange} />
    </Box>
  );
};

export default Picker;
