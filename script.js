const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const mybirthday = new Date('27 Dec 2023');

function countdown() {
  const curdate = new Date();
  const totalseconds = (curdate - mybirthday) / 1000;
  const days = Math.floor(totalseconds / 3600 / 24);
  const hours = Math.floor(totalseconds / 3600) % 24;
  const minutes = Math.floor(totalseconds / 60) % 60;

  const seconds = Math.floor(totalseconds) % 60;

  daysEl.innerHTML = Math.abs(days);
  hoursEl.innerHTML = formatTime(Math.abs(hours));
  minutesEl.innerHTML = formatTime(Math.abs(minutes));
  secondsEl.innerHTML = formatTime(Math.abs(seconds));
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
countdown();
setInterval(countdown, 1000);
