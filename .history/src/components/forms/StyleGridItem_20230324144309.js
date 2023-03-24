import { useSelector } from "react-redux";
import { selectVariables } from "@/slices/variablesSlice";

const StyleGridItem = (props) => {
  const variables = useSelector(selectVariables);
  const styles = {
    row: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      minHeight: "37px",
      borderBottom: "1px solid lightgray",
    },
    label: {
      flexBasis: "40%",
      paddingLeft: ".6rem",
      fontFamily: variables["var(--font-forms)"],
      fontSize: ".8rem",
      display: "flex",
      alignItems: "center",
      color: "gray",
      lineHeight: 1,
    },
    child: {
      border: "1px solid lightgray",
      flexBasis: "60%",
      fontFamily: variables["var(--font-forms)"],
      fontSize: ".8rem",
      color: "gray",
      display: "flex",
      alignItems: "center",
    },
  };
  return (
    <div style={styles.row}>
      <div style={styles.label}>{props.label}</div>
      <div style={styles.child}>{props.children}</div>
    </div>
  );
};

export default StyleGridItem;
