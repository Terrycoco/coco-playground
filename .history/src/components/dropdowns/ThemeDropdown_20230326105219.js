import PropTypes from "prop-types";
import { useState, useEffect, useCallback, useId } from "react";
import css from "./dropdowns.module.css";
import { mdiMenuDown } from "@mdi/js";
import IconButton from "@/components/buttons/IconButton";
import OutsideAlerter from "./OutsideAlerter";
import { useDispatch } from "react-redux";
import { updateThemeValue } from "@/slices/themeSlice";

const ThemeDropdown = ({
  section,
  element,
  propName,
  defaultValue,
  options,
  ...props
}) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(defaultValue);

  let styles = {
    dropdown: {
      position: "relative",
      display: "block",
      maxWidth: "auto",
      width: "100%",
      fontFamily: "var(--font-forms)",
    },
    dropbtn: {
      width: "100%",
      outline: "1px solid #d5d9d9",
      borderRadius: "3px",
      boxSizing: "border-box",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      fontFamily: "var(--font-forms)",
      fontSize: "14px",
      lineHeight: 1,
      height: "35px",
      padding: 0,
      textAlign: "left",
      textDecoration: "none",
      userSelect: "none",
      WebkitUserSelect: "none",
      touchAction: "manipulation",
      paddingLeft: "0.5rem",
      zIndex: 0,
    },
    labelBlock: {
      display: "flex",
      alignItems: "center",
    },
    label: {
      paddingRight: "1rem",
      fontSize: ".8rem",
      color: "gray",
    },
    content: {
      paddingRight: "1rem",
      position: "relative",
      zIndex: "0",
      backgroundColor: "white",
    },
    li: {
      color: "var(--clr-blackish75)",
      backgroundColor: "white",
      fontSize: "16px",
      textDecoration: "none",
      listStyleType: "none",
      display: "block",
      paddingLeft: "1rem",
    },
  };

  useEffect(() => {
    setCurrent(defaultValue);
  }, [defaultValue]);

  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsOpen(true);
  };

  const getClass = () => {
    if (isOpen) {
      return `${css.dropdowncontent} ${css.open}`;
    } else {
      return css.dropdowncontent;
    }
  };

  const closeMe = () => {
    setIsOpen(false);
  };

  const getOptions = () => {
    let result = [];
    options.map((opt, idx) => {
      result.push(
        <li
          key={`${opt}${idx}`}
          data-value={opt}
          onClick={handleSelect}
          style={styles.li}
        >
          {opt}
        </li>
      );
    });
    return result;
  };

  const handleSelect = (e) => {
    let val = e.target.dataset.value;
    e.stopPropagation();
    setCurrent(val);
    let payload = {
      section: section,
      element: element,
      propName: propName,
      value: val,
    };
    dispatch(updateThemeValue(payload));

    //callback to parent form?
    if (props.onSelect !== undefined) {
      props.onSelect(payload);
    }
    closeMe();
  };

  if (current !== undefined) {
    return (
      <OutsideAlerter
        key={Math.random()}
        onClickOutside={closeMe}
        style={styles.dropdown}
      >
        <div style={styles.labelBlock}>
          <div style={styles.dropbtn} onClick={handleClick}>
            <span style={styles.content}>{current}</span>{" "}
            <IconButton
              type={mdiMenuDown}
              color="darkgray"
              onClick={handleClick}
              style={{ borderLeft: "1px solid lightgray" }}
            />
            <ul className={getClass()}>{getOptions()}</ul>
          </div>
        </div>
      </OutsideAlerter>
    );
  } else {
    return null;
  }
};

ThemeDropdown.propTypes = {
  section: PropTypes.string.isRequired,
  element: PropTypes.string, //may be missing
  propName: PropTypes.string.isRequired,
  defaultValue: PropTypes.any,
  options: PropTypes.array.isRequired,
  onSelect: PropTypes.func, //optional callback
};

export default ThemeDropdown;
