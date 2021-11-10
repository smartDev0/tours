const stripHtml = (string: string): string => {
  return string.replace(/(<([^>]+)>)/gi, " ").trim();
};

const stripMultipleSpaces = (string: string): string => {
  return string.replace(/\s+/g, " ");
};

const stripWhiteSpace = (string: string): string => {
  return string.replace(/^\s+/, "").replace(/\s+$/, "");
};

const stripPunctuation = (string: string): string => {
  return string.replace(/[.,\/#!$%^&*;:{}=\-_`~()?'\"|\+\[\]@]/g, " ");
};

const newLinesToBr = (string: string): string => {
  return string.replace(/(?:\r\n|\r|\n|&#13;|&#10;)/g, "<br/>");
};

const slugify = (string: string): string => {
  return string
    .toLowerCase()
    .replace(/[^a-z0-9\s]+/g, "") // Remove anything that is not a lowercase character, or a number
    .trim()
    .replace(/^[0-9]+/, "") // Remove number at the beginning of a string (#6-strategies-that-... is not allowed here)
    .trim()
    .split(" ")
    .slice(0, 5)
    .join("-");
};

export {
  stripHtml,
  stripMultipleSpaces,
  stripPunctuation,
  newLinesToBr,
  stripWhiteSpace,
  slugify,
};
