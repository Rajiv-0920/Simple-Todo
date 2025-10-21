import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    () => JSON.parse(localStorage.getItem("theme")) || "light"
  );

  useEffect(() => {
    const root = document.firstElementChild;
    localStorage.setItem("theme", JSON.stringify(theme));
    root.classList.remove("dark", "light");
    root.classList.add(theme);
  }, [theme]);

  const handleToggle = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ handleToggle, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
