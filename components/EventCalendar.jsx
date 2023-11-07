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
    id: 0,
    title: 'Golf @Burnaby Mountain Golf',
    start: new Date(2023, 9, 21, 13, 30),
    end: new Date(2023, 9, 21, 16, 30),
  },
  {
    id: 1,
    title: 'Gerobak - Bakmi Ayam + Pangsit',
    start: new Date(2023, 9, 23, 0, 0),
    end: new Date(2023, 9, 26, 24, 0),
    color: 'red'
  },
  {
    id: 2,
    title: 'Badminton @ Badminton Vancouver',
    start: new Date(2023, 10, 11, 14, 0),
    end: new Date(2023, 10, 11, 16, 0),
  },
];

const handleEventClick = (event) => {
  let eventLink = ""
  if (event.id % 2 == 0) {
    eventLink = "https://docs.google.com/forms/d/e/1FAIpQLSdPCbY78ceVVbpvg7fmdSxsocQdtwLWXh9Mig0agR9iURmkNA/viewform?usp=sf_link";
  } else{
    eventLink = "https://docs.google.com/forms/d/e/1FAIpQLSf_mxxN-CAAk3BytESxw2wU01dqBHDcvjJF8gmpeBRt2u_l8A/viewform?usp=pp_url";
  }
  window.open(eventLink, '_blank');
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
