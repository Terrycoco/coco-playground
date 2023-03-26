"use client";
import { useSelector } from "react-redux";
import { selectTheme } from "@/slices/themeSlice";
import { selectVariables } from "@/slices/variablesSlice";

const Footer = () => {
  const theme = useSelector(selectTheme);
  const variables = useSelector(selectVariables);

  const getFooterStyle = () => {
    let styles = { ...theme.containers.footer };
    styles.backgroundColor = variables[styles.backgroundColor];
    styles.color = styles.color
      ? variables[styles.color]
      : variables["var(--clr-whitish)"];
    styles.lineHeight = styles.height ? styles.height : "2rem"; //center vertically
    return styles;
  };
  return <footer style={getFooterStyle()}>I am a footer</footer>;
};

export default Footer;
