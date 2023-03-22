import FormWrapper from "./FormWrapper";
import StyleGrid from "@/components/forms/StyleGrid";
import StyleGridItem from "@/components/forms/StyleGridItem";
import HeadingCountDropdown from "@/components/dropdowns/HeadingCountDropdown";

const TextForm_Settings = (props) => {
  const changeHeadingCount = (newval) => {
    //dispatch here
  };

  return (
    <FormWrapper key="frmTextSet">
      <StyleGrid title="Project Settings">
        <StyleGridItem label="Heading Levels">
          <HeadingCountDropdown onSelect={changeHeadingCount} />
        </StyleGridItem>
      </StyleGrid>
      <StyleGrid title="Device-Specific Settings">
        <StyleGridItem label="FontSize"></StyleGridItem>
      </StyleGrid>
    </FormWrapper>
  );
};

export default TextForm_Settings;
