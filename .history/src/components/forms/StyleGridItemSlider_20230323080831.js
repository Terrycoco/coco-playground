import { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import StyleGridItem from "@/components/forms/StyleGridItem";
import RangeSlider from "@/components/sliders/RangeSlider";
import { useSelector, useDispatch } from "react-redux";
import { selectTheme } from "@/slices/themeSlice";
import { selectCurrentDevice } from "@/slices/uiSlice";
import { getCSSValUnit } from "@/utils";

//this component is half smart -- it SETS the value in the theme
// but it doesn't LISTEN to the theme to avoid recursion

const StyleGridItemSlider = ({ section, element, propName, onSelect }) => {
  const [val, setVal] = useState(null);
  const [unit, setUnit] = useState(null);
  const theme = useSelector(selectTheme);
  const device = useSelector(selectCurrentDevice);

  useEffect(() => {
    if (defaultValue) {
      if (typeof defaultValue === "string") {
        let valunit = getCSSValUnit(defaultValue);
        console.log("valunit is:", valunit);
        setVal(parseFloat(valunit.val));
        setUnit(valunit.unit);
      } else {
        setVal(defaultValue);
      }
    }
  }, [defaultValue]);

  //update comes from SliderItem
  function handleValueChange(newval, unit) {
    setVal(newval);
    //to parent form

    //update theme here?
    // onSelect({
    //   section: section,
    //   element: element,
    //   propName: propName,
    //   value: newval,
    //   unit: unit,
    // });
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
        return {
          min: 1.0,
          max: 4.0,
          value: val,
          step: 0.125,
          unit: "",
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
    <StyleGridItem label={propName} key={element + propName}>
      <RangeSlider
        key={element + propName}
        unit={sliderProps.unit}
        defaultValue={val}
        {...sliderProps}
      />
    </StyleGridItem>
  );
};

StyleGridItemsSlider.propTypes = {
  section: PropTypes.string.isRequired,
  element: PropTypes.string.isRequired,
  propName: PropTypes.string.isRequired,
  defaultValue: PropTypes.any.isRequired, //string or number
};

export default StyleGridItemSlider;
