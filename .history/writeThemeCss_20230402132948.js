var fs = require("fs");
var theme = require("./src/themes/init.js"); //Pass in theme file?
var calcFontSizes = require("./src/dev/utils/scaleUtils");

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
    } else {
      value = themesection[key];
    }
    result += `${prefix}${toCSS(key)}: ${value};\n`;
  });
  return result;
}

let css = `/*THIS FILE IS AUTOMATICALLY PRODUCED FROM THEME SETTINGS
DO NOT MAKE CHANGES HERE */\r
@import './reset.css';\r
:root {\n`;
//put in root font size here

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
let LEVELS = ["p", "h1", "h2", "h3", "h4", "h5", "h6"];
css += `font-size: ${theme.deviceSettings.mobile.baseFontSize};\n`;
css += `line-height: ${theme.text.p.lineHeight.mobile};\n`;
//now each header level for mobile
let levelCount = Object.keys(theme.project.headingCount);
for (const i = 0; i <= levelCount; i++) {
  let level = LEVELS[i];
  if (level === "p") {
    css += `--fs-body: ${theme.text.p.fontSize.mobile};\n`;
    css += `--lh-body: ${theme.text.p.lineHeight.mobile};\n`;
    css += `--fs-p: ${theme.text.p.fontSize.mobile};\n`;
    css += `--lh-p: ${theme.text.p.lineHeight.mobile};\n`;
  } else {
    //put in headers in reverse order
    css += `--fs-h${level}: ${theme.text[level].fontSize.mobile};\n`;
    css += `--lh-h${level}: ${theme.text[level].lineHeight.mobile};\n`;
  }
  //add small sizes here
  css += `--fs-sm: .8rem;\n`;
  css += `--fs-xs: .6rem;\n`;
}

//TODO spacing variables
prefix = "--sp-";
css += sectionToCSS(theme, "spacing", prefix);
css += "}\n\n";

//end variables --------------------------

//text
for (const key in theme.text) {
  prefix = "";
  css += `${key} {\n`;
  css += sectionToCSS(theme.text, key, prefix);
  css += "}\n\n";
}

//containers
for (const key in theme.containers) {
  prefix = "";
  css += `${key} {\n`;
  css += sectionToCSS(theme.containers, key, prefix);
  css += "}\n\n";
}

//media queries
for (const device in theme.screens) {
  //skip mobile
  if (device === "mobile") continue;

  let bp = theme.screens[device].min; //TODO CONVERT TO EMS?
  css += `@media (min-width: ${bp}) {\n`;
  css += `:root {\n`;

  let levelCount = Object.keys(theme.fontSizes.mobile).length;
  for (const level in theme.fontSizes[device]) {
    let last = level.slice(-1);
    if (level === "body") {
      css += `font-size: ${theme.fontSizes[device][level].fontSize}px;\n`;
      css += `--fs-body: ${theme.fontSizes[device][level].fontSize}px;\n`;
      css += `--lh-body: ${theme.fontSizes[device][level].lineHeight};\n`;
      css += `--fs-p: ${theme.fontSizes.mobile[level].fontSize}px;\n`;
      css += `--lh-p: ${theme.fontSizes.mobile[level].lineHeight};\n`;
    } else {
      css += `--fs-h${levelCount - last}: ${
        theme.fontSizes[device][level].fontSize
      }px;\n`;
      css += `--lh-h${levelCount - last}: ${
        theme.fontSizes[device][level].lineHeight
      };\n`;
    }
  }
  css += `}\n`;
  css += `}\n\n`;
}

var data = css + "\n";
fs.writeFile("src/themes/theme.css", data, (err) => {
  if (err) console.log(err);
  console.log("theme css written");
});

// let css = `/*THIS FILE IS AUTOMATICALLY PRODUCED FROM THEME SETTINGS
// DO NOT MAKE CHANGES HERE */\r
// @import './reset.css';\r
// @import './fonts.css';\n
// :root {\n`;
// //put in root font size here

