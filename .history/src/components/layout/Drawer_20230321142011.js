import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectContainers } from "@/slices/themeSlice";
import { selectIsDrawerOpen, selectCurrentForm } from "@/slices/uiSlice";
import { selectVariables } from "@/slices/variablesSlice";
import FormController from "@/components/forms/FormController";
import { useViewport } from "@/hooks";
import { isOneOf } from "@/utils";

//may want to pass in width val

const Drawer = (props) => {
  const dispatch = useDispatch();
  const [width, setWidth] = useState("0px");
  const [height, setHeight] = useState("0px");
  const containers = useSelector(selectContainers);
  const isOpen = useSelector(selectIsDrawerOpen);
  const variables = useSelector(selectVariables);
  const userScreen = useViewport();

  useEffect(() => {
    if (isOpen) {
      if (userScreen && isOneOf(userScreen, ["mobile", "tablet"])) {
        setWidth("100%");
        setHeight("50vh");
      } else {
        setWidth("33%");
        setHeight("98vh");
      }
    } else {
      setWidth("0px");
    }
  }, [isOpen, userScreen]);

  let styles = {
    drawer: {
      height: height,
      width: width,
      position: "fixed",
      zIndex: 20,
      top: containers.header.height,
      right: "0",
      backgroundColor: variables["var(--clr-primary5)"], //TODO FORM COLOR?
      overflowX: "hidden",
      transition: "width 0.5s",
      WebkitBoxShadow: "-3px 0px 3px -3px gray",
      boxShadow: "-3px 0px 3px -3px gray",
    },
  };

  return (
    <div id="drawer" style={styles.drawer}>
      {props.children}
      <div style={{ width: "100%", height: "1rem" }}></div>
    </div>
  );
};

export default Drawer;
