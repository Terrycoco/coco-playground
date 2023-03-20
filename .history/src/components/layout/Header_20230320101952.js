"use client";
import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "@/slices/themeSlice";
import { selectVariables } from "@/slices/variablesSlice";

function Header() {
  const theme = useSelector(selectTheme);
  const variables = useSelector(selectVariables);

  const getHeaderStyles = () => {
    let styles = { ...theme.containers.header };
    styles.backgroundColor = variables[styles.backgroundColor];
    return styles;
  };

  return (
    <header style={getHeaderStyles()}>
      <menu>
        <li>typography</li>
        <li>spacing</li>
        <li>colors</li>
      </menu>
    </header>
  );
}

export default Header;
