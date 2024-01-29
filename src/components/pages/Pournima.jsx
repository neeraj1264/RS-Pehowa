import React from 'react';
import './Dates.css'
const PournimaDates = () => {

  const fullMoonDates = [
    // Dates array for full moon events
    new Date('2024-01-25 10:00'), 
    new Date('2024-02-24 10:00'), 
    new Date('2024-03-24 10:00'), 
    new Date('2024-04-23 10:00'), 
    new Date('2024-05-23 10:00'), 
    new Date('2024-06-21 10:00'), 
    new Date('2024-07-21 10:00'), 
    new Date('2024-08-19 10:00'), 
    new Date('2024-09-17 10:00'), 
    new Date('2024-10-17 10:00'), 
    new Date('2024-11-15 10:00'), 
    new Date('2024-12-15 10:00'), 
];

  return (
    <div className="outer-card">
      <h1 className="navbar-brand text-light fs-2">Pournima Date in 2024</h1>

      <div id="amavasyaDatesContainer">
        {fullMoonDates.map((date, index) => (
          <div key={index} className="inner-card">
            <p>{date.toDateString()}</p>
            <p>Satsang Timing 10:00 AM</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PournimaDates;
