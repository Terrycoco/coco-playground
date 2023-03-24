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

const TextForm_Elements = (props) => {
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
    result.push(getElement("p"));

    for (let i = 1; i <= headingCount; i++) {
      result.push(getElement(`h${i}`));
    }
    result.push(getElement("small"));
    return result;
  };

  const getElementItems = (el) => {
    let result = [];
    for (const prp in theme.text[el]) {
      if (isOneOf(prp, ["fontSize", "lineHeight"])) {
        result.push(
          <StyleGridItemSlider
            key={`${el}${prp}`}
            section="text"
            element={el}
            propName={prp}
            device={currentDevice}
            label={`${prp} (${currentDevice})`}
            defaultValue={theme.text[el][prp][currentDevice]}
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
            defaultValue={theme.text[el][prp]}
          />
        );
      }
    }
    return result;
  };

  const getElement = (el) => {
    <StyleGrid title={el}>{getElementItems(el)}</StyleGrid>;
  };

  const styles = {};
  if (currentDevice == undefined) return null;
  return <FormWrapper key="frmTextSet">{loopThroughElements()}</FormWrapper>;
};

export default TextForm_Elements;
