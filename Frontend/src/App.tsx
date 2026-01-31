import { Route, Routes } from 'react-router';
import Dashboard from './pages/DashBoard';
import Auth from './pages/Auth';
import About from "./pages/About";
import Upload from './components/Upload'
import MyDetail from './components/MyDet';
import DetailConfirmation from './pages/DetailConfirmation'
import Map from './components/MapComponent'
import HealthSummary from './components/HealthSummary';
import Splash from './components/Splash';
import DoctorAuth from './pages/DoctorAuth';
import DoctorDash from './pages/DoctorDash';
import AppointmentCalendar from './components/Appointment';
import Chatbot from './components/Chatbot';
import DoctorAvailability from './pages/DoctorAvailability';
import BedAvailability from './pages/BedAvailability';
import { useState, useEffect } from "react";
import { Toaster } from 'react-hot-toast';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Splash />;
  }
  
  


  return (
    <div>
      <Toaster />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/auth" element={<Auth />} />
        <Route path='/details' element={<DetailConfirmation />} />
        <Route path='/doctor' element={<DoctorAuth />} />
        <Route path='/doctordash' element={<DoctorDash />} />
        <Route path='/detail' element={<MyDetail />} />
        <Route path='/about' element={<About />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/map' element={<Map />} />
        
        <Route path='/appointment' element={<AppointmentCalendar />} />
        <Route path='/ai' element={<Chatbot />} />
        <Route path='/doctoravailable' element={<DoctorAvailability />} />
        <Route path='/bedavailable' element={<BedAvailability />} />
        <Route path='/history' element={<HealthSummary/>} />
      </Routes>
    </div>
  );
}

