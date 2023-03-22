import { useState } from "react";
import css from "../dropdowns.module.css";

const ReactColorPicker = () => {
  const [color, setColor] = useState(null);

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
