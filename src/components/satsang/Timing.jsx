import React, {useState} from 'react'
import './Timing.css'
import Timer from '../timerlogic/Timer';
// import { Link } from 'react-router-dom';
function Timing() {

const newMoonDates = [
// Dates array for new moon events
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
const getNextDate = (datesArray) => {
    const now = new Date().getTime();
    const upcomingDates = datesArray.filter((date) => date.getTime() > now);
    return upcomingDates.length > 0 ? upcomingDates[0] : null;
    };

    const [currentSundayIndex, setCurrentSundayIndex] = useState(0);
    const [currentAmavasyaIndex, setCurrentAmavasyaIndex] = useState(0);
    const [currentPournimaIndex, setCurrentPournimaIndex] = useState(0);
    
    // const handleSundayTimerExpire = () => {
    // setCurrentSundayIndex((prevIndex) => prevIndex + 1);
    // };

    // const handleAmavasyaTimerExpire = () => {
    // setCurrentAmavasyaIndex((prevIndex) => prevIndex + 1);
    // };

    // const handlePournimaTimerExpire = () => {
    // setCurrentPournimaIndex((prevIndex) => prevIndex + 1);
    // };

    const sundayTargetDate = getNextDate(nextSundayDates, currentSundayIndex);
    const amavasyaTargetDate = getNextDate(newMoonDates, currentAmavasyaIndex);
    const pournimaTargetDate = getNextDate(fullMoonDates, currentPournimaIndex);

    
    return (
    <>
        <div className="satsang-timing">
        <h2>Upcoming Satsang </h2>

        <div className="timing-item">
            <h3>Every Sunday</h3>
            {sundayTargetDate ? (
            <>
                <Timer targetDate={sundayTargetDate} elementId="sundayTimer" />
                <p id="sunday">{sundayTargetDate.toDateString()}</p>
                <p>Timing: 09:30 AM</p>
            </>
            ) : (
            <p>No upcoming Sunday satsang</p>
            )}
        </div>

        <div className="timing-item">
            <h3>Amavasya Satsang</h3>
            {amavasyaTargetDate ? (
            <>
                <Timer targetDate={amavasyaTargetDate} elementId="amavasyaTimer" />
                <p id="amavasya">{amavasyaTargetDate.toDateString()}</p>
                <p>Timing: 10:00 AM</p>
            </>
            ) : (
            <p>No upcoming Amavasya satsang</p>
            )}
        </div>

        <div className="timing-item">
            <h3>Pournima Satsang</h3>
            {pournimaTargetDate ? (
            <>
                <Timer targetDate={pournimaTargetDate} elementId="pournimaTimer" />
                <p id="pournima">{pournimaTargetDate.toDateString()}</p>
                <p>Timing: 10:00 AM</p>
            </>
            ) : (
            <p>No upcoming Pournima satsang</p>
            )}
        </div>
        </div>
    </>
    );
}

export default Timing;