"use client";
import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "@/slices/themeSlice";
import { selectVariables } from "@/slices/variablesSlice";
import DeviceMenu from "@/components/menus/DeviceMenu";

function Header() {
  const theme = useSelector(selectTheme);
  const variables = useSelector(selectVariables);

  const styles = {
    menu: {
      display: "flex",
      justifyContent: "space-evenly",
    },
    li: {
      fontSize: "1rem",
      textTransform: "uppercase",
      fontFamily: "Arial",
    },
  };

  const getHeaderStyles = () => {
    let styles = { ...theme.containers.header };
    styles.backgroundColor = variables[styles.backgroundColor];
    return styles;
  };

  return (
    <header>
      <menu style={styles.menu}>
        <li style={styles.li}>typography</li>
        <li style={styles.li}>spacing</li>

        <li style={styles.li}>colors</li>
        <li style={styles.li}>edit</li>
      </menu>
    </header>
  );
}

export default Header;
