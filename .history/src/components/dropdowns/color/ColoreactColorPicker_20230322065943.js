import ColorPicker from "coloreact";
import { useState, useEffect } from "react";
import { Button } from "@/components/buttons";

const ColorReactColorPicker = (props) => {
  const [color, setColor] = useState(props.color);

  const handleChange = (clr) => {
    console.log("picker receives: ", clr);
    setColor(clr.hexString);
  };

  const styles = {
    container: {
      display: props.visible ? "block" : "flex",
      backgroundColor: color,
      width: "100%",
      height: "200px",
      padding: "5%",
      flexDirection: "column",
      position: "absolute",
      zIndex: 30,
    },
    picker: {
      width: "90%",
      height: "200px",
      position: "absolute",
      zIndex: 30,
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
