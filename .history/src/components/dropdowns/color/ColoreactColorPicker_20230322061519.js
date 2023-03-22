import ColorPicker from "coloreact";
import { useState, useEffect } from "react";

const ColorReactColorPicker = (props) => {
  const [color, setColor] = useState(props.color);

  const handleChange = (clr) => {
    setColor(clr.hex);
  };

  return (
    <ColorPicker
      style={{ width: "200px" }}
      opacity={true}
      color={color}
      onChange={handleChange}
    />
  );
};

export default ColorReactColorPicker;
