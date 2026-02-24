import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./context/ThemeProvider.jsx";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./components/global.css";
import { MovieProvider } from "./context/MovieProvider";
import { AuthProvider } from "./context/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <MovieProvider>
          <App />
        </MovieProvider>
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>,
);
