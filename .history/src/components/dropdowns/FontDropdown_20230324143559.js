import PropTypes from "prop-types";
import { useState, useEffect, useCallback, useId } from "react";
import css from "./dropdowns.module.css";
import { mdiMenuDown } from "@mdi/js";
import IconButton from "@/components/buttons/IconButton";
import OutsideAlerter from "./OutsideAlerter";
import { useSelector, useDispatch } from "react-redux";
import { selectVariables } from "@/slices/variablesSlice";
import { updateFont } from "@/store/sharedActions";

const DropdownOption = (props) => {
  const variables = useSelector(selectVariables);
  const dispatch = useDispatch();

  const handleSelect = (e) => {
    //make smart
    let payload = {
      section: props.section,
      propName: props.propName,
      fontVar: props.fontVar,
      themeVar: props.themeVar,
      name: props.name, //display name of font
      element: props.element,
    };
    console.log("payload to send", payload);
    dispatch(updateFont(payload));
    props.onSelect(payload); //to parent to close dropdown
  };

  const getDisplay = () => {
    if (props.section === "fonts") {
      return props.name;
    } else {
      return [
        <span
          key={`${element}${propName}lab`}
          style={{
            width: "50%",
            fontFamily: variables["var(--font-forms)"],
            color: "gray",
          }}
        >
          {props.category}
        </span>,
        <span
          key={`${element}${propName}val`}
          style={{
            width: "50%",
            fontFamily: props.fontVar,
            paddingLeft: "0.5rem",
          }}
        >
          {props.name}
        </span>,
      ];
    }
  };

  return (
    <li
      key={props.fontVar}
      data-value={props.fontVar}
      onClick={handleSelect}
      style={{
        fontFamily: props.fontVar,
        display: props.section === "fonts" ? "block" : "flex",
      }}
    >
      {getDisplay()}
    </li>
  );
};

const FontDropdown = ({
  element,
  propName,
  options,
  defaultObj,
  onSelect,
  id,
  section,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(defaultObj);

  useEffect(() => {
    setCurrent(defaultObj);
  }, [defaultObj]);

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
  };

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

  const handleSelect = (obj) => {
    setCurrent(obj);
    console.log("obj selected:", obj);
    setIsOpen(false);
  };

  const getOptions = () => {
    let result = [];
    if (options == undefined) return <li>Loading...</li>;
    //is array (from all fonts )
    if (Array.isArray(options)) {
      options.map((opt, idx) => {
        result.push(
          <DropdownOption
            section={section}
            element={element} //
            propName={propName}
            key={`opt${idx}`}
            onSelect={handleSelect}
            fontVar={opt.fontVar}
            name={opt.name}
            style={{ fontFamily: opt.fontVar }}
            category={opt.propName}
            showCategory={section === "fonts" ? false : true}
            themeVar={
              section === "fonts" ? `var(--font-${propName})` : opt.themeVar
            }
          />
        );
      });
    }
    return result;
  };

  if (current !== undefined) {
    return (
      <OutsideAlerter key={Math.random()} onClickOutside={closeMe}>
        <div data-id="font-dropdown" style={styles.dropdown}>
          <div style={styles.display} onClick={handleClick}>
            <span style={{ fontFamily: current.fontVar }}>{current.name}</span>{" "}
            <IconButton
              key={`icon${id}`}
              type={mdiMenuDown}
              color="darkgray"
              onClick={handleClick}
              style={{ borderLeft: "1px solid lightgray" }}
            />
          </div>

          <ul className={getClass()}>{getOptions()}</ul>
        </div>
      </OutsideAlerter>
    );
  } else {
    return null;
  }
};

FontDropdown.propTypes = {
  section: PropTypes.string.isRequired,
  element: PropTypes.string, //will be missing for font settings
  propName: PropTypes.string.isRequired, //"body" or "fontFamily"
  defaultObj: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired, //array sent in to avoid repetition
};

export default FontDropdown;
