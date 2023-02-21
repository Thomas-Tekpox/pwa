import * as React from "react";
import Box from "@mui/material/Box";
import { BottomNavigation as BottomNavigationMUI } from "@mui/material";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigation } from "../contexts/NavigationContext";
import HelpIcon from "@mui/icons-material/Help";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";

const BottomNavigation = () => {
  const { location, dispatch, swiper } = useNavigation();

  return (
    <Box>
      <BottomNavigationMUI
        showLabels
        value={location}
        onChange={(event, newValue) => {
          dispatch({ type: newValue });
          if (swiper) swiper.slideTo(newValue);
        }}
        as={"nav"}
      >
        <BottomNavigationAction label="Index" icon={<HomeIcon />} />
        <BottomNavigationAction label="Informations" icon={<HelpIcon />} />
        <BottomNavigationAction label="Gallerie" icon={<PermMediaIcon />} />
        <BottomNavigationAction
          label="Reservations"
          icon={<ConfirmationNumberIcon />}
        />
      </BottomNavigationMUI>
    </Box>
  );
};

export default BottomNavigation;
