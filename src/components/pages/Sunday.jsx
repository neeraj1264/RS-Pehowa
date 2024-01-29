import React from 'react';
import './Dates.css'
const SundayDates = () => {

    const nextSundayDates =  [
        // Dates array for Sunday events
        new Date('2024-01-07 09:30'),
        new Date('2024-01-14 09:30'),
        new Date('2024-01-21 09:30'),
        new Date('2024-01-28 09:30'),
        new Date('2024-02-04 09:30'),
        new Date('2024-02-11 09:30'),
        new Date('2024-02-18 09:30'),
        new Date('2024-02-25 09:30'),
    ];

  return (
    <div className="outer-card">
      <h1 className="navbar-brand text-light fs-2">Sunday Date in 2024</h1>

      <div id="amavasyaDatesContainer">
        {nextSundayDates.map((date, index) => (
          <div key={index} className="inner-card">
            <p>{date.toDateString()}</p>
            <p>Satsang Timing 10:00 AM</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SundayDates;
