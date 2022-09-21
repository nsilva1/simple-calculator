import { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [calc, setCalc] = useState({
    sign: "",
    number: 0,
    result: 0,
  });

  const providerValue = {
    calc,
    setCalc,
  };
  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
