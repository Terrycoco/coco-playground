export const getCSSVariablesForDOM = (variablesObj) => {
  let css = `body {\n`;

  for (const v in variablesObj) {
    let v = v.substring(4, v.length - 1);
    css += `${v}: ${variablesObj[v]};\n`;
  }
  css += "}";
  return css;
};
