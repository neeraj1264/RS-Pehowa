import React, {useState} from 'react'
import './Timing.css'
import Timer from '../timerlogic/Timer';
import { Link } from 'react-router-dom';
function Timing() {

const newMoonDates = [
    // Dates array for new moon events
    new Date('2024-01-11 10:00'),
    new Date('2024-02-09 10:00'),
    new Date('2024-03-10 09:30'),
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

// const fullMoonDates = [
//     // Dates array for full moon events
//     new Date('2024-01-25 10:00'), 
//     new Date('2024-02-24 10:00'), 
//     new Date('2024-03-24 10:00'), 
//     new Date('2024-04-23 10:00'), 
//     new Date('2024-05-23 10:00'), 
//     new Date('2024-06-21 10:00'), 
//     new Date('2024-07-21 10:00'), 
//     new Date('2024-08-19 10:00'), 
//     new Date('2024-09-17 10:00'), 
//     new Date('2024-10-17 10:00'), 
//     new Date('2024-11-15 10:00'), 
//     new Date('2024-12-15 10:00'), 
// ];

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

    new Date('2024-03-03 09:30'),
    new Date('2024-03-10 09:30'),
    new Date('2024-03-17 09:30'),
    new Date('2024-03-24 09:30'),
    new Date('2024-03-31 09:30'),
    new Date('2024-04-07 09:30'),
    new Date('2024-04-14 09:30'),
    new Date('2024-04-21 09:30'),
    new Date('2024-04-28 09:30'),
    
];
const getNextDate = (datesArray) => {
    const now = new Date().getTime();
    const upcomingDates = datesArray.filter((date) => date.getTime() > now);
    return upcomingDates.length > 0 ? upcomingDates[0] : null;
    };

    const getNextEvent = () => {
        const sundayTargetDate = getNextDate(nextSundayDates);
        const amavasyaTargetDate = getNextDate(newMoonDates);
        // const pournimaTargetDate = getNextDate(fullMoonDates);
    
        const events = [
          { name: 'Sunday', targetDate: sundayTargetDate },
          { name: 'Amavasya', targetDate: amavasyaTargetDate },
          // { name: 'Pournima', targetDate: pournimaTargetDate },
        ];
    
        // Sort events by targetDate in ascending order
        events.sort((a, b) => a.targetDate - b.targetDate);
    
        return events;
      };
    
      const [sortedEvents, setSortedEvents] = useState(getNextEvent());
    
      return (
        <>
      <div className="satsang-timing">
        <h2>Upcoming Satsang</h2>

        {sortedEvents.map((event) => (
          <Link key={event.name} to={`/${event.name}`}>
            <div className="timing-item">
              <h3>{event.name} Satsang</h3>
              {event.targetDate ? (
                <>
                  <Timer targetDate={event.targetDate} elementId={`${event.name.toLowerCase()}Timer`} />
                  <p id={`${event.name.toLowerCase()}`}>{event.targetDate.toDateString()}</p>
                  <p>Timing: {event.name === 'Sunday' ? '09:30 AM' : '10:00 AM'}</p>
                </>
              ) : (
                <p>No upcoming {event.name} satsang</p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </>
      );
    }
    
    export default Timing;
