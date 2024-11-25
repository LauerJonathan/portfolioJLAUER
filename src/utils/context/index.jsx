import React, { useState } from "react";

const ThemeContext = React.createContext();
const LangContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [lang, traduce] = useState("en");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <LangContext.Provider value={{ lang, traduce }}>
        {children}
      </LangContext.Provider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, LangContext };
