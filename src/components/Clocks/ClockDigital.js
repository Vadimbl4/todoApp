import React, { Component } from 'react';

function digital() {
  const hours = document.querySelector('.hoursDigital');
  const minutes = document.querySelector('.minutesDigital');
  const seconds = document.querySelector('.secondsDigital');

  hours.style.transition = `all .5s`;
  minutes.style.transition = `all .5s`;

  seconds.style.transition = `all .5s`;
  setTimeout(() => {
    hours.style.transform = 'scale(.3)';
    minutes.style.transform = 'scale(.3)';
    seconds.style.transform = 'scale(.3)';
  }, 500);

  setTimeout(() => {
    hours.style.transform = 'scale(1)';
    minutes.style.transform = 'scale(1)';
    seconds.style.transform = 'scale(1)';
  }, 1000);

  setInterval(() => {
    const time = new Date();

    let h = time.getHours()
    let m = time.getMinutes()
    let s = time.getSeconds()

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    hours.innerHTML = h
    minutes.innerHTML = m
    seconds.innerHTML = s
    // hours.innerHTML = time.getHours();
    // minutes.innerHTML = time.getMinutes();
    // seconds.innerHTML = time.getSeconds();

    
  }, 1000);
}


class ClockDigital extends Component {
  componentDidMount() {
    digital();
  }
  render() {
    return (
      <div className="clockDigitalWrap">
        <div className="hoursDigital"></div>
        <div className='colon'>:</div>
        <div className="minutesDigital"></div>
        <div className='colon'>:</div>
        <div className="secondsDigital"></div>
      </div>
    );
  }
}

export default ClockDigital;
