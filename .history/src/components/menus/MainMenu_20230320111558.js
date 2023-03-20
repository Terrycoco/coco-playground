"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTheme } from "@/slices/themeSlice";
import { selectVariables } from "@/slices/variablesSlice";
import css from "./menu.module.css";

function MainMenu() {
  const theme = useSelector(selectTheme);
  const variables = useSelector(selectVariables);
  const dispatch = useDispatch();

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

  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <menu style={styles.menu}>
      <li
        id="typography"
        style={styles.li}
        className={css.li}
        onClick={handleClick}
      >
        typography
      </li>
      <li
        id="spacing"
        style={styles.li}
        className={css.li}
        onClick={handleClick}
      >
        spacing
      </li>
      <li
        id="colors"
        style={styles.li}
        className={css.li}
        onClick={handleClick}
      >
        colors
      </li>
      <li id="edit" style={styles.li} className={css.li} onClick={handleClick}>
        edit
      </li>
    </menu>
  );
}

export default MainMenu;
