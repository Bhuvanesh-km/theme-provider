export const initialState = {
  darkMode: false,
};
export const THEME_ACTION_TYPES = {
  DARK: "DARKMODE",
  LIGHT: "LIGHTMODE",
};

export const ThemeReducer = (state, action) => {
  switch (action.type) {
    case THEME_ACTION_TYPES.LIGHT:
      return {
        darkMode: false,
      };
    case THEME_ACTION_TYPES.DARK:
      return {
        darkMode: true,
      };
    default:
      return state;
  }
};
