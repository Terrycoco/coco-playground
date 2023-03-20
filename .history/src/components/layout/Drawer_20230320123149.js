import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectContainers } from "@/slices/themeSlice";
import {
  selectIsDrawerOpen,
  selectCurrentForm,
  selectCurrentTab,
  updateCurrentTab,
} from "@/slices/uiSlice";
import { selectVariables } from "@/slices/variablesSlice";
import { Tab, TabContainer } from "@/components/tabs";

//may want to pass in width val

const Drawer = (props) => {
  const dispatch = useDispatch();
  const [width, setWidth] = useState("0px");
  const containers = useSelector(selectContainers);
  const isOpen = useSelector(selectIsDrawerOpen);
  const variables = useSelector(selectVariables);
  const currentForm = useSelector(selectCurrentForm);
  const currentTab = useSelector(selectCurrentTab);

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

  const getTabStyle = (me) => {
    if (currentTab == me.id) {
      return {
        backgroundColor: variables["var(--clr-primary5)"],
        color: variables["var(--clr-primary)"],
        fontFamily: variables["var(--font-forms)"],
      };
    } else {
      return {
        backgroundColor: variables["var(--clr-blackish10)"],
        color: variables["var(--clr-blackish50)"],
        fontFamily: variables["var(--font-forms)"],
      };
    }
  };

  const clickTab = (num) => {
    dispatch(updateCurrentTab(num));
  };

  return (
    <div id="drawer" style={styles.drawer}>
      <TabContainer>
        <Tab id="1" style={getTabStyle(2)} onClick={clickTab}>
          Application
        </Tab>
        <Tab id="2" style={getTabStyle(1)} onClick={clickTab}>
          Settings
        </Tab>
      </TabContainer>
      {props.children}
    </div>
  );
};

export default Drawer;
