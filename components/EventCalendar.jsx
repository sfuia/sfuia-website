import React, { useState, useEffect }from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';

const locales = {
  "en-US": require("date-fns/locale/en-US")
}
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
});

const handleEventClick = (event) => {
  let eventLink = ""
  console.log(event.title)
  if (event.title.toLowerCase().includes('gerobak'))
  {
    eventLink = "https://docs.google.com/forms/d/1mXJsFCj9lH4mk4jkizC3mqLYh9CYSvh5HcE7_nrBY70/prefill";
  } else{
    eventLink = "https://docs.google.com/forms/d/e/1FAIpQLSdPCbY78ceVVbpvg7fmdSxsocQdtwLWXh9Mig0agR9iURmkNA/viewform?usp=sf_link";
  }
  window.open(eventLink, '_blank');
};

export default function EventCalendar(){
  const calendarID = 'a1be84a17449db9630d39f7be12c710bff12b2cd5f138b05c0ff8027efb22327@group.calendar.google.com'
  const calendarURL = `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events?key=AIzaSyAjQzkXxpzJomSLSnmPBZGSBC1JnNlxg7o`
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(calendarURL)
      .then((response) => response.json())
      .then((data) => {
        const updatedEvents = [];
        for (const event of data.items) {
          updatedEvents.push({
            title: event.summary,
            start: new Date(event.start.dateTime),
            end: new Date(event.end.dateTime),
          });
        }
        setEvents(updatedEvents);
      });
  }, []);

  return (
    <div className='max-w-7xl m-auto'>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 750, margin: '1rem' }}
        onSelectEvent={handleEventClick}
      />
    </div>
  );
};
