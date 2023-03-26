//handles all the types of propNames with different displays
import PropTypes from "prop-types";
import { Fragment, useState, useEffect } from "react";
import StyleGridItem from "./StyleGridItem";
import StyleGridItemSlider from "./StyleGridItemSlider";
import ThemeDropdown from "@/components/dropdown/ThemeDropdown";
import FontDropdown from "@/components/dropdowns/FontDropdown";
import ColorDropdown from "@/components/dropdowns/color/ColorDropdown";
import { useSelector } from "react-redux";
import { selectTheme } from "@/slices/themeSlice";
import { selectCurrentDevice } from "@/slices/uiSlice";
import { getFontVariableFromName } from "@/fonts/allFonts";

const StyleGridElement = ({ section, element }) => {
  const theme = useSelector(selectTheme);
  const currentDevice = useSelector(selectCurrentDevice);
  const [fontOptions, setFontOptions] = useState([]);
  //const [colorOptions, setColorOptions] = useState([]);

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

  //   //set up colors array for just theme selections
  //   useEffect(() => {
  //     if (theme.colors !== undefined) {
  //       let result = [];
  //       for (const cat in theme.colors) {
  //         result.push({
  //           themeVar: `var(--clr-${cat})`,
  //           value: theme.colors[cat],
  //           category: cat,
  //         });
  //       }
  //       for (const catV in theme.colorVariants) {
  //         result.push({
  //           themeVar: `var(--clr-${catV})`,
  //           value: theme.colors[catV],
  //           category: catV,
  //         });
  //       }
  //       console.log("colorOpts:", result);
  //       setColorOptions(result);
  //     }
  //   }, [theme.colors, theme.colorVariants]);

  const getDefaultFontObj = (val) => {
    //val in theme is themeVar
    const obj = fontOptions.find((f) => f.themeVar === val);
    return obj;
  };

  const loopThroughPropNames = () => {
    let el = element;
    if (theme !== undefined) {
      let result = [];
      for (const prp in theme[section][el]) {
        switch (prp) {
          case "color":
          case "backgroundColor":
            result.push(
              <StyleGridItem label={prp}>
                <ColorDropdown
                  key={`${el}${prp}`}
                  section={section}
                  element={el}
                  propName={prp}
                  id={`${el}${prp}`}
                  defaultValue={theme[section][el][prp]}
                />
              </StyleGridItem>
            );

            break;
          //device specific
          case "fontSize":
          case "lineHeight":
            result.push(
              <StyleGridItemSlider
                key={`${el}${prp}`}
                section={section}
                element={el}
                propName={prp}
                device={currentDevice}
                label={`${prp} (${currentDevice})`}
                defaultValue={theme[section][el][prp][currentDevice]}
              />
            );
            break;
          case "fontFamily":
            result.push(
              <StyleGridItem label={prp}>
                <FontDropdown
                  key={`${el}fontFamily`}
                  options={fontOptions}
                  section={section}
                  element={el}
                  propName="fontFamily"
                  id={`${el}fontFamily`}
                  defaultObj={getDefaultFontObj(theme[section][el].fontFamily)}
                />
              </StyleGridItem>
            );
            break;
          default:
            result.push(
              <StyleGridItemSlider
                key={`${el}${prp}`}
                section={section}
                element={el}
                propName={prp}
                device={currentDevice}
                label={prp}
                defaultValue={theme[section][el][prp]}
              />
            );
        }
      }
      return result;
    } else return null;
  };

  return <Fragment>{loopThroughPropNames()}</Fragment>;
};
export default StyleGridElement;

StyleGridElement.propTypes = {
  section: PropTypes.string.isRequired,
  element: PropTypes.string.isRequired,
};
