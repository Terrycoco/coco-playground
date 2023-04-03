var fs = require("fs");
var fonts = require("./src/fonts/allFonts.js").fonts;

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
