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
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
  };

  const getHeaderStyles = () => {
    let styles = { ...theme.containers.header };
    styles.backgroundColor = variables[styles.backgroundColor];
    return styles;
  };

  return (
    <header style={styles.header}>
      <DeviceMenu />
      <MainMenu />
    </header>
  );
}

export default Header;
