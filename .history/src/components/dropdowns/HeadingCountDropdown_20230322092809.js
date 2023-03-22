import PropTypes from "prop-types";
import { useState, useEffect, useCallback, useId } from "react";
import css from "./dropdowns.module.css";
import { mdiMenuDown } from "@mdi/js";
import IconButton from "@/components/buttons/IconButton";
import OutsideAlerter from "./OutsideAlerter";
import { useSelector } from "react-redux";
import { selectHeadingCount } from "@/slices/themeSlice";
import { selectVariables } from "@/slices/variablesSlice";

const HeadingCountDropdown = (props) => {
  const headingCount = useSelector(selectHeadingCount);
  const variables = useSelector(selectVariables);
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(1);

  let styles = {
    dropdown: {
      position: "relative",
      display: "block",
      maxWidth: "auto",
      fontFamily: variables["var(--font-forms)"],
    },
    labelBlock: {
      display: "inline-flex",
      alignItems: "center",
    },
    label: {
      paddingRight: "1rem",
      fontSize: ".8rem",
      color: "gray",
    },
    content: {
      paddingRight: "1rem",
    },
    li: {
      color: "var(--clr-blackish75)",
      backgroundColor: "white",
      fontSize: "16px",
      textDecoration: "none",
      listStyleType: "none",
      display: "block",
      marginLeft: "-20px",
    },
  };

  useEffect(() => {
    setCurrent(headingCount);
  }, []);

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

  const handleSelect = (e) => {
    e.stopPropagation();
    setCurrent(e.target.dataset.value);
    props.onSelect(e.target.dataset.value); //right up to parent (form)
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
          <span style={styles.label}>Number of Headings</span>

          <div className={css.dropbtn} onClick={handleClick}>
            <span style={styles.content}>{current}</span>{" "}
            <IconButton
              type={mdiMenuDown}
              color="darkgray"
              onClick={handleClick}
              style={{ borderLeft: "1px solid lightgray" }}
            />
            <ul className={getClass()}>
              <li
                key="hc1"
                data-value={1}
                onClick={handleSelect}
                style={styles.li}
              >
                1
              </li>
              <li
                key="hc2"
                data-value={2}
                onClick={handleSelect}
                style={styles.li}
              >
                2
              </li>
              <li
                key="hc3"
                data-value={3}
                onClick={handleSelect}
                style={styles.li}
              >
                3
              </li>
              <li
                key="hc4"
                data-value={4}
                onClick={handleSelect}
                style={styles.li}
              >
                4
              </li>
              <li
                key="hc5"
                data-value={5}
                onClick={handleSelect}
                style={styles.li}
              >
                5
              </li>
              <li
                key="hc6"
                data-value={6}
                onClick={handleSelect}
                style={styles.li}
              >
                6
              </li>
            </ul>
          </div>
        </div>
      </OutsideAlerter>
    );
  } else {
    return null;
  }
};

export default HeadingCountDropdown;
