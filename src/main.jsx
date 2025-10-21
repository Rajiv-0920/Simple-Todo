import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeContextProvider } from "./context/ThemeContext.jsx";
import { TodoContextProvider } from "./context/TodoContext.jsx";
import CustomScrollbarStyles from "./components/CustomScrollbarStyles.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeContextProvider>
      <TodoContextProvider>
        <CustomScrollbarStyles />
        <App />
      </TodoContextProvider>
    </ThemeContextProvider>
  </StrictMode>
);
