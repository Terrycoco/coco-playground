"use client";
import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "@/slices/themeSlice";
import { selectVariables } from "@/slices/variablesSlice";
import DeviceMenu from "@/components/menus/DeviceMenu";
import MainMenu from "@/components/menus/MainMenu";
import { useViewport } from "@/hooks";
import { isOneOf } from "@/utils";

function Header() {
  const theme = useSelector(selectTheme);
  const variables = useSelector(selectVariables);
  const userScreen = useViewport();

  const styles = {
    header: {
      position: "fixed",
      minWidth: "100%",
      top: 0,
      right: 0,
      left: 0,
      zIndex: 50,
      borderBottom: "1px solid lightgray",
    },
  };

  const getHeaderStyles = () => {
    let styles = { ...theme.containers.header };
    styles.backgroundColor = variables[styles.backgroundColor];
    styles.paddingLeft = "1rem";
    styles.paddingRight = "1rem";
    styles.lineHeight = styles.height ? styles.height : "2rem"; //center vertically
    return styles;
  };

  return (
    <header style={getHeaderStyles()}>
      <MainMenu />
    </header>
  );
}

export default Header;
