const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const dayElement = document.getElementById('day');
const dayNumberElement = document.getElementById('numberDay');
const monthElement = document.getElementById('month');
const yearElement = document.getElementById('year');
const hourHand = document.getElementById('hourHand');
const minuteHand = document.getElementById('minuteHand');
const secondHand = document.getElementById('secondHand');

changeHour = () => {
  const date = new Date();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  hoursElement.textContent = hour;
  minutesElement.textContent = formattedMinutes;
};
changeDate = () => {
  const date = new Date();
  const options = { weekday: 'long' };
  const dayOfWeek = date.toLocaleDateString('en-US', options);
  const day = date.getDate();
  const month = date.toLocaleDateString('en-US', { month: 'long' });
  const year = date.getFullYear();
  dayElement.textContent = dayOfWeek;
  dayNumberElement.textContent = day;
  monthElement.textContent = month;
  yearElement.textContent = year;
};
changeHour();
changeDate();
setInterval(changeHour, 1000);

// RELOJ AGUJAS
updateClock = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hourAngle = (360 / 12) * (hours % 12) + (360 / 12) * (minutes / 60);
  const minuteAngle = (360 / 60) * minutes + (360 / 60) * (seconds / 60);
  const secondAngle = (360 / 60) * seconds;

  hourHand.style.transform = `rotate(${hourAngle}deg)`;
  minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
  secondHand.style.transform = `rotate(${secondAngle}deg)`;
};
setInterval(updateClock, 1000);
updateClock();
