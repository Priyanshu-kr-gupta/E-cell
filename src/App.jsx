import './App.css'
import Footer from './Components/Footer'
import Sidebar from './Components/Sidebar'
import About from './Pages/About';
import Contact from './Pages/Contact';
import Event from './Pages/Event';
import Home from './Pages/Home';
import { Route, Routes , useLocation } from "react-router-dom";
import Team from './Pages/Team';
import EventGallery from './Pages/EventGallery';
import { useEffect } from 'react';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); 
    
  }, [pathname]);
  return (
    <>
    <Sidebar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/Events' element={<Event/>}/>
      <Route path="/EventGallery/:index" element={<EventGallery />} />
      <Route path='/Team' element={<Team/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
