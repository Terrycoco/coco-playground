import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";

import { Button } from "@/components/buttons";
import FormWrapper from "./FormWrapper";
import StyleGrid from "./StyleGrid";
import StyleGridItem from "./StyleGridItem";
import { FontDropdown } from "@/components/dropdowns/FontDropdown";
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

  return (
    <FormWrapper key="fontForm" title={props.title}>
      <div style={styles.buttonrow}>
        <Button>Reset</Button>
        <Button>Delete</Button>
        <Button>Add Another Category</Button>
      </div>
      <StyleGrid title="theme fonts">
        <StyleGridItem label="body">
          <FontDropdown
            section="fonts"
            propName="body"
            options={options}
            id="body"
            defaultObj={themeFonts.find((obj) => obj.propName == "body")}
            onSelect={handleSelect}
          />
        </StyleGridItem>
        <StyleGridItem label="headings">
          <FontDropdown
            options={options}
            section="fonts"
            propName="display"
            id="display"
            defaultObj={themeFonts.find((obj) => obj.propName == "display")}
            onSelect={handleSelect}
          />
        </StyleGridItem>
        <StyleGridItem label="forms">
          <FontDropdown
            section="fonts"
            propName="forms"
            options={options}
            id="forms"
            defaultObj={themeFonts.find((obj) => obj.propName == "forms")}
            onSelect={handleSelect}
          />
        </StyleGridItem>
        <StyleGridItem label="special">
          <FontDropdown
            section="fonts"
            propName="special"
            options={options}
            id="special"
            defaultObj={themeFonts.find((obj) => obj.propName == "special")}
            onSelect={handleSelect}
          />
        </StyleGridItem>
        <StyleGridItem label="mono">
          <FontDropdown
            section="fonts"
            propName="mono"
            options={options}
            id="mono"
            defaultObj={themeFonts.find((obj) => obj.propName == "mono")}
            onSelect={handleSelect}
          />
        </StyleGridItem>
      </StyleGrid>
    </FormWrapper>
  );
};

export default FontForm;
