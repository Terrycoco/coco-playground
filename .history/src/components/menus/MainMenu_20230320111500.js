"use client";
import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "@/slices/themeSlice";
import { selectVariables } from "@/slices/variablesSlice";
import css from "./menu.module.css";

function MainMenu() {
  const theme = useSelector(selectTheme);
  const variables = useSelector(selectVariables);

  const styles = {
    menu: {
      display: "flex",
      justifyContent: "space-evenly",
    },
    li: {
      fontFamily: "Arial, Helvetica",
      fontSize: "1em",
      textTransform: "uppercase",
      padding: "1em",
    },
  };

  const handleClick = (e) => {};

  return (
    <menu style={styles.menu}>
      <li style={styles.li} className={css.li} onClick={handleClick}>
        typography
      </li>
      <li style={styles.li} className={css.li} onClick={handleClick}>
        spacing
      </li>
      <li style={styles.li} className={css.li} onClick={handleClick}>
        colors
      </li>
      <li style={styles.li} className={css.li} onClick={handleClick}>
        edit
      </li>
    </menu>
  );
}

export default MainMenu;
