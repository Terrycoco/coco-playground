import { useSelector } from "react-redux";
import { selectVariables } from "@/slices/variablesSlice";

const FormWrapper = (props) => {
  const variables = useSelector(selectVariables);

  const styles = {
    form: {
      backgroundColor: variables["var(--clr-primary5)"],
      overflowY: "scroll",
      paddingTop: "0.5rem",
      paddingLeft: "1rem",
      paddingRight: "1rem",
      paddingBottom: "5rem",
      overflowY: "scroll",
      paddingTop: "2.5rem", //account for tabs
      height: "100vh",
      fontFamily: variables["var(--font-forms)"],
    },
  };

  return <div style={styles.form}>{props.children}</div>;
};

export default FormWrapper;
