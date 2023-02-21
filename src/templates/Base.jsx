import BottomNavigation from "../components/BottomNavigation";
import { NavigationProvider } from "../contexts/NavigationContext";
import Index from "../pages/Index";
import SwipeHandler from "./Swipehandler";

const Base = ({ children }) => {
  // Get restaurant from query string
  const restaurant = new URLSearchParams(window.location.search).get(
    "restaurant"
  );

  return (
    <NavigationProvider>
      <SwipeHandler>
        {children.map((children, i) => (
          <section
            key={`page-section-${i}`}
            style={{
              height: "100%",
            }}
          >
            {children}
          </section>
        ))}
      </SwipeHandler>
      <BottomNavigation />
      <Index visible={!restaurant} />
    </NavigationProvider>
  );
};

export default Base;
