import React from 'react';
import './calendar.css';
import { eachDayOfInterval, endOfMonth, format, getDay, isToday, startOfMonth } from 'date-fns';
import arrowb from '../../assets/arrowb.png';

function Calendar() {
  const Weekdays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  const currentDate = new Date();
  const firstDayOfMonth = startOfMonth(currentDate);
  const lastDayOfMonth = endOfMonth(currentDate);

  const daysInMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: lastDayOfMonth,
  });

  const startingDayIndex = (getDay(firstDayOfMonth) + 6) % 7;;

  return (
    <main className='calendar-container'>
      <section className='calendar-align'>
        <p>{format(currentDate, 'MMMM')}</p>
        <img src={arrowb} alt='arrow icon' />
      </section>

      <section className='calendar-align1'>
        {Weekdays.map((day) => (
          <div key={day} className='calendar-align2'>{day}</div>
        ))}

        {Array.from({ length: startingDayIndex }).map((_, index) => (
          <div key={`empty-${index}`}></div>
        ))}

        {daysInMonth.map((day, index) => (
          <div key={index}  className={`calendar-align3 ${isToday(day) ? 'today' : ''}`}>
            {format(day, 'd')}
          </div>
        ))}
      </section>
    </main>
  );
}

export default Calendar;
