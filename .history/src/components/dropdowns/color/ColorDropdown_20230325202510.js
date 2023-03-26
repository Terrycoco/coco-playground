import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import css from "../dropdowns.module.css";
import { mdiMenuDown } from "@mdi/js";
import IconButton from "@/components/buttons/IconButton";
import OutsideAlerter from "../OutsideAlerter";
import { useSelector, useDispatch } from "react-redux";
import {
  selectColors,
  selectColorVariants,
  updateThemeValue,
} from "@/slices/themeSlice";
import { getTextColorFromHex, isValidHexCode } from "@/utils/colorUtils";
import { selectVariables } from "@/slices/variablesSlice";

const valToKey = (val) => {
  let str = val;
  if (val.startsWith("var")) {
    str = val.substring(10);
    str = str.slice(0, -1);
  }
  return str;
};

const DropdownOption = ({
  element,
  propName,
  label,
  value,
  onSelect,
  isVariant,
  themeVar,
  textColor,
}) => {
  const handleSelect = (e) => {
    e.stopPropagation();
    onSelect({
      propName: label,
      value: value,
      isVariant: isVariant,
      themeVar: themeVar,
      textColor: textColor,
    }); //to parent
  };

  return (
    <li
      key={element + propName + value}
      data-value={value}
      onClick={handleSelect}
      style={{
        backgroundColor: value,
        color: textColor,
        display: "flex",
        justifyContent: "center",
      }}
    >
      {label}
    </li>
  );
};

const ColorDropdown = ({
  section,
  element,
  propName,
  defaultValue,
  onSelect,
}) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const colors = useSelector(selectColors);
  const variants = useSelector(selectColorVariants);
  const [currentValue, setCurrentValue] = useState();
  const [currentKey, setCurrentKey] = useState();
  const [currentTextColor, setCurrentTextColor] = useState();
  const variables = useSelector(selectVariables);

  useEffect(() => {
    //look up hex code if possible
    if (!isValidHexCode(defaultValue)) {
      let hex = variables[defaultValue];
      setCurrentKey(valToKey(defaultValue));
      setCurrentValue(hex);
      setCurrentTextColor(variables[getTextColorFromHex(hex)]);
    } else {
      setCurrentValue(defaultValue); //last resort
      setCurrentTextColor(variables[getTextColorFromHex(defaultValue)]);
    }
  }, [variables, defaultValue]);

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
    setCurrentValue(obj.value);
    setCurrentTextColor(obj.textColor);
    setCurrentKey(obj.propName);
    console.log("dropdown receives:", obj);
    const payload = {
      section: section,
      element: element,
      propName: propName,
      value: obj.themeVar,
    };
    dispatch(updateThemeValue(payload));
    setIsOpen(false);
  };

  const getOptions = () => {
    let result = [];
    if (colors == undefined) return <li>"Loading..."</li>;

    Object.keys(colors).map((varname, idx) => {
      let themeVar = `var(--clr-${varname})`;
      let hex = variables[themeVar];
      result.push(
        <DropdownOption
          id={varname}
          key={`cdd${idx}`}
          onSelect={handleSelect}
          value={variables[themeVar]}
          textColor={variables[getTextColorFromHex(hex)]}
          label={valToKey(varname)}
          isVariant={false}
          themeVar={themeVar}
        />
      );
    });
    result.push(
      <div
        style={{
          height: "2rem",
          color: "var(--clr-blackish10)",
          paddingTop: ".75rem",
          backgroundColor: "white",
          width: "100%",
          textAlign: "center",
        }}
      ></div>
    );
    Object.keys(variants).map((varname, idx) => {
      let themeVar = `var(--clr-${varname})`;
      let hex = variables[themeVar];
      result.push(
        <DropdownOption
          key={`${element}${propName}${idx}`}
          id={varname}
          onSelect={handleSelect}
          value={variables[themeVar]}
          label={varname}
          isVariant={true}
          themeVar={themeVar}
          textColor={variables[getTextColorFromHex(hex)]}
        />
      );
    });

    return result;
  };

  return (
    <OutsideAlerter
      key={Math.random()}
      onClickOutside={closeMe}
      className={css.dropdown}
    >
      <>
        <div className={css.dropbtn} onClick={handleClick}>
          <span
            style={{
              backgroundColor: currentValue,
              width: "100%",
              color: currentTextColor,
            }}
          >
            {currentKey}
          </span>
          <IconButton
            type={mdiMenuDown}
            color="darkgray"
            onClick={handleClick}
            style={{ borderLeft: "1px solid lightgray" }}
          />
        </div>

        <ul key={section + element + propName} className={getClass()}>
          {getOptions()}
        </ul>
      </>
    </OutsideAlerter>
  );
};

ColorDropdown.propTypes = {
  section: PropTypes.string,
  element: PropTypes.string,
  propName: PropTypes.string.isRequired,
  defaultValue: PropTypes.string, //"white" or "var(--clr-...)" or hex
  // onSelect: PropTypes.func.isRequired,
};

export default ColorDropdown;
