import FormWrapper from "./FormWrapper";
import StyleGrid from "@/components/forms/StyleGrid";
import StyleGridItem from "@/components/forms/StyleGridItem";
import HeadingCountDropdown from "@/components/dropdowns/HeadingCountDropdown";

const TextForm_Settings = (props) => {
  return (
    <FormWrapper key="frmTextSet">
      <StyleGrid title="Project Settings">
        <StyleGridItem label="Heading Levels">2</StyleGridItem>
      </StyleGrid>
    </FormWrapper>
  );
};

export default TextForm_Settings;
