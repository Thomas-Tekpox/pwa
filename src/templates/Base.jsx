import BottomNavigation from "../components/BottomNavigation";
import { NavigationProvider } from "../contexts/NavigationContext";
import SwipeHandler from "./Swipehandler";

const Base = ({ children }) => {
  return (
    <NavigationProvider>
      <SwipeHandler>
        {children.map((children, i) => (
          <section key={`page-section-${i}`}>{children}</section>
        ))}
      </SwipeHandler>
      <BottomNavigation />
    </NavigationProvider>
  );
};

export default Base;
