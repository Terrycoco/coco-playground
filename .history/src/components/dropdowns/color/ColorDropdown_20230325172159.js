import PropTypes from "prop-types";
import { useState, useEffect, useCallback, useId } from "react";
import css from "./dropdowns.module.css";
import { mdiMenuDown } from "@mdi/js";
import { IconButton } from "@/components/buttons";
import OutsideAlerter from "@/components/OutsideAlerter";
import { useSelector } from "react-redux";
import { selectColors, selectVariants } from "@/store/colorsSlice";
import { getTextColorFromHex, isValidHexCode } from "@/dev/utils/colorUtils";

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
}) => {
  const handleSelect = (e) => {
    e.stopPropagation();
    onSelect({
      propName: label,
      value: value,
      isVariant: isVariant,
      themeVar: themeVar,
    }); //to parent
  };

  return (
    <li
      key={element + propName + value}
      data-value={value}
      onClick={handleSelect}
      style={{
        backgroundColor: value,
        color: getTextColorFromHex(value),
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
  const [isOpen, setIsOpen] = useState(false);
  const colors = useSelector(selectColors);
  const variants = useSelector(selectVariants);
  const [currentValue, setCurrentValue] = useState();
  const [currentKey, setCurrentKey] = useState();

  useEffect(() => {
    //look up hex code if possible
    if (!isValidHexCode(defaultValue)) {
      let key = valToKey(defaultValue);
      setCurrentKey(key);
      if (colors[key]) {
        setCurrentValue(colors[key]);
      } else if (variants[key]) {
        setCurrentValue(variants[key]);
      }
    } else {
      setCurrentValue(defaultValue); //last resort
    }
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

  const handleSelect = (obj) => {
    //back up to form
    setCurrentKey(obj.propName);
    setCurrentValue(obj.value);
    onSelect({
      element: element,
      propName: propName,
      value: obj.value,
      isVariant: obj.isVariant,
      themeVar: obj.themeVar,
    }); //to form
    setIsOpen(false);
  };

  const getOptions = () => {
    let result = [];
    if (colors == undefined) return <li>"Loading..."</li>;

    Object.keys(colors).map((varname, idx) => {
      result.push(
        <DropdownOption
          id={varname}
          key={`cdd${idx}`}
          onSelect={handleSelect}
          value={colors[varname]}
          label={valToKey(varname)}
          isVariant={false}
          themeVar={`var(--clr-${varname})`}
        />
      );
    });
    result.push(
      <div style={{ height: "1rem", color: "gray", marginTop: ".5rem" }}>
        VARIANTS
      </div>
    );
    Object.keys(variants).map((varname, idx) => {
      result.push(
        <DropdownOption
          key={`${element}${propName}${idx}`}
          id={varname}
          onSelect={handleSelect}
          value={variants[varname]}
          label={valToKey(varname)}
          isVariant={true}
          themeVar={`var(--clr-${varname})`}
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
              color: getTextColorFromHex(currentValue),
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
  element: PropTypes.string,
  propName: PropTypes.string.isRequired,
  defaultValue: PropTypes.string, //"white" or "var(--clr-...)" or hex
  onSelect: PropTypes.func.isRequired,
};

export default ColorDropdown;
