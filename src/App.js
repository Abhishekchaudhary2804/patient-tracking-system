import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import BookAppointment from './Pages/BookAppointment';
import ViewAppointments from './Pages/ViewAppointments';
import Prescription from './Pages/Prescription';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/book" element={<BookAppointment />} />
        <Route path="/appointments" element={<ViewAppointments />} />
        <Route path="/prescription" element={<Prescription />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
