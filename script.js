//your JS code here. If required.
function updateClock(){
	const timeElement = document.getElementById('timer');
	const currentDate = new Date();

	const hours = currentDate.getHours().toString().padStart(2, '0');
	const minutes = currentDate.getMinutes().toString().padStart(2, '0');
	const seconds = currentDate.getSeconds().toString().padStart(2, '0');
	const formattedTime = `${hours}:${minutes}:${seconds}`;

	const daysOfWeek = ['Sunday', 'Monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
	const dayOfWeek = daysOfWeek.[currentDate.getDay()];
	const month = currentDate.toLocaleString('default', { month: 'long'});
	const dayInMonth = currentDate.getDate();
	const year = currentDate.getFullYear();
	const formattedDate = `${dayOfWeek}, ${month} ${dayInMonth}, ${year}`;

	timeElement.innerHtml = `${formattedDate} ${formattedTime}`;
}

setInterval(updateClock, 1000);

updateClock();