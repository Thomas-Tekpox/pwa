import * as React from "react";
import Box from "@mui/material/Box";
import { BottomNavigation as BottomNavigationMUI } from "@mui/material";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useNavigation } from "../contexts/NavigationContext";
import ColorizeIcon from "@mui/icons-material/Colorize";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import PersonIcon from "@mui/icons-material/Person";

const BottomNavigation = () => {
  const { location, dispatch } = useNavigation();

  return (
    <Box>
      <BottomNavigationMUI
        showLabels
        value={location}
        onChange={(event, newValue) => {
          dispatch({ type: newValue });
        }}
        as={"nav"}
      >
        <BottomNavigationAction label="Picker" icon={<ColorizeIcon />} />
        <BottomNavigationAction label="Random" icon={<ShuffleIcon />} />
        <BottomNavigationAction label="Photo" icon={<InsertPhotoIcon />} />
        <BottomNavigationAction label="User" icon={<PersonIcon />} />
      </BottomNavigationMUI>
    </Box>
  );
};

export default BottomNavigation;
