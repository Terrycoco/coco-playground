import { useState } from "react";

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
