import FormWrapper from "./FormWrapper";
import StyleGrid from "@/components/forms/StyleGrid";
import StyleGridItem from "@/components/forms/StyleGridItem";
import HeadingCountDropdown from "@/components/dropdowns/HeadingCountDropdown";

const TextForm_Settings = (props) => {
  const changeHeadingCount = (newval) => {
    //dispatch here
  };

  const styles ={
    devices: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between"
    }
  }

  return (
    <FormWrapper key="frmTextSet">
      <StyleGrid title="Project Settings">
        <StyleGridItem label="Heading Levels">
          <HeadingCountDropdown onSelect={changeHeadingCount} />
        </StyleGridItem>
      </StyleGrid>
      <StyleGrid title="Device-Specific Settings">
        <div style={{display: "flex"}}>
            <li>mobile</li>
            <li>tablet</li>
            <li>laptop</li>
            <li>desktop</li>
            <li>tv</li>
          </ul>
        </div>
        <StyleGridItem label="fontSize"></StyleGridItem>
        <StyleGridItem label="lineHeight"></StyleGridItem>
      </StyleGrid>
    </FormWrapper>
  );
};

export default TextForm_Settings;
