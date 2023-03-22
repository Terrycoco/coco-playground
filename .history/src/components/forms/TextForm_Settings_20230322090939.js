import FormWrapper from "./FormWrapper";
import StyleGrid from "@/components/forms/StyleGrid";
import StyleGridItem from "@/components/forms/StyleGridItem";

const TextForm_Settings = (props) => {
  return (
    <FormWrapper key="frmTextSet">
      <StyleGrid title="Project Settings">
        <StyleGridItem lebel="Heading Count"></StyleGridItem>
      </StyleGrid>
    </FormWrapper>
  );
};

export default TextForm_Settings;
