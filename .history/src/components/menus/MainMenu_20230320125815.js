"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTheme } from "@/slices/themeSlice";
import { selectVariables } from "@/slices/variablesSlice";
import {
  updateCurrentForm,
  updateIsDrawerOpen,
  selectIsDrawerOpen,
} from "@/slices/uiSlice";
import css from "./menu.module.css";
import IconButton from "@/components/buttons/IconButton";
import { mdiPencil } from "@mdi/js";

function MainMenu() {
  const theme = useSelector(selectTheme);
  const variables = useSelector(selectVariables);
  const dispatch = useDispatch();
  const isDrawerOpen = useSelector(selectIsDrawerOpen);

  const styles = {
    menu: {
      display: "flex",
      justifyContent: "space-evenly",
    },
    li: {
      fontFamily: "Arial, Helvetica",
      fontSize: "1em",
      textTransform: "uppercase",
      paddingLeft: "1.5em",
    },
  };

  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    let opt = e.target.id;
    if (opt == "edit") {
      dispatch(updateIsDrawerOpen(!isDrawerOpen));
    } else {
      dispatch(updateCurrentForm(opt));
      dispatch(updateIsDrawerOpen(true));
    }
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
      <IconButton
        onClick={(e) => dispatch(updateDrawerIsOpen(!isDrawerOpen))}
        type={mdiPencil}
      />
    </menu>
  );
}

export default MainMenu;
