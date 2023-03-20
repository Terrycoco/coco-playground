"use client";
import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "@/store/themeSlice";

function Header() {
  const theme = useSelector(selectTheme);

  const getHeaderStyles = () => {
    let styles = theme.header;
  };

  return <header style={getHeaderStyles()}>Header</header>;
}

export default Header;
