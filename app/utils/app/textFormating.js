export function formatDateValue(date) {
  const splitDate = date.toString().split(' ');
  const dateFormated = `${splitDate[2]} ${splitDate[1]} ${splitDate[3]}`;
  return dateFormated;
}
