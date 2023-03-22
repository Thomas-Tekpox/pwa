import { createContext, useContext } from "react";

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  return <ApiContext.Provider value={{}}>{children}</ApiContext.Provider>;
};

const useApi = () => {
  if (!useContext(ApiContext)) {
    throw new Error("useApi must be used within ApiProvider");
  }

  return useContext(ApiContext);
};

export { ApiProvider, useApi };
