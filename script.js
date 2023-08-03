//your JS code here. If required.
function updateDateTime() {
  const datetimeElement = document.getElementById('timer');
  const currentDate = new Date();

  const dateTime = currentDate.toLocaleString();

  datetimeElement.innerHTML = `${dateTime}`;
}

setInterval(updateDateTime, 1000);

updateDateTime();