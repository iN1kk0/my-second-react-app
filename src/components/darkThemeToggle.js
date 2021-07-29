import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as constants from "../store/constants/theme";

export const DarkThemeToggle = () => {
  const darkThemeEnabled = useSelector(
    (state) => state.themeReducer.darkThemeEnabled
  );
  const dispatch = useDispatch();

  return (
    <p>
      <input
        type="checkbox"
        checked={darkThemeEnabled}
        onChange={() => dispatch({ type: constants.TOGGLE_DARKTHEME })}
      /> <span>Use Dark Theme</span>
    </p>
  );
};
