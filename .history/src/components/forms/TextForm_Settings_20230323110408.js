import { useState, useEffect } from "react";
import FormWrapper from "./FormWrapper";
import StyleGrid from "@/components/forms/StyleGrid";
import StyleGridItem from "@/components/forms/StyleGridItem";
import StyleGridItemSlider from "@/components/forms/StyleGridItemSlider";
import HeadingCountDropdown from "@/components/dropdowns/HeadingCountDropdown";
import DeviceMenu from "@/components/menus/DeviceMenu";
import { useSelector, useDispatch } from "react-redux";
import RangeSlider from "@/components/sliders/RangeSlider";
import { selectTheme } from "@/slices/themeSlice";
import {
  selectCurrentDevice,
  updateCurrentDevice,
  updateUserDevice,
  selectIsFullScreen,
} from "@/slices/uiSlice";
import { useViewport } from "@/hooks";

const TextForm_Settings = (props) => {
  const dispatch = useDispatch();
  const userDevice = useViewport();
  const theme = useSelector(selectTheme);
  const device = useSelector(selectCurrentDevice);
  const fullScreen = useSelector(selectIsFullScreen);
  const [showDevice, setShowDevice] = useState();

  const changeHeadingCount = (newval) => {
    //dispatch here
  };

  useEffect(() => {
    if (fullScreen == true) {
      setShowDevice(userDevice);
    } else {
      setShowDevice(currentDevice);
    }
  }, [fullScreen]);

  const handleSelect = (newval) => {
    console.log("form receives:", newval);
  };

  const styles = {};
  if (device == undefined) return null;
  return (
    <FormWrapper key="frmTextSet">
      <StyleGrid title="Project Settings">
        <StyleGridItem label="Heading Levels">
          <HeadingCountDropdown onSelect={changeHeadingCount} />
        </StyleGridItem>
      </StyleGrid>
      <StyleGrid title="Device-Specific Settings">
        <DeviceMenu />
        <StyleGridItemSlider
          section="deviceSettings"
          element={showDevice}
          propName="baseFontSize"
          label="Base px (for rem)"
          defaultValue={theme.deviceSettings[showDevice].baseFontSize}
        />
      </StyleGrid>
    </FormWrapper>
  );
};

export default TextForm_Settings;
