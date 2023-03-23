"use client";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useViewport } from "@/hooks";
import { selectTheme } from "@/slices/themeSlice";
import { updateCurrentDevice, updateUserDevice } from "@/slices/uiSlice";
import { fonts } from "@/fonts/allFonts";
import { selectVariables } from "@/slices/variablesSlice";

export default function Page() {
  const dispatch = useDispatch();
  const userScreen = useViewport();
  const theme = useSelector(selectTheme);

  //run once
  useEffect(() => {
    dispatch(updateCurrentDevice(userScreen));
  }, []);

  //after render update current device
  useEffect(() => {
    dispatch(updateUserDevice(userScreen));
  }, [dispatch, userScreen]);

  const getTextStyle = (el) => {
    let style = { ...theme.text[el] };
    return style;
  };

  return (
    <main>
      <section>
        <p data-el="p" style={getTextStyle("p")}>
          Your theme settings will show up here. These are the default styles
          for each element, which will be consistent across your project. You
          can, of course, alter them for individual elements as you see fit.
        </p>
      </section>
    </main>
  );
}

// <section id="theme" style={getContainerStyle("section")}>
// <h1 style={getHStyle("h1")}>
//   This the result of your Theme{"   "}
//   <span style={styles.smgray}>(h1)</span>
// </h1>
// <h2 style={getHStyle("h2")}>
//   Your Default Styles Are Shown{"   "}
//   <span style={styles.smgray}>(h2)</span>
// </h2>
// <h3 style={getHStyle("h3")}>
//   You selected {`${levCount - 1}`} levels of headings.
//   <span style={styles.smgray}>(h3)</span>
// </h3>

// <h4 style={getHStyle("h4")}>
//   I am a heading level 4 {"   "}
//   <span style={styles.smgray}>(h4)</span>
// </h4>

// <h5 style={getHStyle("h5")}>
//   I am a heading level 5{"   "}
//   <span style={styles.smgray}>(h5)</span>
// </h5>

// <h6 style={getHStyle("h6")}>
//   I am a heading level 6{"   "}
//   <span style={styles.smgray}>(h6)</span>
// </h6>

// <p data-el="p" style={getTextStyle("p")}>
//   Your theme settings will show up here. These are the default styles
//   for each element, which will be consistent across your project. You
//   can, of course, alter them for individual elements as you see fit.{" "}
//   <span style={styles.smgray}>(p)</span>
// </p>
// <p data-el="p" style={getTextStyle("p")}>
//   This is the paragraph element. To set the font scale among the
//   different headings and at different screen resolutions, go to{" "}
//   <b>SCALE</b>. The rest of the paragraph settings can be found by
//   clicking <b>TEXT</b> <span style={styles.smgray}>(p)</span>
// </p>

// <p data-el="p" style={getTextStyle("p")}>
//   Don't like the spacing? Click <b>CONTAINERS</b> to set default padding
//   and margins for container elements like sections, the header and
//   footer, between paragraphs, etc.{" "}
//   <span style={styles.smgray}>(p)</span>
// </p>
// </section>
// <section id="colors" style={getContainerStyle("section")}>
// <h1 style={getHStyle("h1")}>
//   This the result of your Theme{"   "}
//   <span style={styles.smgray}>(h1)</span>
// </h1>
// <h2 style={getHStyle("h2")}>
//   Your Default Styles Are Shown{"   "}
//   <span style={styles.smgray}>(h2)</span>
// </h2>
// <h3 style={getHStyle("h3")}>
//   You selected {`${levCount - 1}`} levels of headings.
//   <span style={styles.smgray}>(h3)</span>
// </h3>

// <h4 style={getHStyle("h4")}>
//   I am a heading level 4 {"   "}
//   <span style={styles.smgray}>(h4)</span>
// </h4>

// <h5 style={getHStyle("h5")}>
//   I am a heading level 5{"   "}
//   <span style={styles.smgray}>(h5)</span>
// </h5>

// <h6 style={getHStyle("h6")}>
//   I am a heading level 6{"   "}
//   <span style={styles.smgray}>(h6)</span>
// </h6>

// <p data-el="p" style={getTextStyle("p")}>
//   Your typography styles will show up here. These are the default styles
//   for each element, which will be consistent across your project. You
//   can, of course, alter them for individual elements as you see fit.{" "}
//   <span style={styles.smgray}>(p)</span>
// </p>
// <p data-el="p" style={getTextStyle("p")}>
//   This is the paragraph element. To set the font scale among the
//   different headings and at different screen resolutions, go to{" "}
//   <b>SCALE</b>. The rest of the paragraph settings can be found by
//   clicking <b>TYPOGRAPHY</b> <span style={styles.smgray}>(p)</span>
// </p>

// <p data-el="p" style={getTextStyle("p")}>
//   Don't like the spacing? Click <b>SPACING</b> to set default padding
//   and margins for elements like sections, the header and footer, between
//   paragraphs, etc. <span style={styles.smgray}>(p)</span>
// </p>
// </section>
