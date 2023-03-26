import { useState, useEffect } from "react";
import PropTypes from "prop-types";
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

const TextForm = (props) => {
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
      <StyleGrid key={`${section}${el}grid`} title={el}>
        <StyleGridElement key={`text${el}el`} section="text" element={el} />
      </StyleGrid>
    );
  };

  const styles = {};
  if (currentDevice == undefined) return null;
  return (
    <FormWrapper key={`${section}wrap`} title={props.title}>
      {loopThroughElements()}
    </FormWrapper>
  );
};

TextForm.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TextForm;
