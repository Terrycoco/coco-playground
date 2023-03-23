export const isOneOf = (strToCheck, array) => {
  if (array.some((el) => strToCheck.includes(el))) {
    return true;
  } else {
    return false;
  }
};

export function getCSSValUnit(str) {
  const [word, digits] = str.match(/\D+|\d+/g);
  return { val: word, unit: digits };
}
