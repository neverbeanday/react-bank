import React from "react";

export const ThemeContext = React.createContext({
  backgroundTheme: "dark",
  colorTheme: "white",
  onChangeTheme: () => {},
});
