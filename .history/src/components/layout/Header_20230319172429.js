"use client";
import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "@/app/store/slices/themeSlice";

function Header() {
  const theme = useSelector(selectTheme);
  console.log("header theme:", theme);

  const getHeaderStyles = () => {
    return { backgroundColor: "black" };
  };

  return <header style={getHeaderStyles()}>Header</header>;
}

export default Header;
