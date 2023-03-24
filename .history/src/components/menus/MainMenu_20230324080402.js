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
import OutsideAlerter from "@/components/dropdowns/OutsideAlerter";

function MainMenu() {
  const theme = useSelector(selectTheme);
  const variables = useSelector(selectVariables);
  const dispatch = useDispatch();
  const isDrawerOpen = useSelector(selectIsDrawerOpen);
  const currentForm = useSelector(selectCurrentForm);
  const userScreen = useViewport();
  const [menuOpen, setMenuOpen] = useState(false);

  const styles = {
    bigmenu: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    menu: {
      flex: 1,
      display: "flex",
      justifyContent: "end",
      alignItems: "center",
    },
    menuSmall: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    submenu: {
      display: "block",
      position: "fixed",
      top: theme.containers.header.height,
      left: 0,
      height: menuOpen ? "auto" : "0px",
      display: menuOpen ? "block" : "none",
      backgroundColor: variables["var(--clr-primary)"],
      paddingRight: "1rem",
      zIndex: 50,
      transition: "height 2s ease-in-out, display 2s ease-in-out",
    },
    li: {
      //TODO SET IN TYPOGRAPHY?
      fontFamily: variables["var(--font-forms)"], //use menu >li to set text?
      fontSize: "14px",
      textTransform: "uppercase",
      paddingLeft: "1.5em",
    },
    logo: {
      fontFamily: "var(--font-caveat)",
      color: "white",
      width: "auto",
      fontSize: "1.5rem",
      letterSpacing: "2px",
      fontWeight: "700",
    },
  };

  const getSubMenu = () => {
    return (
      <OutsideAlerter
        key={Math.random()}
        onClickOutside={(e) => setMenuOpen(false)}
      >
        <menu style={styles.submenu}>
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
        </menu>
      </OutsideAlerter>
    );
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClick = (e) => {
    let opt = e.target.id;
    e.stopPropagation();
    e.preventDefault();
    dispatch(updateCurrentForm(opt));
    dispatch(updateIsDrawerOpen(true));
    setTimeout(() => setMenuOpen(false), 1000);
  };

  const getResponsiveMenu = () => {
    if (userScreen !== undefined && isOneOf(userScreen, ["mobile", "tablet"])) {
      return (
        <menu style={styles.menuSmall}>
          <IconButton
            onClick={toggleMenu}
            style={getHamburgerStyle()}
            type={mdiMenu}
          />
          {getSubMenu()}
          <span style={styles.logo}>Playground</span>

          <IconButton
            onClick={(e) => dispatch(updateIsDrawerOpen(!isDrawerOpen))}
            style={{ marginLeft: "1rem" }}
            type={mdiPencil}
          />
        </menu>
      );
    } else {
      return (
        <div style={styles.bigmenu}>
          <div style={styles.logo}>Coco Theme Playground</div>
          <menu style={styles.menu}></menu>
          <li
            id="typography"
            style={getLiStyles("typography")}
            className={css.li}
            onClick={handleClick}
          >
            typography
          </li>
          <li
            id="containers"
            style={getLiStyles("containers")}
            className={css.li}
            onClick={handleClick}
          >
            containers
          </li>
          <li
            id="misc"
            style={getLiStyles("misc")}
            className={css.li}
            onClick={handleClick}
          >
            misc
          </li>
          <li
            id="settings"
            style={getLiStyles("settings")}
            className={css.li}
            onClick={handleClick}
          >
            settings
          </li>
          <IconButton
            onClick={(e) => dispatch(updateIsDrawerOpen(!isDrawerOpen))}
            style={{ marginLeft: "1rem", paddingTop: "4px" }}
            type={mdiPencil}
          />
        </div>
      );
    }
  };

  const getHamburgerStyle = () => {
    if (userScreen !== undefined && isOneOf(userScreen, ["mobile", "tablet"])) {
      return { display: "inline-block", marginTop: "4px" };
    } else {
      return { display: "none" };
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

  return getResponsiveMenu();
}

export default MainMenu;
