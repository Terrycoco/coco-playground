"use client";
import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "@/slices/themeSlice";
import { selectVariables } from "@/slices/variablesSlice";

function FakeHeader() {
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
    styles.position = "sticky"; //not fixed
    return styles;
  };

  return <header style={getHeaderStyles()}>I am a fake header</header>;
}

export default FakeHeader;
