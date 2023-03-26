export const getCSSVariablesForDOM = (variablesObj) => {
  let css = `body {\n`;

  for (const prp in variablesObj) {
    let v = prp.substring(4, prp.length - 1);
    css += `${v}: ${variablesObj[prp]};\n`;
  }
  css += "}";
  return css;
};
