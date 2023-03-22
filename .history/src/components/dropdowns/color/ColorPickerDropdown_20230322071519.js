import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import css from "../dropdowns.module.css";
import { mdiPalette, mdiUndo } from "@mdi/js";
import IconButton from "@/components/buttons/IconButton";
import OutsideAlerter from "../OutsideAlerter";
//import ColorPicker from "./ColorPicker";
//import ReactColorPicker from "./HtmlColorPicker";
import ColoreactColorPicker from "./ColoreactColorPicker";
import { useSelector, useDispatch } from "react-redux";
import { selectColors } from "@/slices/themeSlice";
import { updateColor } from "@/store/sharedActions";
import { Button } from "@/components/buttons";

//smart dropdown - connected to theme
const ColorPickerDropdown = ({
  defaultColor,
  onSelect,
  onReset,
  propName,
  category,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(defaultColor);
  const [orig, setOrig] = useState(defaultColor);
  const colors = useSelector(selectColors);
  const dispatch = useDispatch();

  useEffect(() => {
    setCurrent(defaultColor);
    setOrig(defaultColor); //only set on load
  }, []);

  useEffect(() => {
    setCurrent(defaultColor);
  }, [defaultColor]);

  const styles = {
    dropdown: {
      position: "relative",
      display: "block",
      width: "100%" /*takes width of parent */,
    },
    //this is the box that shows always
    display: {
      outline: "1px solid #d5d9d9",
      borderRadius: "3px",
      boxSizing: "border-box",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      lineHeight: "29px",
      height: "35px",
      padding: 0,
      position: "relative",
      textAlign: "center",
      textDecoration: "none",
      userSelect: "none",
      WebkitUserSelect: "none",
      touchAction: "manipulation",
      zIndex: 25,
    },
    dropdowncontent: {
      display: isOpen ? "flex" : "none",
      height: "400px",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      backgroundColor: current,
      border: "0px 1px 1px 1px solid darkgray",
      transition: "display 1s",
      borderRadius: "1px",
      overflowY: "none",
    },
    buttonrow: {
      backgroundColor: current,
      paddingTop: "15px",
      display: "flex",
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
  };

  const togglePicker = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const reset = (e) => {
    let payload = {
      section: "colors",
      category: category,
      value: orig,
      themeVar: `--clr-${category}`,
    };
    dispatch(updateColor(payload));
  };

  const getClass = () => {
    let s;
    if (isOpen === true) {
      s = { ...styles.open, ...styles.dropdowncontent };
    } else {
      s = { ...styles.closed, ...styles.dropdowncontent };
    }
    return s;
  };

  const closeMe = () => {
    setIsOpen(false);
  };

  const handleChange = (hex) => {
    setCurrent(hex);
  };

  const handleSelect = (color) => {
    setCurrent(color);
    let payload = {
      section: "colors",
      category: category,
      value: color,
      themeVar: `--clr-${category}`,
    };
    dispatch(updateColor(payload));
    // setCurrent(color);
    // onSelect({ key: propName, value: color, category: category }); //to parent
    setIsOpen(false);
  };

  return (
    <OutsideAlerter key={Math.random()} onClickOutside={closeMe}>
      <div data-id="cpd-dropdown" style={styles.dropdown}>
        <div style={styles.display}>
          <span
            onClick={togglePicker}
            style={{
              backgroundColor: current,
              padding: 0,
              flexGrow: 1,
              height: "100%",
            }}
          ></span>{" "}
          <IconButton
            type={mdiUndo}
            color="darkgray"
            onClick={reset}
            style={{ borderLeft: "1px solid lightgray", width: "48px" }}
          />
        </div>
        <div style={styles.dropdowncontent}>
          <ColoreactColorPicker color={current} onChange={handleChange} />
          <div style={styles.buttonrow}>
            <Button onClick={handleSelect}>Select</Button>
            <Button onClick={closeMe}>Close</Button>
          </div>
        </div>
      </div>
    </OutsideAlerter>
  );
};

const handlePickColor = (e) => {
  console.log("color picked:", e.target.value);
};

ColorPickerDropdown.propTypes = {
  defaultColor: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default React.memo(ColorPickerDropdown);
