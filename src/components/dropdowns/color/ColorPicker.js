import { ChromePicker } from "react-color";
import { useState, useEffect } from "react";
import { Button } from "@/components/buttons";

const ColorPicker = (props) => {
  const [background, setBackground] = useState("#fff");
  const [color, setColor] = useState(props.color ? props.color : "#fff");

  useEffect(() => {
    setColor({ hex: props.color });
  }, []);

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      width: "100%",
      backgroundColor: color.hex,
      padding: "10px 15px 10px 15px",
      border: `5px solid ${color.hex}`,
    },
    buttonrow: {
      paddingTop: "15px",
      display: "flex",
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-evenly",
    },
  };

  const handleChange = (color) => {
    setColor(color);
  };

  const handleChangeComplete = (color) => {
    // setBackground({ background: color.hex });
    //props.onSelect(color.hex); //to parent
  };

  const preventClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleClose = () => {
    props.onClose(color.hex);
  };

  const selected = () => {
    props.onSelect(color.hex);
  };

  return (
    <div style={styles.container} onClose={handleClose} onClick={preventClose}>
      <ChromePicker
        color={color}
        onChange={handleChange}
        onChangeComplete={handleChangeComplete}
      />
      <div style={styles.buttonrow}>
        <Button onClick={selected}>Select</Button>
        <Button onClick={handleClose}>Close</Button>
      </div>
    </div>
  );
};

export default ColorPicker;
