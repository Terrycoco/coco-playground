"use client";
import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "@/slices/themeSlice";
import { selectVariables } from "@/slices/variablesSlice";

function Header() {
  const theme = useSelector(selectTheme);
  const variables = useSelector(selectVariables);
  console.log("header theme:", theme.containers.header);

  const getHeaderStyles = () => {
    let styles = { ...theme.containers.header };
    styles.backgroundColor = variables[styles.backgroundColor];
  };

  return <header style={getHeaderStyles()}>Header</header>;
}

export default Header;
