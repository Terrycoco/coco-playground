import ColorPicker from "coloreact";
import { useState, useEffect } from "react";
import { Button } from "@/components/buttons";

const ColorReactColorPicker = (props) => {
  const [color, setColor] = useState(props.color);

  const handleChange = (clr) => {
    setColor(clr.hex);
  };

  const styles = {
    container: {
      display: props.visible ? "block" : "none",
      backgroundColor: color,
      width: "100%",
      height: "200px",
      padding: "5%",
    },
    picker: {
      position: "absolute",
      zIndex: 30,
      width: "200px",
      height: "200px",
    },
    buttonrow: {
      paddingTop: "15px",
      display: "flex",
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-evenly",
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
