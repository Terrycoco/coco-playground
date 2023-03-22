import FormWrapper from "./FormWrapper";
import StyleGrid from "@/components/forms/StyleGrid";
import StyleGridItem from "@/components/forms/StyleGridItem";
import HeadingCountDropdown from "@/components/dropdowns/HeadingCountDropdown";
import DeviceMenu from "@/components/menus/DeviceMenu";
import { useSelector, useDispatch } from "react-redux";

const TextForm_Settings = (props) => {
  const changeHeadingCount = (newval) => {
    //dispatch here
  };

  const styles = {};

  return (
    <FormWrapper key="frmTextSet">
      <StyleGrid title="Project Settings">
        <StyleGridItem label="Heading Levels">
          <HeadingCountDropdown onSelect={changeHeadingCount} />
        </StyleGridItem>
      </StyleGrid>
      <StyleGrid title="Device-Specific Settings">
        <DeviceMenu />
        <StyleGridItem label="fontSize (root)"></StyleGridItem>
        <StyleGridItem label="lineHeight (root)"></StyleGridItem>
      </StyleGrid>
    </FormWrapper>
  );
};

export default TextForm_Settings;
