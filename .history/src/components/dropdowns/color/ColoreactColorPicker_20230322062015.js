import ColorPicker from "coloreact";
import { useState, useEffect } from "react";

const ColorReactColorPicker = (props) => {
  const [color, setColor] = useState(props.color);

  const handleChange = (clr) => {
    setColor(clr.hex);
  };

  const style = {
    position: "absolute",
    width: "200px",
    height: "200px",
    display: props.visible ? "block" : "none",
  };

  return (
    <ColorPicker
      style={{}}
      opacity={false}
      color={color}
      onChange={handleChange}
    />
  );
};

export default ColorReactColorPicker;
