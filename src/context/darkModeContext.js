import { createContext, useReducer } from "react";
import DarkModeReducer from "./darkModeReducer";

// Initial state
const INITIAL_STATE = {
  darkMode: false,
};

// Create context
export const DarkModeContext = createContext(INITIAL_STATE);

// Context provider component
export const DarkModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    dispatch({ type: "TOGGLE" });
  };

  // Provide state and toggle function to children
  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
