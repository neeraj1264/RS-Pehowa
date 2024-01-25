import React, { useState, useEffect } from 'react';
function calculateTimeDifference(targetDate) {
  const now = new Date().getTime();
  const distance = targetDate.getTime() - now;
  return distance;
}

function convertTime(milliseconds) {
  const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
  const hours = Math.floor((milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
}

function Timer({ targetDate, elementId, onTimerExpire }) {
    const [remainingTime, setRemainingTime] = useState(calculateTimeDifference(targetDate));
  
    useEffect(() => {
      const interval = setInterval(() => {
        const distance = calculateTimeDifference(targetDate);
        setRemainingTime(distance);
      }, 1000);
  
      return () => clearInterval(interval);
    }, [targetDate]);
  
    useEffect(() => {
      if (remainingTime <= 0 && onTimerExpire) {
        onTimerExpire();
      }
    }, [remainingTime, onTimerExpire]);
  
    if (remainingTime <= 0) {
      return <p id={elementId}>Satsang Start...</p>;
    }
  
    const { days, hours, minutes, seconds } = convertTime(remainingTime);
  
  return (
    <div>
      <p id={elementId}>
        {days}d {hours}h {minutes}m {seconds}s
      </p>
    </div>
  );
}

export default Timer;
