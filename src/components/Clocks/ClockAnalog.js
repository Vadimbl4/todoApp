import React from 'react';

export default function ClockAnalog() {
  function analog() {
    const hoursArrow = document.querySelector('.hoursAnalog');
    const minutesArrow = document.querySelector('.minutesAnalog');
    const secondsArrow = document.querySelector('.secondsAnalog');
    const deg = 6;

    hoursArrow.style.transition = `all 1s`;
    minutesArrow.style.transition = `all 1s`;
    secondsArrow.style.transition = `all 1s`;
    setTimeout(() => {
      hoursArrow.style.transition = `none`;
      minutesArrow.style.transition = `none`;
      secondsArrow.style.transition = `none`;
    }, 1000);

    setInterval(() => {
      const day = new Date();

      const hours = day.getHours() * 30;
      const minutes = day.getMinutes() * deg;
      const seconds = day.getSeconds() * deg;

      hoursArrow.style.transform = `rotateZ(${hours + minutes / 12}deg)`;
      minutesArrow.style.transform = `rotateZ(${minutes}deg)`;
      secondsArrow.style.transform = `rotateZ(${seconds}deg)`;
    }, 0);
  }

  setTimeout(() => {
    analog();
  }, 0);

  return (
    <div className="clockAnalogWrap">
      <div className="clockAnalog">
        <div className="hourAnalog">
          <div className="hoursAnalog"></div>
        </div>

        <div className="minuteAnalog">
          <div className="minutesAnalog"></div>
        </div>

        <div className="secondAnalog">
          <div className="secondsAnalog"></div>
        </div>
      </div>
    </div>
  );
}
