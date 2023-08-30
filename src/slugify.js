const Slugify = ({
  inputStr,
  prefix,
  suffix,
  forcePrefix,
  forceSuffix,
  slugify,
  outputLength,
  outputCase,
}) => {
  let slugufiedStr = inputStr;
  console.log(slugufiedStr);
  if (slugify) {
    slugufiedStr = slugufiedStr
      .replace(/[^a-zA-Z0-9 -]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  }
  if (forcePrefix) {
    slugufiedStr = `${prefix}${slugufiedStr}`;
  } else {
    if (!inputStr.toLowerCase().startsWith(prefix.toLowerCase())) {
      slugufiedStr = `${prefix}${slugufiedStr}`;
    }
  }
  if (forceSuffix) {
    slugufiedStr = `${slugufiedStr}${suffix}`;
  } else {
    if (!inputStr.toLowerCase().endsWith(suffix.toLowerCase())) {
      slugufiedStr = `${slugufiedStr}${suffix}`;
    }
  }
  if (outputLength > 0) {
    slugufiedStr = slugufiedStr.substring(0, outputLength);
  }
  if (outputCase === "capitalize") {
    slugufiedStr =
      slugufiedStr.charAt(0).toUpperCase() +
      slugufiedStr.slice(1).toLowerCase();
  } else if (outputCase === "upper") {
    slugufiedStr = slugufiedStr.toUpperCase();
  } else {
    slugufiedStr = slugufiedStr.toLowerCase();
  }
  console.log(slugufiedStr);
  return slugufiedStr;
};

module.exports = Slugify;
