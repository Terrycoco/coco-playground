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
      position: "relative",
      zIndex: 30,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      width: "100%",
      backgroundColor: color.hex,
      border: `3px solid ${color.hex}`,
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
    <div
      data-id="pickercontainer"
      style={styles.container}
      onClose={handleClose}
      onClick={preventClose}
    >
      <ChromePicker
        color={color}
        width={100}
        height={100}
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
