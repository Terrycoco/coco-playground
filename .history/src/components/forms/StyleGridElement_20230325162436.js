//handles all the types of propNames with different displays
import PropTypes from "prop-types";
import StyleGridItem from "./StyleGridItem";
import StyleGridItemSlider from "./StyleGridItemSlider";
import FontDropdown from "@/components/dropdowns/FontDropdown";
import { useSelector } from "react-redux";
import { selectTheme } from "@/slices/themeSlice";

const StyleGridElement = (props) => {
  const loopThroughPropNames = (el) => {
    let result = [];
    for (const prp in theme.text[el]) {
      switch (prp) {
        case "color":
          break; //ignore color for now
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
                key={`${el}fontFamily`}
                options={fontOptions}
                section="text"
                element={el}
                propName="fontFamily"
                id={`${el}fontFamily`}
                defaultObj={getDefaultFontObj(theme.text[el].fontFamily)}
              />
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
};
