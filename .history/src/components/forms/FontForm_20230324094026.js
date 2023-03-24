import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";

import { Button } from "@/components/buttons";
import FormWrapper from "./FormWrapper";
import StyleGrid from "./StyleGrid";
import StyleGridItem from "./StyleGridItem";
import FontDropdown from "@/components/dropdowns/FontDropdown";
import { getFontsArray } from "@/fonts/allFonts";

const FontForm = (props) => {
  const dispatch = useDispatch();
  const options = getFontsArray(); //all fonts
  const themeFonts = useSelector((state) => state.theme.fonts);

  const styles = {
    buttonrow: {
      marginTop: "1rem",
    },
  };
  const handleSelect = (objFromDropdown) => {
    console.log("updating to:", objFromDropdown);
    dispatch(updateFont(objFromDropdown));
  };

  const getFontItems = () => {
    if (themeFonts !== undefined) {
      let result = [];
      for (const el in themeFonts) {
        let defObj = options.find((obj) => obj.propName == el);
        result.push(
          <StyleGridItem label="mono">
            <FontDropdown
              section="fonts"
              propName={el}
              options={options}
              id={el}
              defaultObj={defObj}
            />
          </StyleGridItem>
        );
      }
      return result;
    }
  };

  return (
    <FormWrapper key="fontForm" title={props.title}>
      <div style={styles.buttonrow}>
        <Button>Reset</Button>
        <Button>Delete</Button>
        <Button>Add Another Category</Button>
      </div>
      <StyleGrid title="theme fonts">{getFontItems()}</StyleGrid>
    </FormWrapper>
  );
};

export default FontForm;
