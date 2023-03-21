import FormWrapper from "./FormWrapper";
import StyleGrid from "./StyleGrid";
import StyleGridItem from "./StyleGridItem";
import ColorPickerDropdown from "@/components/dropdowns/color/ColorPickerDropdown";

const ColorForm_Settings = (props) => {
  return (
    <FormWrapper key="frmColorSet">
      <StyleGrid key="colorGrid">
        <StyleGridItem key="clrSet"></StyleGridItem>
      </StyleGrid>
    </FormWrapper>
  );
};

export default ColorForm_Settings;
