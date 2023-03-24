import { useState, useEffect } from "react";
import FormWrapper from "./FormWrapper";
import StyleGrid from "@/components/forms/StyleGrid";
import StyleGridItem from "@/components/forms/StyleGridItem";
import StyleGridItemSlider from "@/components/forms/StyleGridItemSlider";
import HeadingCountDropdown from "@/components/dropdowns/HeadingCountDropdown";
import DeviceMenu from "@/components/menus/DeviceMenu";
import { useSelector, useDispatch } from "react-redux";
import { selectTheme, updateThemeValue } from "@/slices/themeSlice";
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
  const currentDevice = useSelector(selectCurrentDevice);
  const fullScreen = useSelector(selectIsFullScreen);
  const [showDevice, setShowDevice] = useState();

  useEffect(() => {
    if (fullScreen == true) {
      setShowDevice(userDevice);
    } else {
      setShowDevice(currentDevice);
    }
  }, [fullScreen, userDevice, currentDevice]);

  const styles = {};

  useEffect(() => {
    //when heading count changes do something
    //need to calculate ?
  });

  const changeHeadingCount = (newval) => {
    let payload = {
      section: "project",
      propName: "headingCount",
      value: newval,
    };
    dispatch(updateThemeValue(payload));
  };

  if (showDevice == undefined) return null;
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
          device={showDevice}
          propName="baseFontSize"
          label={`Rem base px (${showDevice})`}
          defaultValue={theme.deviceSettings[showDevice].baseFontSize}
        />
      </StyleGrid>
    </FormWrapper>
  );
};

export default TextForm_Settings;
