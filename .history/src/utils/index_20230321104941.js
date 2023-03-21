export const isOneOf = (strToCheck, array) => {
  if (array.some((el) => strToCheck.includes(el))) {
    return true;
  } else {
    return false;
  }
};
