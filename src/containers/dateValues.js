const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function returnDate({ articleData }) {
  console.log(articleData);
  const date = new Date(articleData.publishedDate);
  const dayOfWeek = date.getDay();
  const month = date.getMonth();
  const calendarDate = date.getDate();
  const year = date.getFullYear();
  return `${days[dayOfWeek]}, ${months[month]} ${calendarDate}, ${year}`;
}

export default returnDate;
