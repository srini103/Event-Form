import React, { useState } from 'react';

const EventForm = () => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [year, setYear] = useState('');
  const [eventType, setEventType] = useState('');
  const [dateOfParticipation, setDateOfParticipation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Event Name:', eventName);
    console.log('Event Date:', eventDate);
    console.log('Name:', name);
    console.log('Department:', department);
    console.log('Year:', year);
    console.log('Event Type:', eventType);
    console.log('Date of Participation:', dateOfParticipation);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Student Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter event name"
        />
      </label>
      <label>
        Event Name:
        <input
          type="text"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          placeholder='Enter Event Name'
        />
      </label>
      <label>
        Department:
        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value="IT">IT</option>
          <option value="CE">CE</option>
          <option value="AIML">AIML</option>
          <option value="AIDS">AIDS</option>
          <option value="ECS">ECS</option>
          <option value="EXTC">EXTC</option>
          <option value="IOT">IOT</option>
          <option value="ME">ME</option>
          {/* Add more department options as needed */}
        </select>
      </label>
      <label>
        Year:
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
        >
          <option value="FE">FE</option>
          <option value="SE">SE</option>
          <option value="TE">TE</option>
          <option value="BE">BE</option>
        </select>
      </label>
      <label>
        Event Type:
        <select
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
        >
          <option value="Cultural">Cultural Event</option>
          <option value="Sports">Sports Event</option>
          <option value="Academic">Academic Competitions</option>
          <option value="Technical">Technical Events</option>
          <option value="Literary">Literary Events</option>
          <option value="Workshops">Workshops and Seminars</option>
          {/* Add more event type options as needed */}
        </select>
      </label>
      <label>
        Date of Participation:
        <input
          type="date"
          value={dateOfParticipation}
          onChange={(e) => setDateOfParticipation(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default EventForm;
