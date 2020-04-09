export function formatDateValue(date) {
  // const splitDate = date.toString().split(' ');
  if (date === null) {
    return date;
  }
  const splitDate = new Date(date).toString().split(' ');
  const dateFormated = `${splitDate[2]} ${splitDate[1]} ${splitDate[3]}`;
  return dateFormated;
}
