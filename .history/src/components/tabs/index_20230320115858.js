import css from "./tabs.module.css";

const TabContainer = (props) => {
  return <div className={css.tabcontainer}>{props.children}</div>;
};

export const Tab = (props) => {
  return (
    <button role="button" className={css.tabbtn} {...props}>
      {props.children}
    </button>
  );
};

module.exports = { Tab, TabContainer };
