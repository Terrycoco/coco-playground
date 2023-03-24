var fs = require("fs");
var fonts = require("./src/fonts/allFonts.js").fonts;

// function toCSS(key) {
//   var result = key.replace(/([A-Z])/g, " $1");
//   return result.split(" ").join("-").toLowerCase();
// }

// const getFontVariable = (name) => {
//   let str = name.replaceAll(" ", "-").toLowerCase();
//   return `var(--font-${str})`;
// };

// function sectionToCSS(themeobj, sectionname, prefix) {
//   let result = "";
//   let value = "";
//   let themesection;
//   if (sectionname == null) {
//     themesection = { ...themeobj };
//   } else {
//     themesection = themeobj[sectionname];
//   }
//   const keys = Object.keys(themesection);
//   keys.forEach((key, i) => {
//     if (sectionname == "fonts") {
//       value = getFontVariable(themesection[key]);
//     } else {
//       value = themesection[key];
//     }
//     result += `${prefix}${toCSS(key)}: ${value};\n`;
//   });
//   return result;
// }

let css = `/*THIS FILE IS AUTOMATICALLY PRODUCED FROM THEME SETTINGS
DO NOT MAKE CHANGES HERE */\r

:root {\n`;

//loop through fonts and create new line with current font vars
console.log("fonts:", fonts);

var data = css + "\n";
fs.writeFile("src/app/fonts.css", data, (err) => {
  if (err) console.log(err);
  console.log("font css written");
});
