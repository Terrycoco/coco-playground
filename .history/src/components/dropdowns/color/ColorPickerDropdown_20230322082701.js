import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import css from "../dropdowns.module.css";
import { mdiPalette, mdiUndo } from "@mdi/js";
import IconButton from "@/components/buttons/IconButton";
import OutsideAlerter from "../OutsideAlerter";
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
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      zIndex: 40,
      height: "auto",
      flexDirection: "column",
      alignItems: "start",
      justifyContent: "start",
      backgroundColor: current,
      border: "0px 1px 1px 1px solid darkgray",
      transition: "display 1s",
      borderRadius: "1px",
      overflowY: "none",
      padding: "1rem .5rem",
    },
    buttonrow: {
      backgroundColor: current,
      display: "flex",
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
    hex: {
      height: "20px",
      width: "100px",
      margin: "0 auto 1rem auto",
      textAlign: "center",
      fontFamily: "Arial",
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

  const handleInput = (e) => {
    let val = e.target.value;
    console.log("val:", val);

    if (val.length === 7 && val[0] == "#") {
      setCurrent(val);
    } else if (val.length === 6 && val[0] !== "#") {
      setCurrent(`#${val}`);
    }
  };

  const handleFocus = (e) => {
    e.target.select();
  };

  const handleSelect = (e) => {
    let payload = {
      section: "colors",
      category: category,
      value: current,
      themeVar: `--clr-${category}`,
    };
    dispatch(updateColor(payload));
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
          <input
            style={styles.hex}
            type="text"
            defaultValue={current}
            onChange={handleInput}
            onFocus={handleFocus}
          ></input>
          <div style={styles.buttonrow}>
            <Button onClick={handleSelect}>Select</Button>
            <Button onClick={closeMe}>Close</Button>
          </div>
        </div>
      </div>
    </OutsideAlerter>
  );
};

ColorPickerDropdown.propTypes = {
  defaultColor: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default React.memo(ColorPickerDropdown);
