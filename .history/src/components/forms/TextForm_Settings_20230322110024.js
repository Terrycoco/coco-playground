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

  const styles = {
    devices: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      fontSize: "12px",
      textTransform: "uppercase",
      backgroundColor: "transparent",
    },
  };

  return (
    <FormWrapper key="frmTextSet">
      <StyleGrid title="Project Settings">
        <StyleGridItem label="Heading Levels">
          <HeadingCountDropdown onSelect={changeHeadingCount} />
        </StyleGridItem>
      </StyleGrid>
      <StyleGrid title="Device-Specific Settings">
        <div style={styles.devices}>
          <div>mobile</div>
          <div>tablet</div>
          <div>laptop</div>
          <div>desktop</div>
          <dov>tv</dov>
        </div>
        <StyleGridItem label="fontSize"></StyleGridItem>
        <StyleGridItem label="lineHeight"></StyleGridItem>
      </StyleGrid>
    </FormWrapper>
  );
};

export default TextForm_Settings;
