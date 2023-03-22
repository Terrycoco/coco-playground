import { useState, useEffect } from "react";
import css from "./color.module.css";
import { Button } from "@/components/buttons";

const ReactColorPicker = (props) => {
  const [color, setColor] = useState(null);

  const styles = {
    buttonrow: {
      paddingTop: "15px",
      display: "flex",
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-evenly",
    },
  };

  useEffect(() => {
    setColor(props.color);
  }, []);

  const closeMe = () => {
    console.log(" got to close");
  };

  console.log("colorPicker", color);
  const submitted = (e) => {
    props.on;
  };

  return (
    <div>
      <input
        type="color"
        className={css.input}
        value={color}
        onChange={(e) => setColor(e.target.value)}
        onBlur={submitted}
      />
      <div style={styles.buttonrow}>
        <Button onClick={submitted}>Select</Button>
        <Button onClick={closeMe}>Close</Button>
      </div>
    </div>
  );
};

export default ReactColorPicker;
