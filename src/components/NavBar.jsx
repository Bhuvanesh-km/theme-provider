import React, { useContext } from "react";
import '../styles/style.css';
import ThemedButton from "./button";
import { ThemeContext } from "../context-api/theme/ThemeContext";
import { THEME_ACTION_TYPES } from "../context-api/theme/ThemeReducer";

const NavBar= ()=>{
    const theme=useContext(ThemeContext);
    const darkMode=theme.state.darkMode;
    const changeTheme=()=>{
        if(darkMode){
            theme.dispatch({type: THEME_ACTION_TYPES.LIGHT});
        }else{
            theme.dispatch({type: THEME_ACTION_TYPES.DARK})
        }

    }
    return (
        <div className={`navbar ${darkMode?"navbar-dark":"navbar-light"}`}>
            <ThemedButton action={()=>changeTheme()} label="change Theme" />
        </div>
    )
}

export default NavBar;