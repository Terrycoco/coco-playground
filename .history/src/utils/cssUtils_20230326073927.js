const getCSSVariablesForDOM = (variablesObj) => {
  let css = `:root {\n`;

  for (const v in variablesObj) {
    let v = v.substring(4, v.length - 1);
    css += `${v}: ${variablesObj[v]};\n`;
  }
  css += "}";
  return css;
};
