import { useState, useEffect } from "react";

const SliderItem = ({ element, propName, defaultValue, onSelect }) => {
  const [val, setVal] = useState(null);

  useEffect(() => {
    if (defaultValue) {
      let num = parseFloat(defaultValue.match(/[\d\.]+/));
      setVal(num);
      console.log(propName, "val is:", num);
    }
  }, []);

  //update comes from SliderItem
  function handleValueChange(newval, unit) {
    setVal(newval);
    //to parent form
    onSelect({
      element: element,
      propName: propName,
      value: newval,
      unit: unit,
    });
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
  const sliderProps = useMemo(() => getSliderProps(), [val]);

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
