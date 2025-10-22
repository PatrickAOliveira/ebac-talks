AOS.init();

const dateEvent = new Date("Dec 12, 2025 19:00:00");
const timeStampEvent = dateEvent.getTime();

const contaTempo = setInterval(function () {
	const now = new Date();
	const timeStampNow = now.getTime();

	const distanceForEvent = timeStampEvent - timeStampNow;

	const daysInMs = 1000 * 60 * 60 * 24;
	const hoursInMs = 1000 * 60 * 60;
	const minsInMs = 1000 * 60;

	const days = Math.floor(distanceForEvent / daysInMs);
	const hours = Math.floor((distanceForEvent % daysInMs) / hoursInMs);
	const mins = Math.floor((distanceForEvent % hoursInMs) / minsInMs);
	const seconds = Math.floor((distanceForEvent % minsInMs) / 1000);

	document.getElementById(
		"contador"
	).innerHTML = `${days}d ${hours}h ${mins}m ${seconds}s`;

	if (distanceForEvent < 0) {
		clearInterval(contaTempo);
		document.getElementById("contador").innerHTML = `Evento expirado`;
	}
}, 1000);
