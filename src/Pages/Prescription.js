import React from 'react';

const prescriptions = [
  { id: 1, date: '2025-06-01', medicine: 'Paracetamol', dosage: '500mg, twice a day' },
  { id: 2, date: '2025-06-02', medicine: 'Amoxicillin', dosage: '250mg, three times a day' },
];

const Prescription = () => {
  return (
    <div className="container">
      <h2>Prescriptions</h2>
      <ul>
        {prescriptions.map(p => (
          <li key={p.id}>
            <strong>{p.date}</strong>: {p.medicine} - {p.dosage}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Prescription;
