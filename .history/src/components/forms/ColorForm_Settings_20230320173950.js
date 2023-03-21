import FormWrapper from "./FormWrapper";
import StyleGrid from "./StyleGrid";
import StyleGridItem from "./StyleGridItem";
import ColorPickerDropdown from "@/components/dropdowns/color/ColorPickerDropdown";
import { useSelector } from 'react-redux'
import { selectColors } from '@/slices/themeSlice'

const ColorForm_Settings = (props) => {







  return (
    <FormWrapper key="frmColorSet">
      <StyleGrid key="colorGrid" title="Theme Colors">
        <StyleGridItem key="clrSet" label=>

        </StyleGridItem>
      </StyleGrid>
    </FormWrapper>
  );
};

export default ColorForm_Settings;
