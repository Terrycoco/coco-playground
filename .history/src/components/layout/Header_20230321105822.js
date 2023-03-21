"use client";
import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "@/slices/themeSlice";
import { selectVariables } from "@/slices/variablesSlice";
import DeviceMenu from "@/components/menus/DeviceMenu";
import MainMenu from "@/components/menus/MainMenu";

function Header() {
  const theme = useSelector(selectTheme);
  const variables = useSelector(selectVariables);

  const styles = {
    header: {
      position: "fixed",
      width: "100%",
      top: 0,
      right: 0,
      left: 0,
      zIndex: 5,
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      borderBottom: "1px solid lightgray",
    },
  };

  const getHeaderStyles = () => {
    let styles = { ...theme.containers.header };
    styles.backgroundColor = variables[styles.backgroundColor];
    styles.display = "flex";
    styles.justifyContent = "space-between";
    styles.flexWrap = "wrap";
    styles.alignItems = "center";
    (styles.paddingLeft = "1rem"), (styles.paddingRight = "1rem");
    return styles;
  };

  return (
    <header style={getHeaderStyles()}>
      <DeviceMenu />
      <MainMenu />
    </header>
  );
}

export default Header;
