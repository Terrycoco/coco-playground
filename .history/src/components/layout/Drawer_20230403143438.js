import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectContainers } from "@/slices/themeSlice";
import { selectIsDrawerOpen, selectCurrentForm } from "@/slices/uiSlice";
import { selectVariables } from "@/slices/variablesSlice";
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
      if (userScreen == "mobile") {
        setWidth("100%");
        setHeight("98vh");
      } else if (userScreen == "tablet") {
        setWidth("50%");
        setHeight("98vh");
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
      zIndex: 15,
      top: 0,
      marginTop: containers.header.height,
      right: "0",
      backgroundColor: variables["var(--clr-primary5)"], //TODO FORM COLOR?
      overflowX: "hidden",
      transition: "width 0.5s",
      WebkitBoxShadow: "-3px 0px 3px -3px gray",
      boxShadow: "-3px 0px 3px -3px gray",
      borderBottom: `1rem solid ${variables["var(--clr-primary5)"]}`,
    },
  };

  return (
    <div id="drawer" style={styles.drawer}>
      {props.children}
    </div>
  );
};

export default Drawer;
