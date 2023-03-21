import { useId, useState, useEffect } from "react";

const StyleGridExpander = (props) => {
  const [isExpanded, setIsExpanded] = useState(props.open);

  const clickMe = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  const styles = {
    title: {
      fontFamily: "var(--font-forms)",
      fontSize: "14px",
      textTransform: "uppercase",
      paddingTop: "1rem",
      color: "var(--clr-primary)",
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
      {props.title ? (
        <div onClick={clickMe} style={styles.title}>
          {props.title}
        </div>
      ) : null}
      <div style={styles.expander}>
        <div style={styles.grid}>{props.children}</div>
      </div>
    </div>
  );
};

export default StyleGridExpander;
