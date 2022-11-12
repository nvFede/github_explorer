import { createContext } from "react";

const SetupThemeContext =  createContext()

export const SetupThemeProvider = ({ children, value }) => {
    return (
        <SetupThemeContext.Provider value={value}>
          {children}
        </SetupThemeContext.Provider>
    );
};

export default SetupThemeContext;