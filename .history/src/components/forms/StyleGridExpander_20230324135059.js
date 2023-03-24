import { useId, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectVariables } from "@/slices/variablesSlice";
import { mdiMenuDown, mdiMenuUp } from "@mdi/js";
import IconButton from "@/components/buttons/IconButton";

const StyleGridExpander = (props) => {
  const [isExpanded, setIsExpanded] = useState(props.open);
  const variables = useSelector(selectVariables);

  const clickMe = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  const styles = {
    title: {
      fontFamily: "var(--font-forms)",
      display: "flex",
      flexDirection: "space-between",
      alignItems: "center",
      fontSize: "14px",
      textTransform: "uppercase",
      paddingTop: "1rem",
      color: variables["var(--clr-primary)"],
      borderBottom: `1px solid ${variables["var(--clr-primary)"]}`,
    },
    expander: {
      display: isExpanded ? "block" : "none",
      height: isExpanded ? "auto" : "0",
      transition: "height 1s",
    },
    grid: {
      display: "flex",
      height: "auto",
      flexDirection: "column",
      backgroundColor: "white",
      border: "1px solid lightgray",
    },
  };

  return (
    <div>
      <div onClick={clickMe} style={styles.title}>
        {props.title}
        <IconButton
          type={isExpanded ? mdiMenuUp : mdiMenuDown}
          color={variables["var(--clr-primary)"]}
          onClick={clickMe}
        />
      </div>
      <div style={styles.expander}>
        <div style={styles.grid}>{props.children}</div>
      </div>
    </div>
  );
};

export default StyleGridExpander;
