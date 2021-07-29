import * as constants from "../constants/theme";

const initialState = {
  darkThemeEnabled: false,
};

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.TOGGLE_DARKTHEME:
      return { ...state, darkThemeEnabled: !state.darkThemeEnabled };

    default:
      return state;
  }
};
