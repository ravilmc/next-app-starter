export const theme = {
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#07c",
    secondary: "#30c",
    muted: "#f6f6f6",
    gray: "#dddddf",
    highlight: "hsla(205, 100%, 40%, 0.125)",
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Georgia, serif",
    monospace: "Menlo, monospace",
  },
  fontSizes: {},
  breakpoints: {},
  transition: {},
};
import { createContext, useContext } from "react";

export const ThemeContext = createContext(theme);

export function useTheme() {
  return theme;
}
