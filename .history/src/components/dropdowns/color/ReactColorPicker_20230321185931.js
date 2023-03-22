import { useState, useEffect } from "react";
import css from "../dropdowns.module.css";

const ReactColorPicker = (props) => {
  const [color, setColor] = useState(null);

  useEffect(() => {
    setColor(props.color);
  }, []);

  console.log("colorPicker", color);

  return (
    <input
      type="color"
      className={css.input}
      value={color}
      onChange={(e) => setColor(e.target.value)}
    />
  );
};

export default ReactColorPicker;
