import React, { useState } from "react";
import "./Timing.css";
import Timer from "../timerlogic/Timer";
import { Link } from "react-router-dom";
function Timing() {
  const newMoonDates = [
    // Dates array for new moon events
    new Date("2024-12-30 10:00"),
    new Date("2025-01-29 10:00"),
    new Date("2025-02-27 10:00"),
    new Date("2025-03-29 10:00"),
    new Date("2025-04-27 10:00"),
    new Date("2025-05-27 10:00"),
    new Date("2025-06-25 10:00"),
    new Date("2025-07-25 10:00"),
    new Date("2025-08-23 10:00"),
    new Date("2025-09-22 10:00"),
    new Date("2025-10-21 10:00"),
    new Date("2025-11-19 10:00"),
    new Date("2025-12-19 10:00"),
  ];

  const fullMoonDates = [
      // Dates array for full moon events
      new Date('2024-12-15 10:00'),
      new Date("2025-01-14 10:00"),
      new Date("2025-02-13 10:00"),
      new Date("2025-03-14 10:00"),
      new Date("2025-04-13 10:00"),
      new Date("2025-05-13 10:00"),
      new Date("2025-06-12 10:00"),
      new Date("2025-07-12 10:00"),
      new Date("2025-08-10 10:00"),
      new Date("2025-09-9 10:00"),
      new Date("2025-10-8 10:00"),
      new Date("2025-11-7 10:00"),
      new Date("2025-12-7 10:00"),
  ];

  const nextSundayDates = [
    // Dates array for Sunday events
    new Date("2024-12-08 09:30"),
    new Date("2024-12-15 09:30"),
    new Date("2024-12-22 09:30"),
    new Date("2024-12-29 09:30"),
    new Date("2025-01-05 09:30"),
    new Date("2025-01-12 09:30"),
    new Date("2025-01-19 09:30"),
    new Date("2025-01-26 09:30"),
    new Date("2025-02-02 09:30"),
    new Date("2025-02-09 09:30"),
    new Date("2025-02-16 09:30"),
    new Date("2025-02-23 09:30"),
    new Date("2025-03-02 09:30"),
    new Date("2025-03-09 09:30"),
    new Date("2025-03-16 09:30"),
    new Date("2025-03-23 09:30"),
    new Date("2025-03-30 09:30"),
    new Date("2025-04-06 09:30"),
    new Date("2025-04-13 09:30"),
    new Date("2025-04-20 09:30"),
    new Date("2025-04-27 09:30"),
    new Date("2025-05-04 09:30"),
    new Date("2025-05-11 09:30"),
    new Date("2025-05-18 09:30"),
    new Date("2025-05-25 09:30"),
    new Date("2025-06-01 09:30"),
    new Date("2025-06-08 09:30"),
    new Date("2025-06-15 09:30"),
    new Date("2025-06-22 09:30"),
    new Date("2025-06-29 09:30"),
    new Date("2025-07-06 09:30"),
    new Date("2025-07-13 09:30"),
    new Date("2025-07-20 09:30"),
    new Date("2025-07-27 09:30"),
    new Date("2025-08-03 09:30"),
    new Date("2025-08-10 09:30"),
    new Date("2025-08-17 09:30"),
    new Date("2025-08-24 09:30"),
    new Date("2025-08-31 09:30"),
    new Date("2025-09-07 09:30"),
    new Date("2025-09-14 09:30"),
    new Date("2025-09-21 09:30"),
    new Date("2025-09-28 09:30"),
    new Date("2025-10-05 09:30"),
    new Date("2025-10-12 09:30"),
    new Date("2025-10-19 09:30"),
    new Date("2025-10-26 09:30"),
    new Date("2025-11-02 09:30"),
    new Date("2025-11-09 09:30"),
    new Date("2025-11-16 09:30"),
    new Date("2025-11-23 09:30"),
    new Date("2025-11-30 09:30"),
    new Date("2025-12-07 09:30"),
    new Date("2025-12-14 09:30"),
    new Date("2025-12-21 09:30"),
    new Date("2025-12-28 09:30"),
  ];
  const getNextDate = (datesArray) => {
    const now = new Date().getTime();
    const upcomingDates = datesArray.filter((date) => date.getTime() > now);
    return upcomingDates.length > 0 ? upcomingDates[0] : null;
  };

  const getNextEvent = () => {
    const sundayTargetDate = getNextDate(nextSundayDates);
    const amavasyaTargetDate = getNextDate(newMoonDates);
    const pournimaTargetDate = getNextDate(fullMoonDates);

    const events = [
      { name: "Sunday", targetDate: sundayTargetDate },
      { name: "Amavasya", targetDate: amavasyaTargetDate },
      { name: 'Pournima', targetDate: pournimaTargetDate },
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

        {sortedEvents
        .map((event) => (
          <Link key={event.name} to={`/${event.name}`}>
            <div className="timing-item">
              <h3>{event.name} Satsang</h3>
              {event.targetDate ? (
                <>
                  <Timer
                    targetDate={event.targetDate}
                    elementId={`${event.name.toLowerCase()}Timer`}
                  />
                  <p id={`${event.name.toLowerCase()}`}>
                    {event.targetDate.toDateString()}
                  </p>
                  <p>
                    Timing: {event.name === "Sunday" ? "09:30 AM" : "10:00 AM"}
                  </p>
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
