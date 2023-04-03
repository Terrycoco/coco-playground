"use client";
import { getClient, clientNoCache } from "./client";
import { gql, useQuery } from "@apollo/client";
import { useEffect, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useViewport } from "@/hooks";
import { selectTheme } from "@/slices/themeSlice";
import {
  updateCurrentDevice,
  updateUserDevice,
  selectCurrentDevice,
  selectIsThemeOpen,
  selectIsCssOpen,
} from "@/slices/uiSlice";
import { selectVariables } from "@/slices/variablesSlice";
import { getTextColorFromHex } from "@/utils/colorUtils";
import { getCSSVariablesForDOM } from "@/utils/cssUtils";
import ThemeViewer from "@/components/forms/ThemeViewer";
import CssViewer from "@/components/forms/CssViewer";

const query = gql`
  query Now {
    now(id: "1")
  }
`;

export default function Page() {
  // const client = getClient();
  // const { loading, data } = useQuery(query, { client });

  const [, updateState] = useState();
  const [bodyFont, setBodyFont] = useState();
  const dispatch = useDispatch();
  const userScreen = useViewport();
  const theme = useSelector(selectTheme);
  const currentDevice = useSelector(selectCurrentDevice);
  const variables = useSelector(selectVariables);
  const [cssVars, setCssVars] = useState(`body: {backgroundColor: black;}`);
  const isThemeOpen = useSelector(selectIsThemeOpen);
  const isCssOpen = useSelector(selectIsCssOpen);

  const styles = {
    smgray: {
      fontSize: "12px",
      color: "gray",
    },
  };

  useEffect(() => {
    //run once
    if (currentDevice == undefined) {
      dispatch(updateCurrentDevice(userScreen));
    }
    dispatch(updateUserDevice(userScreen));
  }, [dispatch, userScreen, currentDevice]);

  useEffect(() => {
    if (variables !== undefined) {
      setCssVars(getCSSVariablesForDOM(variables));
    }
  }, [variables]);

  // const forceUpdate = useCallback(() => {
  //   console.log("update forced");
  //   updateState({});
  // }, []);

  const getContainerStyle = (el) => {
    let style = { ...theme.containers[el] };
    style.backgroundColor = style.backgroundColor
      ? variables[style.backgroundColor]
      : "inherit";
    //change rems to em
    for (const prp in style) {
      style[prp] = style[prp].replace("rem", "em");
    }
    return style;
  };

  const getTextStyle = (el) => {
    if (currentDevice !== undefined) {
      let style = { ...theme.text[el] };
      let fs = theme.text[el].fontSize[currentDevice];
      let fsem = fs.replace("rem", "em");
      let lh = theme.text[el].lineHeight[currentDevice];
      style.fontFamily = variables[style.fontFamily];
      style.fontSize = fsem;
      style.lineHeight = lh;
      style.color = style.color
        ? variables[style.color]
        : variables["var(--clr-blackish)"];
      return style;
    }
  };

  const getHStyle = (el) => {
    //just need to add whether to display or not
    if (currentDevice !== undefined) {
      let level = parseInt(el[1]);

      if (level > theme.project.headingCount) {
        return { display: "none" };
      } else {
        let style = { ...theme.text[el] };
        let fs = theme.text[el].fontSize[currentDevice];
        let fsem = fs.replace("rem", "em");
        let lh = theme.text[el].lineHeight[currentDevice];
        style.fontFamily = variables[style.fontFamily];
        style.fontSize = fsem;
        style.lineHeight = lh;
        style.color = style.color
          ? variables[style.color]
          : variables["var(--clr-blackish)"];
        return style;
      }
    }
  };

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  return (
    <>
      <style type="text/css">{cssVars}</style>
      <ThemeViewer />
      <CssViewer />
      <main style={getContainerStyle("main")}>
        <section style={getContainerStyle("section")}>
          {/*data.now*/}
          <h1 style={getHStyle("h1")}>
            Welcome to Theme Playground{"   "}
            <span style={styles.smgray}>(h1)</span>
          </h1>
          <h2 style={getHStyle("h2")}>
            Your Default Styles Are Shown{"   "}
            <span style={styles.smgray}>(h2)</span>
          </h2>
          <h3 style={getHStyle("h3")}>
            You selected {`${theme.project.headingCount}`} levels of headings
            <span style={styles.smgray}>(h3)</span>
          </h3>

          <h4 style={getHStyle("h4")}>
            I am a heading level 4 {"   "}
            <span style={styles.smgray}>(h4)</span>
          </h4>

          <h5 style={getHStyle("h5")}>
            I am a heading level 5{"   "}
            <span style={styles.smgray}>(h5)</span>
          </h5>

          <h6 style={getHStyle("h6")}>
            I am a heading level 6{"   "}
            <span style={styles.smgray}>(h6)</span>
          </h6>
          <p data-el="p" style={getTextStyle("p")}>
            Your theme settings will show up here. These are the default styles
            for each element, which will be consistent across your project. You
            can, of course, alter them for individual elements as you see fit.
          </p>
        </section>
      </main>
    </>
  );
}
