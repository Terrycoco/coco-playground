import { useState, useEffect } from "react";
import FormWrapper from "./FormWrapper";
import StyleGrid from "@/components/forms/StyleGrid";
import StyleGridItem from "@/components/forms/StyleGridItem";
import StyleGridItemSlider from "@/components/forms/StyleGridItemSlider";
import DeviceMenu from "@/components/menus/DeviceMenu";
import StyleGridElement from "./StyleGridElement";
import { useSelector, useDispatch } from "react-redux";
import { selectTheme, selectHeadingCount } from "@/slices/themeSlice";
import FontDropdown from "@/components/dropdowns/FontDropdown";
import { getFontVariableFromName } from "@/fonts/allFonts";

import { selectCurrentDevice, updateCurrentDevice } from "@/slices/uiSlice";
import { useViewport } from "@/hooks";

const TextForm_Elements = ({ section, ...props }) => {
  const dispatch = useDispatch();
  const userDevice = useViewport();
  const theme = useSelector(selectTheme);
  const currentDevice = useSelector(selectCurrentDevice);
  const headingCount = useSelector(selectHeadingCount);
  const [fontOptions, setFontOptions] = useState([]);

  //set up fonts array for just theme selections
  useEffect(() => {
    if (theme.fonts !== undefined) {
      let result = [];
      for (const cat in theme.fonts) {
        result.push({
          themeVar: `var(--font-${cat})`,
          name: theme.fonts[cat],
          fontVar: getFontVariableFromName(theme.fonts[cat]),
        });
      }
      console.log("resut:", result);
      setFontOptions(result);
    }
  }, [theme.fonts]);

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

  const getDefaultFontObj = (val) => {
    //val in theme is themeVar
    const obj = fontOptions.find((f) => f.themeVar === val);
    return obj;
  };

  const getElement = (el) => {
    return (
      <StyleGrid key={`${section}${el}`} title={el}>
        <StyleGridElement section={props.section} element={el} />
      </StyleGrid>
    );
  };

  const styles = {};
  if (currentDevice == undefined) return null;
  return (
    <FormWrapper key="frmTextSet" title={props.title}>
      {loopThroughElements()}
    </FormWrapper>
  );
};

export default TextForm_Elements;
