import { useState } from "react";
import css from "./dropdowns.module.css";

const ReactColorPicker = () => {
  const [color, setColor] = useState(null);

  console.log("colorPicker", color);

  return (
    <input
      type="color"
      value={color}
      style={{
        backgroundColor: "black",
        border: "none",
        position: "relative",
        top: "10px",
        width: "100%",
      }}
      onChange={(e) => setColor(e.target.value)}
    />
  );
};

export default ReactColorPicker;
