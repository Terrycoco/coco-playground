import ColorPicker from "coloreact";
import { useState, useEffect } from "react";

const ColorReactColorPicker = (props) => {
  const [color, setColor] = useState(props.color);

  const handleChange = (clr) => {
    setColor(clr.hex);
  };

  const styles = {
    picker: {
      position: "absolute",
      zIndex: 30,
      width: "200px",
      height: "200px",
      display: props.visible ? "block" : "none",
    },
  };

  return (
    <div style={styles.container}>
      <ColorPicker
        style={styles.picker}
        opacity={false}
        color={color}
        onChange={handleChange}
      />
    </div>
  );
};

export default ColorReactColorPicker;
