import { useState, useEffect } from "react";
import css from "./color.module.css";

const ReactColorPicker = (props) => {
  const [color, setColor] = useState(null);

  useEffect(() => {
    setColor(props.color);
  }, []);

  console.log("colorPicker", color);
  const submitted = (e) => {
    console.log("submitted ", color);
  };

  return (
    <input
      type="color"
      className={css.input}
      value={color}
      onChange={(e) => setColor(e.target.value)}
      onBlur={submitted}
    />
  );
};

export default ReactColorPicker;
