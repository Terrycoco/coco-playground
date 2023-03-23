import { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import StyleGridItem from "@/components/forms/StyleGridItem";
import RangeSlider from "@/components/sliders/RangeSlider";
import { useSelector, useDispatch } from "react-redux";
import { updateThemeValue } from "@/slices/themeSlice";
import { selectCurrentDevice } from "@/slices/uiSlice";
import { getCSSValUnit } from "@/utils";

//this component is half smart -- it SETS the value in the theme
// but it doesn't LISTEN to the theme to avoid recursion

const StyleGridItemSlider = ({
  defaultValue,
  section,
  element,
  propName,
  label,
  device,
}) => {
  const dispatch = useDispatch();
  const [val, setVal] = useState(0);
  const [unit, setUnit] = useState("");

  useEffect(() => {
    if (defaultValue) {
      if (typeof defaultValue === "string") {
        //assume there is a number for a slider
        let valunit = getCSSValUnit(defaultValue);
        console.log("valunit is:", valunit);
        setVal(parseFloat(valunit.val));
        setUnit(valunit.unit);
      } else if (typeof defaultValue === "number") {
        setVal(defaultValue);
        setUnit("");
      }
    }
  }, [defaultValue]);

  //update comes from SliderItem
  function handleValueChange(newval) {
    console.log("newval", newval);
    setVal(newval);

    //update theme
    let payload = {
      section: section,
      element: element,
      propName: propName,
      device: device,
      value: newval + unit,
    };
    dispatch(updateThemeValue(payload));
  }

  //prop specific values
  const getSliderProps = () => {
    //props vary depending on propName
    switch (propName) {
      case "letterSpacing":
      case "wordSpacing":
        return {
          min: -1,
          max: 8,
          value: val,
          step: 1,
          unit: "px",
          onChange: (newval) => handleValueChange(newval, "px"),
        };
        break;
      case "fontWeight":
        return {
          min: 100,
          max: 1000,
          value: val,
          step: 100,
          unit: "",
          onChange: (newval) => handleValueChange(newval, ""),
        };
        break;
      case "maxWidth":
        return {
          min: 15,
          max: 100,
          value: val,
          step: 1,
          unit: "ch",
          onChange: (newval) => handleValueChange(newval, "ch"),
        };
        break;
      case "baseFontSize":
        return {
          min: 10,
          max: 30,
          value: val,
          step: 1,
          unit: "px",
          onChange: (newval) => handleValueChange(newval, "px"),
        };
        break;
      case "baseLineHeight":
      case "lineHeight":
        return {
          min: 1.0,
          max: 2.0,
          value: val,
          step: 0.25,
          unit: "",
          onChange: (newval) => handleValueChange(newval, ""),
        };
        break;
      case "fontSize":
        return {
          min: 6,
          max: 72,
          value: val,
          step: 1,
          unit: "px",
          onChange: (newval) => handleValueChange(newval, ""),
        };
        break;
      default:
        return {
          min: 0,
          max: 20,
          value: val,
          step: 0.5,
          unit: "rem",
          onChange: (newval) => handleValueChange(newval, "rem"),
        };
    }
  };

  //each slider needs own props
  const sliderProps = useMemo(() => getSliderProps(), [getSliderProps]);

  return (
    <StyleGridItem label={label ? label : propName} key={element + propName}>
      <RangeSlider
        key={element + propName}
        unit={sliderProps.unit}
        defaultValue={val}
        {...sliderProps}
      />
    </StyleGridItem>
  );
};

StyleGridItemSlider.propTypes = {
  section: PropTypes.string.isRequired,
  element: PropTypes.string.isRequired,
  propName: PropTypes.string.isRequired,
  label: PropTypes.string, //may be different than propName
  deviceIdx: PropTypes.number,
  defaultValue: PropTypes.any.isRequired, //string or number
};

export default StyleGridItemSlider;
