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
import { selectCurrentDevice } from "@/slices/uiSlice";
import { useViewport } from "@/hooks";

const TextForm_Settings = (props) => {
  const userDevice = useViewport();
  const theme = useSelector(selectTheme);
  const device = useSelector(selectCurrentDevice);

  const changeHeadingCount = (newval) => {
    //dispatch here
  };

  const handleSelect = () => {};

  const styles = {};

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
          section="deviceElements"
          propName="fontSize"
          element="root"
          defaultValue={theme.deviceElements[device].root.fontSize}
          onSelect={handleSelect}
        />
      </StyleGrid>
    </FormWrapper>
  );
};

export default TextForm_Settings;
