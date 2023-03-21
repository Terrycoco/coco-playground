import FormWrapper from "./FormWrapper";
import StyleGrid from "./StyleGrid";
import StyleGridItem from "./StyleGridItem";
import ColorPickerDropdown from "@/components/dropdowns/color/ColorPickerDropdown";
import { useSelector } from "react-redux";
import { selectColors } from "@/slices/themeSlice";

const ColorForm_Settings = (props) => {
  const colors = useSelector(selectColors);

  const getColorItems = () => {
    if (colors !== undefined) {
      let result = [];
      for (const cat in colors) {
        result.push(
          <StyleGridItem key="clrSet" label={cat}>
            <ColorPickerDropdown defaultColor={colors[cat]} category={cat} />
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
    </FormWrapper>
  );
};

export default ColorForm_Settings;
