import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const localizer = momentLocalizer(moment);

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

const EventCalendar = () => {
  return (
    <div style={{maxWidth: 1000}}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 750 }}
      />
    </div>
  );
};

export default EventCalendar;
