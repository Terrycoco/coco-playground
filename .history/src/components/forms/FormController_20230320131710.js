import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectContainers } from "@/slices/themeSlice";
import {
  selectCurrentForm,
  selectCurrentTab,
  updateCurrentTab,
} from "@/slices/uiSlice";
import { selectVariables } from "@/slices/variablesSlice";
import { Tab, TabContainer } from "@/components/tabs";
import TextForm_Elements from "./TextForm_Elements";
import TextForm_Settings from "./TextForm_Settings";

//may want to pass in width val

const FormController = (props) => {
  const dispatch = useDispatch();
  const containers = useSelector(selectContainers);
  const variables = useSelector(selectVariables);
  const currentForm = useSelector(selectCurrentForm);
  const currentTab = useSelector(selectCurrentTab);

  useEffect(() => {
    console.log("currentTab:", currentTab);
  }, [currentTab]);

  const getTabStyle = (me) => {
    if (currentTab == me) {
      return {
        backgroundColor: variables["var(--clr-primary5)"],
        color: variables["var(--clr-primary)"],
        fontFamily: variables["var(--font-forms)"],
        textTransform: "uppercase",
      };
    } else {
      return {
        backgroundColor: variables["var(--clr-blackish10)"],
        color: variables["var(--clr-blackish50)"],
        fontFamily: variables["var(--font-forms)"],
        textTransform: "uppercase",
      };
    }
  };

  const clickTab = (e, num) => {
    dispatch(updateCurrentTab(num));
  };

  const getForm = () => {
    switch (currentForm) {
      case "typography": {
        if (currentTab == 1) {
          return <TextForm_Settings />;
        } else {
          return <TextForm_Elements />;
        }
      }
    }
  };

  return (
    <>
      <TabContainer>
        <Tab id={2} style={getTabStyle(2)} onClick={(e) => clickTab(e, 2)}>
          Settings
        </Tab>
        <Tab id={1} style={getTabStyle(1)} onClick={(e) => clickTab(e, 1)}>
          Elements
        </Tab>
      </TabContainer>
      {getForm()}
    </>
  );
};

export default FormController;
