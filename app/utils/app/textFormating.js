export function formatDateValue(date) {
  // const splitDate = date.toString().split(' ');
  if (date === null) {
    return date;
  }
  const splitDate = new Date(date).toString().split(' ');
  const dateFormated = `${splitDate[2]} ${splitDate[1]} ${splitDate[3]}`;
  return dateFormated;
}

export function formatDateDB(date) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const dateFormated = `${day} ${month} ${year}`;
  return dateFormated;
}
