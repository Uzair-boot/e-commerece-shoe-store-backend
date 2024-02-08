function convertDateFormat(dateString) {
  const date = new Date(dateString);
  const isoString = date.toISOString();
  return isoString;
}

module.exports = { convertDateFormat };
