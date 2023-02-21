import { createContext, useContext, useEffect, useReducer } from "react";

const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
  const initialState = {
    location: null,
    swiper: null,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "carte": {
        window.history.replaceState(
          null,
          null,
          `/carte/${window.location.search}`
        );
        return { ...state, location: 0 };
      }
      case "informations": {
        window.history.replaceState(
          null,
          null,
          `/informations/${window.location.search}`
        );
        return { ...state, location: 1 };
      }
      case "gallerie": {
        window.history.replaceState(
          null,
          null,
          `/gallerie/${window.location.search}`
        );
        return { ...state, location: 2 };
      }
      case "reservation": {
        window.history.replaceState(
          null,
          null,
          `/reservation/${window.location.search}`
        );
        return { ...state, location: 3 };
      }
      case 0: {
        window.history.replaceState(
          null,
          null,
          `/carte/${window.location.search}`
        );
        return { ...state, location: 0 };
      }
      case 1: {
        window.history.replaceState(
          null,
          null,
          `/informations/${window.location.search}`
        );
        return { ...state, location: 1 };
      }
      case 2: {
        window.history.replaceState(
          null,
          null,
          `/gallerie/${window.location.search}`
        );
        return { ...state, location: 2 };
      }
      case 3: {
        window.history.replaceState(
          null,
          null,
          `/reservation/${window.location.search}`
        );
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
    if (window.location.pathname === "/carte") {
      dispatch({ type: "carte" });
    } else if (window.location.pathname === "/informations") {
      dispatch({ type: "informations" });
    } else if (window.location.pathname === "/gallerie") {
      dispatch({ type: "gallerie" });
    } else if (window.location.pathname === "/reservation") {
      dispatch({ type: "reservation" });
    }
  }, []);

  useEffect(() => {
    if (!state.swiper || state.swiper.destroyed) return;

    if (state.location === 0) {
      state.swiper.slideTo(0);
    } else if (state.location === 1) {
      state.swiper.slideTo(1);
    } else if (state.location === 2) {
      state.swiper.slideTo(2);
    } else if (state.location === 3) {
      state.swiper.slideTo(3);
    }
  }, [state.swiper, state.location]);

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
