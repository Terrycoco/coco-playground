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
      height: "150px",
      position: "relative",
      alignSelf: "center",
      padding: 0,
      margin: "0 auto",
    },
  };

  return (
    <ColorPicker
      style={styles.picker}
      opacity={true}
      color={color}
      onChange={handleChange}
    />
  );
};

export default ColorReactColorPicker;
