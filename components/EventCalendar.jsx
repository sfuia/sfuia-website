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

const events = [
  {
    id: 1,
    title: 'Event 1',
    start: new Date(2023, 10, 1, 10, 0),
    end: new Date(2023, 10, 1, 12, 0),
  },
  {
    id: 2,
    title: 'Event 2',
    start: new Date(2023, 10, 3, 14, 0),
    end: new Date(2023, 10, 3, 16, 0),
  },
  // Add more events as needed
];

const handleEventClick = (event) => {
  const discordURL = ("https://discord.com/channels/1019097260988039188/1163680711228784670")
  window.open(discordURL, '_blank');
};

export default function EventCalendar(){
  // const calendarURL =
  //   "https://clients6.google.com/calendar/v3/calendars/j7qfcngd9crbhelib6tgdihi3k@group.calendar.google.com/events?calendarId=j7qfcngd9crbhelib6tgdihi3k%40group.calendar.google.com&singleEvents=true&timeZone=America%2FVancouver&maxAttendees=1&maxResults=250&sanitizeHtml=true&timeMin=2023-03-26T00%3A00%3A00-07%3A00&timeMax=2024-05-07T00%3A00%3A00-07%3A00&key=AIzaSyBNlYH01_9Hc5S1J9vuFmu2nUqBZJNAXxs";
  // const [events, setEvents] = useState([]);

  // useEffect(() => {
  //   fetch(calendarURL)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const updatedEvents = [];
  //       for (const event of data.items) {
  //         updatedEvents.push({
  //           title: event.summary,
  //           start: new Date(event.start.dateTime),
  //           end: new Date(event.end.dateTime),
  //         });
  //       }
  //       setEvents(updatedEvents);
  //     });
  // }, []);

  return (
    <div className='m-16'>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 750, margin: '4rem' }}
        onSelectEvent={handleEventClick}
      />
    </div>
  );
};