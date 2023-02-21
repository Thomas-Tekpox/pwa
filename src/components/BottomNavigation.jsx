import * as React from "react";
import Box from "@mui/material/Box";
import { BottomNavigation as BottomNavigationMUI } from "@mui/material";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useNavigation } from "../contexts/NavigationContext";
import HelpIcon from "@mui/icons-material/Help";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";

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
        <BottomNavigationAction label="Carte" icon={<RestaurantMenuIcon />} />
        <BottomNavigationAction label="Informations" icon={<HelpIcon />} />
        <BottomNavigationAction label="Gallerie" icon={<PermMediaIcon />} />
        <BottomNavigationAction
          label="Reservation"
          icon={<ConfirmationNumberIcon />}
        />
      </BottomNavigationMUI>
    </Box>
  );
};

export default BottomNavigation;
