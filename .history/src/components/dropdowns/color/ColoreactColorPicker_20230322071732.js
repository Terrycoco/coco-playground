import ColorPicker from "coloreact";
import { useState, useEffect } from "react";
import { Button } from "@/components/buttons";

const ColorReactColorPicker = (props) => {
  const [color, setColor] = useState(props.color);

  const handleChange = (clr) => {
    console.log("picker receives: ", clr);
    setColor(clr.hexString);
    props.onChange(clr.hexString);
  };

  const styles = {
    picker: {
      width: "100%",
      height: "200px",
      position: "relative",
    },
  };

  return (
    <ColorPicker
      style={styles.picker}
      opacity={false}
      color={color}
      onChange={handleChange}
    />
  );
};

export default ColorReactColorPicker;
