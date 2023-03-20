"use client";
import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "@/store/themeSlice";

function Header() {
  const theme = useSelector(selectTheme);
  return <header>Header</header>;
}

export default Header;
