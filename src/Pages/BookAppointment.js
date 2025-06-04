import React, { useState } from 'react';

const BookAppointment = () => {
  const [form, setForm] = useState({
    doctor: '',
    date: '',
    time: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('Appointment booked successfully!');
  };

  return (
    <div className="container">
      <h2>Book Appointment</h2>
      <form onSubmit={handleSubmit}>
        <select name="doctor" onChange={handleChange} required>
          <option value="">Select Doctor</option>
          <option value="Dr. Smith">Dr. Smith</option>
          <option value="Dr. Johnson">Dr. Johnson</option>
          <option value="Dr. Lee">Dr. Lee</option>
        </select>
        <input name="date" type="date" onChange={handleChange} required />
        <input name="time" type="time" onChange={handleChange} required />
        <button type="submit">Book</button>
      </form>
    </div>
  );
};

export default BookAppointment;
