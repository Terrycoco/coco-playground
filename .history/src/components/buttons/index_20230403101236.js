import css from "./buttons.module.css";
import { twMerge } from "tailwind-merge";

export const Button = (props) => {
  return (
    <button role="button" className={css.btn} {...props}>
      {props.children}
    </button>
  );
};

export const ButtonSketch = (props) => {
  return (
    <button role="button" className={css.btnSketch} {...props}>
      {props.children}
    </button>
  );
};
