import PropTypes from "prop-types";
import { useState, useEffect, useCallback, useId } from "react";
import css from "./dropdowns.module.css";
import { mdiMenuDown } from "@mdi/js";
import { IconButton } from "@/components/buttons";
import OutsideAlerter from "@/components/OutsideAlerter";
import { useSelector } from "react-redux";
import { selectVariables } from "@/store/variablesSlice";

const DropdownOption = (props) => {
  const variables = useSelector(selectVariables);

  const handleSelect = (e) => {
    let obj = {
      section: props.section,
      propName: props.propName,
      fontVar: props.fontVar,
      themeVar: props.themeVar,
      name: props.name,
      element: props.element,
    };
    props.onSelect(obj); //to parent
  };

  const getDisplay = () => {
    if (props.section === "fonts") {
      return props.name;
    } else {
      return [
        <span
          style={{
            width: "50%",
            fontFamily: variables["var(--font-forms)"],
            color: "gray",
          }}
        >
          {props.category}
        </span>,
        <span style={{ width: "50%", fontFamily: props.fontVar }}>
          {props.name}
        </span>,
      ];
    }
  };

  return (
    <li
      key={useId}
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
    setCurrent(obj);
    onSelect(obj); //right up to parent (form)
    setIsOpen(false);
  };

  const getOptions = () => {
    let result = [];
    if (options == undefined) return <li>"Loading..."</li>;
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
      <OutsideAlerter
        key={Math.random()}
        onClickOutside={closeMe}
        className={css.dropdown}
      >
        <>
          <div className={css.dropbtn} onClick={handleClick}>
            <span style={{ fontFamily: current.fontVar }}>{current.name}</span>{" "}
            <IconButton
              type={mdiMenuDown}
              color="darkgray"
              onClick={handleClick}
              style={{ borderLeft: "1px solid lightgray" }}
            />
          </div>

          <ul className={getClass()}>{getOptions()}</ul>
        </>
      </OutsideAlerter>
    );
  } else {
    return null;
  }
};

FontDropdown.propTypes = {
  section: PropTypes.string.isRequired,
  element: PropTypes.string, //will be missing for fonts
  propName: PropTypes.string, //"body" or "fontFamily"
  options: PropTypes.array.isRequired,
  defaultObj: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default FontDropdown;
