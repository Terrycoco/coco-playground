import { useState, useEffect } from "react";
import FormWrapper from "./FormWrapper";
import StyleGrid from "@/components/forms/StyleGrid";
import StyleGridItem from "@/components/forms/StyleGridItem";
import StyleGridItemSlider from "@/components/forms/StyleGridItemSlider";
import HeadingCountDropdown from "@/components/dropdowns/HeadingCountDropdown";
import DeviceMenu from "@/components/menus/DeviceMenu";
import { useSelector, useDispatch } from "react-redux";
import { selectTheme, selectHeadingCount } from "@/slices/themeSlice";
import {
  selectCurrentDevice,
  updateCurrentDevice,
  selectCurrentDeviceIdx,
} from "@/slices/uiSlice";
import { useViewport } from "@/hooks";
import { isOneOf } from "@/utils";

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

    for (let i = 1; i <= headingCount; i++) {
      result.push(getElement(`h${i}`));
    }
    result.push(getElement("p"));
    result.push(getElement("small"));
    return result;
  };

  const getElementItems = (el) => {
    let result = [];
    for (const prp in theme.containers[el]) {
      if (isOneOf(prp, ["fontSize", "lineHeight"])) {
        //should't have these hrere
        result.push(
          <StyleGridItemSlider
            key={`${el}${prp}`}
            section="text"
            element={el}
            propName={prp}
            device={currentDevice}
            label={`${prp} (${currentDevice})`}
            defaultValue={theme.containers[el][prp][currentDevice]}
          />
        );
      } else {
        result.push(
          <StyleGridItemSlider
            key={`${el}${prp}`}
            section="text"
            element={el}
            propName={prp}
            device={currentDevice}
            label={prp}
            defaultValue={theme.containers[el][prp]}
          />
        );
      }
    }
    return result;
  };

  const getElement = (el) => {
    return (
      <StyleGrid key={`text${el}`} title={el}>
        {getElementItems(el)}
      </StyleGrid>
    );
  };

  const styles = {};
  if (currentDevice == undefined) return null;
  return (
    <FormWrapper key="frmContainers" title={props.title}>
      {loopThroughElements()}
    </FormWrapper>
  );
};

export default ContainerForm;
