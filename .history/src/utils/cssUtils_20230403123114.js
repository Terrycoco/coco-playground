import { isOneOf } from "@/utils";

export const getCSSVariablesForDOM = (variablesObj) => {
  let css = `body {\n`;

  for (const prp in variablesObj) {
    let v = prp.substring(4, prp.length - 1);
    css += `${v}: ${variablesObj[prp]};\n`;
  }
  css += "}";
  return css;
};

function toCSS(key) {
  var result = key.replace(/([A-Z])/g, " $1");
  return result.split(" ").join("-").toLowerCase();
}

const getFontVariable = (name) => {
  let str = name.replaceAll(" ", "-").toLowerCase();
  return `var(--font-${str})`;
};

function sectionToCSS(themeobj, sectionname, prefix) {
  let result = "";
  let value = "";
  let themesection;
  if (sectionname == null) {
    themesection = { ...themeobj };
  } else {
    themesection = themeobj[sectionname];
  }
  const keys = Object.keys(themesection);
  keys.forEach((key, i) => {
    if (sectionname == "fonts") {
      value = getFontVariable(themesection[key]);
    } else if (key == "fontSize") {
      value = `var(--fs-${sectionname})`;
    } else if (key == "lineHeight") {
      value = `var(--lh-${sectionname})`;
    } else {
      value = themesection[key];
    }
    result += `\t${prefix}${toCSS(key)}: ${value};\n`;
  });
  return result;
}

export const getThemeCss = (theme) => {
  const LEVELS = ["p", "h1", "h2", "h3", "h4", "h5", "h6"];
  const levelCount = theme.project.headingCount;

  let css = `:root {\n`;

  let prefix = "";

  //colors
  prefix = "--clr-";
  css += sectionToCSS(theme, "colors", prefix);

  //color variants
  prefix = "--clr-";
  css += sectionToCSS(theme, "colorVariants", prefix);

  //fonts
  //TODO this will be different in production v dev
  prefix = "--font-";
  css += sectionToCSS(theme, "fonts", prefix);

  //font sizing variables
  //defaults (mobile)

  css += `\tfont-size: ${theme.deviceSettings.mobile.baseFontSize};\n`;
  css += `\tline-height: ${theme.text.p.lineHeight.mobile};\n`;
  //now each header level for mobile

  for (let i = 0; i <= levelCount; i++) {
    let level = LEVELS[i];
    if (level === "p") {
      css += `\t--fs-body: ${theme.text.p.fontSize.mobile};\n`;
      css += `\t--lh-body: ${theme.text.p.lineHeight.mobile};\n`;
      css += `\t--fs-p: ${theme.text.p.fontSize.mobile};\n`;
      css += `\t--lh-p: ${theme.text.p.lineHeight.mobile};\n`;
    } else {
      //headings
      css += `\t--fs-${level}: ${theme.text[level].fontSize.mobile};\n`;
      css += `\t--lh-${level}: ${theme.text[level].lineHeight.mobile};\n`;
    }
  }

  //add small sizes here
  css += `\t--fs-sm: .8rem;\n`;
  css += `\t--fs-xs: .6rem;\n`;
  css += `\n`;

  //TODO spacing variables
  // prefix = "--sp-";
  // css += sectionToCSS(theme, "spacing", prefix);

  css += "}\n\n";
  //end variables --------------------------

  //text
  for (const key in theme.text) {
    //only send in right about of headings
    if (key[0] == "h" && key[1] > levelCount) {
      //do nothing
    } else {
      prefix = "";
      css += `${key} {\n`;
      css += sectionToCSS(theme.text, key, prefix);
      css += "}\n\n";
    }
  }

  //containers
  for (const key in theme.containers) {
    prefix = "";
    css += `${key} {\n`;
    css += sectionToCSS(theme.containers, key, prefix);
    css += "}\n\n";
  }

  //media queries----------------------------------------------------------
  for (let i = 1; i < theme.devices.length; i++) {
    let device = theme.devices[i];
    //skip mobile
    if (device !== "mobile") {
      let bp = theme.deviceSettings[device].min;
      css += `@media (min-width: ${bp}) {\n`;
      css += `:root {\n`;

      //typography levels
      for (let i = 0; i <= levelCount; i++) {
        let level = LEVELS[i];
        if (level === "p") {
          css += `\tfont-size: ${theme.text[level].fontSize[device]};\n`;
          css += `\t--fs-body: ${theme.text[level].fontSize[device]};\n`;
          css += `\t--lh-body: ${theme.text[level].lineHeight[device]};\n`;
          css += `\t--fs-p: ${theme.text[level].fontSize[device]};\n`;
          css += `\t--lh-p: ${theme.text[level].lineHeight[device]};\n`;
        } else {
          //headings
          css += `\t--fs-${level}: ${theme.text[level].fontSize[device]};\n`;
          css += `\t--lh-${level}: ${theme.text[level].lineHeight[device]};\n`;
        }
      }
      css += `}\n`;
      css += `}\n\n`;
    }
  } // end media queries --------------------------

  var data = css + "\n";
  return data;
};
