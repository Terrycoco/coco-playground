import { useState, useEffect } from "react";
import css from "./color.module.css";

const ReactColorPicker = (props) => {
  const [color, setColor] = useState(null);

  useEffect(() => {
    setColor(props.color);
  }, []);

  console.log("colorPicker", color);
  console.log("got here");

  return (
    <input
      type="color"
      className={css.input}
      value={color}
      onChange={(e) => setColor(e.target.value)}
      onSubmit={submitted}
    />
  );
};

export default ReactColorPicker;
