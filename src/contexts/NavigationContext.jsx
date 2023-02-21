import { createContext, useContext, useEffect, useReducer } from "react";

const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
  const initialState = {
    location: 0,
    swiper: null,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "index": {
        window.history.replaceState(null, null, "/");
        return { ...state, location: 0 };
      }
      case "informations": {
        window.history.replaceState(null, null, "/informations");
        return { ...state, location: 1 };
      }
      case "gallerie": {
        window.history.replaceState(null, null, "/gallerie");
        return { ...state, location: 2 };
      }
      case "reservations": {
        window.history.replaceState(null, null, "/reservations");
        return { ...state, location: 3 };
      }
      case 0: {
        window.history.replaceState(null, null, "/");
        return { ...state, location: 0 };
      }
      case 1: {
        window.history.replaceState(null, null, "/informations");
        return { ...state, location: 1 };
      }
      case 2: {
        window.history.replaceState(null, null, "/gallerie");
        return { ...state, location: 2 };
      }
      case 3: {
        window.history.replaceState(null, null, "/reservations");
        return { ...state, location: 3 };
      }
      case "setSwiper": {
        return { ...state, swiper: action.swiper };
      }
      default: {
        throw new Error(`Unhandled action type: ${action.type}`);
      }
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // Default location
    if (window.location.pathname === "/") {
      dispatch({ type: "index" });
    } else if (window.location.pathname === "/informations") {
      dispatch({ type: "informations" });
    } else if (window.location.pathname === "/gallerie") {
      dispatch({ type: "gallerie" });
    } else if (window.location.pathname === "/reservations") {
      dispatch({ type: "reservations" });
    }
  }, []);

  return (
    <NavigationContext.Provider
      value={{
        location: state.location,
        swiper: state.swiper,
        dispatch,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
};

export { NavigationProvider, useNavigation };
