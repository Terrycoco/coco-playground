import { useState } from "react";

const ReactColorPicker = () => {
  const [color, setColor] = useState(null);

  console.log("colorPicker", color);

  return (
    <input
      type="color"
      value={color}
      onChange={(e) => setColor(e.target.value)}
    />
  );
};

export default ReactColorPicker;
