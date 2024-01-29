import React from 'react';
import './Dates.css'
const AmavasyaDates = () => {
  // Dates array for new moon events
  const newMoonDates = [
    new Date('2024-01-11 10:00'),
    new Date('2024-02-09 10:00'),
    new Date('2024-03-10 10:00'),
    new Date('2024-04-08 10:00'),
    new Date('2024-05-07 10:00'),
    new Date('2024-06-06 10:00'),
    new Date('2024-07-05 10:00'),
    new Date('2024-08-04 10:00'),
    new Date('2024-09-02 10:00'),
    new Date('2024-10-02 10:00'),
    new Date('2024-11-01 10:00'),
    new Date('2024-11-30 10:00'),
    new Date('2024-12-30 10:00'),
  ];

  return (
    <div className="outer-card">
      <h1 className="navbar-brand text-light fs-2">Amavasya Date in 2024</h1>

      <div id="amavasyaDatesContainer">
        {newMoonDates.map((date, index) => (
          <div key={index} className="inner-card">
            <p>{date.toDateString()}</p>
            <p>Satsang Timing 10:00 AM</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AmavasyaDates;
