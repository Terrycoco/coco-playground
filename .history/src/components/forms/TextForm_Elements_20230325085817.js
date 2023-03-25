import { useState, useEffect } from "react";
import FormWrapper from "./FormWrapper";
import StyleGrid from "@/components/forms/StyleGrid";
import StyleGridItem from "@/components/forms/StyleGridItem";
import StyleGridItemSlider from "@/components/forms/StyleGridItemSlider";
import DeviceMenu from "@/components/menus/DeviceMenu";
import { useSelector, useDispatch } from "react-redux";
import { selectTheme, selectHeadingCount, selectFonts } from "@/slices/themeSlice";
import { FontDropdown } from "@/components/dropdowns/FontDropdown";
import {getFontVariableFromName} from '@/fonts'

import {
  selectCurrentDevice,
  updateCurrentDevice,
} from "@/slices/uiSlice";
import { useViewport } from "@/hooks";
import { isOneOf } from "@/utils";

const TextForm_Elements = (props) => {
  const dispatch = useDispatch();
  const userDevice = useViewport();
  const theme = useSelector(selectTheme);
  const currentDevice = useSelector(selectCurrentDevice);
  const headingCount = useSelector(selectHeadingCount);
  const fontOptions = useState([]);

  useEffect(() => {
    let result = [];
    for (const cat in theme.fonts) {
      result.push({
        themeVar: `var(--font-${cat})}`,
        name: theme.fonts[cat],
        fontVar:  `var(--font-${cat})}`,
      })
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

   

  const getElementItems = (el) => {
    let result = [];
    for (const prp in theme.text[el]) {
      switch (prp) {
        case "fontSize":
        case "lineHeight":
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
          break;
          case "fontFamily":
              result.push(
                <StyleGridItem label={prp}>
                  <FontDropdown 
                </StyleGridItem>
              );
              break;
        default:
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
    return (
      <StyleGrid key={`text${el}`} title={el}>
        {getElementItems(el)}
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
