import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectContainers } from "@/slices/themeSlice";
import { selectIsDrawerOpen, selectCurrentForm } from "@/slices/uiSlice";
import { selectVariables } from "@/slices/variablesSlice";
import FormController from "@/components/forms/FormController";

//may want to pass in width val

const Drawer = (props) => {
  const dispatch = useDispatch();
  const [width, setWidth] = useState("0px");
  const containers = useSelector(selectContainers);
  const isOpen = useSelector(selectIsDrawerOpen);
  const variables = useSelector(selectVariables);

  useEffect(() => {
    if (isOpen) {
      setWidth("33%");
    } else {
      setWidth("0px");
    }
  }, [isOpen, props.openWidth]);

  let styles = {
    drawer: {
      height: "100vh",
      width: width,
      position: "fixed",
      zIndex: "99999",
      top: containers.header.height,
      right: "0",
      backgroundColor: variables["var(--clr-primary5)"], //TODO FORM COLOR?
      overflowX: "hidden",
      transition: " 0.5s",
      WebkitBoxShadow: "-3px 0px 3px -3px gray",
      boxShadow: "-3px 0px 3px -3px gray",
    },
  };

  return (
    <div id="drawer" style={styles.drawer}>
      {props.children}
    </div>
  );
};

export default Drawer;
