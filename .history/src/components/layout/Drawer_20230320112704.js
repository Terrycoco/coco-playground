import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectContainers } from "@/slices/themeSlice";
import { selectIsDrawerOpen } from "@/slices/uiSlice";
import { selectVariables } from '@/slices.variablesSlice';

//may want to pass in width val

const Drawer = (props) => {
  const [width, setWidth] = useState("0px");
  const containers = useSelector(selectContainers);
  const isOpen = useSelector(selectIsDrawerOpen);
  const 

  useEffect(() => {
    if (isOpen) {
      setWidth(props.openWidth);
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
      backgroundColor: variables["var(--clr-whitish)"],
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
