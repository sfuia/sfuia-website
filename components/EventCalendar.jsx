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
  let eventLink = event.link
  window.open(eventLink, '_blank');
};

function getLink (event) {
  if(event.description == null){
    return ""
  }
  const startIdx = event.description.indexOf('href="') + 6;
  const endIdx = event.description.indexOf('"', startIdx);
  return event.description.substring(startIdx, endIdx);
}

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
            link: getLink(event), 
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