// let prefix = "";

// //screens
// // prefix = "--";
// // css += sectionToCSS(theme, "screens", prefix);

// //colors
// prefix = "--clr-";
// css += sectionToCSS(theme, "colors", prefix);

// //color variants (may have to recalc these)
// prefix = "--clr-";
// css += sectionToCSS(theme, "colorVariants", prefix);

// //fonts
// //TODO this will be different in production v dev
// prefix = "--font-";
// css += sectionToCSS(theme, "fonts", prefix);

// //font sizing variables
// //defaults (mobile)
// css += `font-size: ${theme.fontSizes.mobile.body.fontSize}px;\n`;
// css += `line-height: ${theme.fontSizes.mobile.body.lineHeight};\n`;
// //now each header level for mobile
// let levelCount = Object.keys(theme.fontSizes.mobile).length;
// for (const level in theme.fontSizes.mobile) {
//   let last = level.slice(-1);
//   if (level === "body") {
//     css += `--fs-body: ${theme.fontSizes.mobile[level].fontSize}px;\n`;
//     css += `--lh-body: ${theme.fontSizes.mobile[level].lineHeight};\n`;
//     css += `--fs-p: ${theme.fontSizes.mobile[level].fontSize}px;\n`;
//     css += `--lh-p: ${theme.fontSizes.mobile[level].lineHeight};\n`;
//   } else {
//     //put in headers in reverse order
//     css += `--fs-h${levelCount - last}: ${
//       theme.fontSizes.mobile[level].fontSize
//     }px;\n`;
//     css += `--lh-h${levelCount - last}: ${
//       theme.fontSizes.mobile[level].lineHeight
//     };\n`;
//   }
//   //add small sizes here
//   css += `--fs-sm: .8rem;\n`;
//   css += `--fs-xs: .6rem;\n`;
// }

// //TODO spacing variables
// prefix = "--sp-";
// css += sectionToCSS(theme, "spacing", prefix);
// css += "}\n\n";

// //end variables --------------------------

// //text
// for (const key in theme.text) {
//   prefix = "";
//   css += `${key} {\n`;
//   css += sectionToCSS(theme.text, key, prefix);
//   css += "}\n\n";
// }

// //elements
// for (const key in theme.elements) {
//   prefix = "";
//   css += `${key} {\n`;
//   css += sectionToCSS(theme.elements, key, prefix);
//   css += "}\n\n";
// }

// //media queries
// for (const device in theme.screens) {
//   //skip mobile
//   if (device === "mobile") continue;

//   let bp = theme.screens[device].min; //TODO CONVERT TO EMS?
//   css += `@media (min-width: ${bp}) {\n`;
//   css += `:root {\n`;

//   let levelCount = Object.keys(theme.fontSizes.mobile).length;
//   for (const level in theme.fontSizes[device]) {
//     let last = level.slice(-1);
//     if (level === "body") {
//       css += `font-size: ${theme.fontSizes[device][level].fontSize}px;\n`;
//       css += `--fs-body: ${theme.fontSizes[device][level].fontSize}px;\n`;
//       css += `--lh-body: ${theme.fontSizes[device][level].lineHeight};\n`;
//       css += `--fs-p: ${theme.fontSizes.mobile[level].fontSize}px;\n`;
//       css += `--lh-p: ${theme.fontSizes.mobile[level].lineHeight};\n`;
//     } else {
//       css += `--fs-h${levelCount - last}: ${
//         theme.fontSizes[device][level].fontSize
//       }px;\n`;
//       css += `--lh-h${levelCount - last}: ${
//         theme.fontSizes[device][level].lineHeight
//       };\n`;
//     }
//   }
//   css += `}\n`;
//   css += `}\n\n`;
// }

// var data = css + "\n";
// fs.writeFile("src/styles/theme.css", data, (err) => {
//   if (err) console.log(err);
//   console.log("theme css written");
// });
