import { useState, useEffect, memo } from "react";
import css from "./slider.module.css";

const RangeSlider = memo(({ onChange, defaultValue, unit, ...sliderProps }) => {
  const [sliderVal, setSliderVal] = useState(0);
  const [mouseState, setMouseState] = useState(""); //may add this later

  useEffect(() => {
    if (defaultValue !== null) {
      setSliderVal(defaultValue);
    } else {
      setSliderVal(0);
    }
    // console.log("ranger defaultValue: ", defaultValue);
  }, [defaultValue]);

  const changeCallback = (e) => {
    setSliderVal(e.target.value);
    onChange(e.target.value);
  };

  const handleMouseUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setMouseState("up");
  };

  return (
    <div className={css.slidercontainer}>
      <input
        type="range"
        className={css.myslider}
        value={sliderVal}
        {...sliderProps}
        id="myRange"
        onChange={changeCallback}
        onMouseDown={() => setMouseState("down")}
        onMouseUp={handleMouseUp}
      />
      <span>{`${sliderVal}${unit}`}</span>
    </div>
  );
});

RangeSlider.displayName = "RangeSlider";
export default RangeSlider;
