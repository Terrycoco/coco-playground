"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTheme } from "@/slices/themeSlice";
import { selectVariables } from "@/slices/variablesSlice";
import {
  updateCurrentForm,
  updateIsDrawerOpen,
  selectIsDrawerOpen,
  selectCurrentForm,
} from "@/slices/uiSlice";
import css from "./menu.module.css";
import IconButton from "@/components/buttons/IconButton";
import { mdiPencil, mdiMenu } from "@mdi/js";
import { useViewport } from "@/hooks";
import { isOneOf } from "@/utils";

function MainMenu() {
  const theme = useSelector(selectTheme);
  const variables = useSelector(selectVariables);
  const dispatch = useDispatch();
  const isDrawerOpen = useSelector(selectIsDrawerOpen);
  const currentForm = useSelector(selectCurrentForm);
  const userScreen = useViewport();
  const [menuOpen, setMenuOpen] = useState(true);

  const styles = {
    menu: {
      width: "100%",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    menuSmall: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    li: {
      //TODO SET IN TYPOGRAPHY?
      fontFamily: variables["var(--font-forms)"], //use menu >li to set text?
      fontSize: "14px",
      textTransform: "uppercase",
      paddingLeft: "1.5em",
    },
  };

  const openMenu = () => {};

  const getResponsiveMenu = () => {
    if (userScreen !== undefined && isOneOf(userScreen, ["mobile", "tablet"])) {
      return (
        <menu style={styles.menuSmall}>
          <IconButton
            onClick={openMenu}
            style={getHamburgerStyle()}
            type={mdiMenu}
          />
          <IconButton
            onClick={(e) => dispatch(updateIsDrawerOpen(!isDrawerOpen))}
            style={{ marginLeft: "1rem" }}
            type={mdiPencil}
          />
        </menu>
      );
    } else {
      return (
        <menu style={styles.menu}>
          <li
            id="typography"
            style={getLiStyles("typography")}
            className={css.li}
            onClick={handleClick}
          >
            typography
          </li>
          <li
            id="spacing"
            style={getLiStyles("spacing")}
            className={css.li}
            onClick={handleClick}
          >
            spacing
          </li>
          <li
            id="colors"
            style={getLiStyles("colors")}
            className={css.li}
            onClick={handleClick}
          >
            colors
          </li>
          <IconButton
            onClick={(e) => dispatch(updateIsDrawerOpen(!isDrawerOpen))}
            style={{ marginLeft: "1rem", paddingTop: "2px" }}
            type={mdiPencil}
          />
          <IconButton
            onClick={openMenu}
            style={getHamburgerStyle()}
            type={mdiMenu}
          />
        </menu>
      );
    }
  };

  const getHamburgerStyle = () => {
    if (userScreen !== undefined && isOneOf(userScreen, ["mobile", "tablet"])) {
      return { display: "inline-block", paddingTop: "2px" };
    } else {
      return { display: "none", paddingTop: "4px" };
    }
  };

  const getLiStyles = (src) => {
    let listyle = { ...styles.li };
    if (src === currentForm) {
      listyle.letterSpacing = "1px";
      listyle.fontWeight = "700";
    } else {
      listyle.letterSpacing = "normal";
      listyle.fontWeight = "400";
    }
    return listyle;
  };

  const handleClick = (e) => {
    let opt = e.target.id;
    e.stopPropagation();
    e.preventDefault();
    dispatch(updateCurrentForm(opt));
    dispatch(updateIsDrawerOpen(true));
  };

  return getResponsiveMenu();
}

export default MainMenu;
