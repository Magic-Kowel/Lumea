import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx"
import theme from "./theme";
import { ThemeProvider } from '@mui/material/styles';
import "./css/index.css"
import "./css/scroll.css"
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
