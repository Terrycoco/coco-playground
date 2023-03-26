import { useState, useEffect } from "react";
import FormWrapper from "./FormWrapper";
import StyleGrid from "@/components/forms/StyleGrid";
import StyleGridItem from "@/components/forms/StyleGridItem";
import StyleGridItemSlider from "@/components/forms/StyleGridItemSlider";
import StyleGridElement from "./StyleGridElement";
import HeadingCountDropdown from "@/components/dropdowns/HeadingCountDropdown";
import DeviceMenu from "@/components/menus/DeviceMenu";
import { useSelector, useDispatch } from "react-redux";
import { selectTheme, selectHeadingCount } from "@/slices/themeSlice";
import { selectCurrentDevice, updateCurrentDevice } from "@/slices/uiSlice";
import { useViewport } from "@/hooks";

const ContainerForm = (props) => {
  const dispatch = useDispatch();
  const userDevice = useViewport();
  const theme = useSelector(selectTheme);
  const currentDevice = useSelector(selectCurrentDevice);
  const headingCount = useSelector(selectHeadingCount);

  useEffect(() => {
    if (currentDevice == undefined) {
      dispatch(updateCurrentDevice(userDevice));
    }
  }, [dispatch, currentDevice, userDevice]);

  const loopThroughElements = () => {
    let result = [];
    for (const el in theme.containers) {
      result.push(getElement(el));
    }
    return result;
  };

  const getElement = (el) => {
    return (
      <StyleGrid key={`containers${el}`} title={el}>
        <StyleGridElement
          key={`containers${el}elem`}
          section={section}
          element={el}
        />
      </StyleGrid>
    );
  };

  if (currentDevice == undefined) return null;
  return (
    <FormWrapper key="frmContainers" title={props.title}>
      {loopThroughElements()}
    </FormWrapper>
  );
};

export default ContainerForm;
