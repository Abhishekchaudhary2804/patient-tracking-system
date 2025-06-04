import React from 'react';

const appointments = [
  { id: 1, doctor: 'Dr. Smith', date: '2025-06-10', time: '10:00 AM' },
  { id: 2, doctor: 'Dr. Johnson', date: '2025-06-12', time: '2:30 PM' },
];

const ViewAppointments = () => {
  return (
    <div className="container">
      <h2>Your Appointments</h2>
      <table>
        <thead>
          <tr>
            <th>Doctor</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(app => (
            <tr key={app.id}>
              <td>{app.doctor}</td>
              <td>{app.date}</td>
              <td>{app.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewAppointments;
