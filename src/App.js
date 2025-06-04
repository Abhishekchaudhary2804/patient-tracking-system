import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import BookAppointment from './pages/BookAppointment';
import ViewAppointments from './pages/ViewAppointments';
import Prescription from './pages/Prescription';

const App = () => {
  return (
    <Router>
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
    </Router>
  );
};

export default App;
