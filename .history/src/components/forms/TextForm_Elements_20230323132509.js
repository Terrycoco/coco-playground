import { useState, useEffect } from "react";
import FormWrapper from "./FormWrapper";
import StyleGrid from "@/components/forms/StyleGrid";
import StyleGridItem from "@/components/forms/StyleGridItem";
import StyleGridItemSlider from "@/components/forms/StyleGridItemSlider";
import HeadingCountDropdown from "@/components/dropdowns/HeadingCountDropdown";
import DeviceMenu from "@/components/menus/DeviceMenu";
import { useSelector, useDispatch } from "react-redux";
import { selectTheme } from "@/slices/themeSlice";
import {
  selectCurrentDevice,
  updateCurrentDevice,
  selectCurrentDeviceIdx,
} from "@/slices/uiSlice";
import { useViewport } from "@/hooks";

const TextForm_Elements = (props) => {
  const dispatch = useDispatch();
  const userDevice = useViewport();
  const theme = useSelector(selectTheme);
  const currentDevice = useSelector(selectCurrentDevice);
  const currDevIdx = useSelector(selectCurrentDeviceIdx);

  useEffect(() => {
    if (currentDevice == undefined) {
      dispatch(updateCurrentDevice(userDevice));
    }
  }, [dispatch, currentDevice, userDevice]);

  const changeHeadingCount = (newval) => {
    //dispatch here
  };

  const handleSelect = (newval) => {
    console.log("form receives:", newval);
  };

  const styles = {};
  if (currentDevice == undefined) return null;
  return (
    <FormWrapper key="frmTextSet">
      <StyleGrid title="p">
        <StyleGridItemSlider
          section="text"
          element="p"
          propName="fontSize"
          device={currentDevice}
          label={`fontSize   (${currentDevice})`}
          defaultValue={theme.text.p.fontSize[currentDevice]}
        />
      </StyleGrid>
    </FormWrapper>
  );
};

export default TextForm_Elements;
