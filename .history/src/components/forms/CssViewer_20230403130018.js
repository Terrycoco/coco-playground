//import useStorage from "../utils/useStorage"; //do I want to do this?
import { useState, useEffect } from "react";
import { Button } from "@/components/buttons";
import { Flexy } from "@/components/flex";
import { selectTheme } from "@/slices/themeSlice";
import { selectIsCssOpen, updateIsCssOpen } from "@/slices/uiSlice";
import { useSelector, useDispatch } from "react-redux";
import Modal from "@/components/modals/Modal";
import { getThemeCss } from "@/utils/cssUtils";
//present theme (as yet unsaved to user)
//ability to copy into clipboard

const styles = {
  container: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    height: "500px",
    zIndex: "1000",
    padding: "10px 20px",
  },
  instructions: {
    display: "flex",
    flexDirection: "column",
    paddingRight: "1rem",
    width: "30%",
  },
  buttonRow: {
    display: "flex",
    flexDirection: "row",
    marginTop: "1rem",
  },
  slate: {
    backgroundColor: "steelblue",
    color: "white",
    width: "100%",
    paddingRight: "1rem",
    paddingLeft: "1rem",
    paddingBottom: "1rem",
    maxHeight: "80%",
    overflowY: "scroll",
  },
  alert: {
    position: "relative",
    backgroundColor: "white",
    color: "green",
    fontFamily: "Arial",
    marginTop: "1rem",
  },
};

const pre = `/* to use: copy into theme.css or rename and import at top level of your project */
    `;

const post = `
};

module.exports = _default;

`;

const CssViewer = (props) => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  const showMe = useSelector(selectIsCssOpen);
  const [showAlert, setShowAlert] = useState(false);

  const getThemeToRender = () => {
    let rendered = getThemeCss(theme);
    return rendered;
  };

  const getThemeToCopy = () => {
    return getThemeCss(theme);
  };

  const closeMe = () => {
    dispatch(updateIsCssOpen(false));
  };

  const copy = () => {
    // Get the text field
    var copyText = `${pre} ${getThemeToCopy()}`;
    navigator.clipboard.writeText(copyText);
    console.log("text copied");
    // Alert the copied text
    setShowAlert(true);
    setTimeout(closeAlert, 3000);
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  const renderAlert = () => {
    if (showAlert == true) {
      return <div style={styles.alert}>Copied into Clipboard!</div>;
    } else {
      return null;
    }
  };

  return (
    <>
      <Modal onClose={closeMe} show={showMe}>
        <div style={styles.container}>
          <div style={styles.instructions}>
            <div>
              This is your theme.css. Copy and paste it into{" "}
              <b>src/themes/theme.css</b> or make a new css file and make sure
              it is imported into your layout or app.
            </div>
            <div style={styles.buttonRow}>
              <Button onClick={closeMe}>Close</Button>
              <Button onClick={copy}>Copy To Clipboard</Button>
            </div>
            {renderAlert()}
          </div>
          <div style={styles.slate}>
            <Flexy className={"py-4 justify-between h-20"}>
              <Flexy className="justify-end space-x-3"></Flexy>
            </Flexy>
            <div className="font-mono top-0 w-full z-50  min-h-screen bg-zinc-700 text-whitish pt-2 px-20">
              <pre className="whitespace-pre" key="preamble">
                {pre}
              </pre>
              <pre className="whitespace-pre max-w-xl" key="themetext">
                {getThemeToRender()}
              </pre>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CssViewer;
