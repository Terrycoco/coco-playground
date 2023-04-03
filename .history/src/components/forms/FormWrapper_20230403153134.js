import { useSelector } from "react-redux";
import { selectVariables } from "@/slices/variablesSlice";

const FormWrapper = (props) => {
  const variables = useSelector(selectVariables);

  const styles = {
    form: {
      backgroundColor: variables["var(--clr-primary5)"],
      paddingTop: "0.5rem",
      fontFamily: variables["var(--font-forms)"],
    },
    title: {
      fontFamily: variables["var(--font-forms)"],
      backgroundColor: variables["var(--clr-primary5)"],
      color: variables["var(--clr-primary)"],
      fontSize: "16px",
      textAlign: "center",
      width: "100%",
      textTransform: "uppercase",
      marginTop: "1rem",
    },
  };

  return (
    <div style={styles.form}>
      <div style={styles.title}>{props.title}</div>
      {props.children}
    </div>
  );
};

export default FormWrapper;
