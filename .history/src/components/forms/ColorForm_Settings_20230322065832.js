import FormWrapper from "./FormWrapper";
import StyleGrid from "./StyleGrid";
import StyleGridItem from "./StyleGridItem";
import ColorPickerDropdown from "@/components/dropdowns/color/ColorPickerDropdown";
import { useSelector } from "react-redux";
import { selectColors, selectColorVariants } from "@/slices/themeSlice";

const ColorForm_Settings = (props) => {
  const colors = useSelector(selectColors);
  const variants = useSelector(selectColorVariants);

  const getColorItems = () => {
    if (colors !== undefined) {
      console.log("colors:", colors);
      let result = [];
      for (const cat in colors) {
        result.push(
          <StyleGridItem key={cat} label={cat}>
            <ColorPickerDropdown
              key={`${cat}cpdd`}
              defaultColor={colors[cat]}
              category={cat}
            />
          </StyleGridItem>
        );
      }
      return result;
    }
  };

  const getVariantItems = () => {
    //no color picker here
    if (variants !== undefined) {
      console.log("variants:", variants);
      let result = [];
      for (let key in variants) {
        let style = {
          backgroundColor: variants[key],
          width: "100%",
          height: "100%",
        };
        result.push(
          <StyleGridItem label={key} key={key}>
            <div style={style}></div>
          </StyleGridItem>
        );
      }
      return result;
    }
  };

  return (
    <FormWrapper key="frmColorSet">
      <StyleGrid key="colorGrid" title="Theme Colors">
        {getColorItems()}
      </StyleGrid>
      <StyleGrid key="variantGrid" title="Calculated Colors">
        {getVariantItems()}
      </StyleGrid>
    </FormWrapper>
  );
};

export default ColorForm_Settings;
