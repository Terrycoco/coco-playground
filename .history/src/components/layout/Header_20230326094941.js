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

  const fixed = {
    header: {
      borderBottom: "1px solid lightgray",
    },
  };

  const getHeaderStyles = () => {
    let styles = { ...theme.containers.header, ...fixed.header };
    styles.lineHeight = styles.height; //center vertically
    return styles;
  };

  return (
    <header style={getHeaderStyles()}>
      <MainMenu />
    </header>
  );
}

export default Header;
