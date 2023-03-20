"use client";
import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "@/slices/themeSlice";

function Header() {
  const theme = useSelector(selectTheme);

  const getHeaderStyles = () => {
    return theme.header;
  };

  return <header style={getHeaderStyles()}>Header</header>;
}

export default Header;
