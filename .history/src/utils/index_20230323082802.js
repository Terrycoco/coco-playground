export const isOneOf = (strToCheck, array) => {
  if (array.some((el) => strToCheck.includes(el))) {
    return true;
  } else {
    return false;
  }
};

export function getCSSValUnit(str) {
  const [digits, word] = str.match(/\D+|\d+/g);
  return { val: digits, unit: word };
}
