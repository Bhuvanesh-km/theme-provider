import { useReducer } from "react";
import { ThemeContext } from "./ThemeContext";
import { ThemeReducer, initialState } from "./ThemeReducer";

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(ThemeReducer, initialState);
  return (
    <ThemeContext.Provider value={{ state: state, dispatch: dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
