export const getShortText = (str, count) => {
  if (str.length > count) {
    return str.slice(0, count - 3) + "...";
  }
  return str;
};
