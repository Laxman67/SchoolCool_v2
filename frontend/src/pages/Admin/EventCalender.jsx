import { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';

import {
  EventCalendarContainer,
  Content,
  CalendarContainer,
  Events,
  Event,
  AddEventForm,
  EventInput,
  AddEventButton,
  ErrorText,
} from '../../styles/EventCalendarStyles';

const EventCalender = () => {
  return (
    <EventCalendarContainer>
      <Sidebar />
      <Content>
        <h1>Events and Calender</h1>
        <div>Current time : {}</div>
        <CalendarContainer>
          {/* We can display the calender */}
          Calender
        </CalendarContainer>

        <AddEventForm>
          <h2>Add New Event</h2>

          <EventInput type="text" placeholder="Enter Event" />
          <AddEventButton type="submit">Add Event</AddEventButton>
        </AddEventForm>

        {/* All Events  */}
        <Events>
          <p
            style={{
              backgroundColor: '#007bff',
              display: 'inline-block',
              padding: '10px',
              color: 'white',
              borderRadius: '5px ',
            }}
          >
            All Events{' '}
          </p>

          <Event>12</Event>
          <Event>12</Event>
          <Event>12</Event>
          <Event>12</Event>
        </Events>
      </Content>
    </EventCalendarContainer>
  );
};

export default EventCalender;
