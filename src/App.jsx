import './App.css'
import Footer from './Components/Footer'
import Sidebar from './Components/Sidebar'
import About from './Pages/About';
import Contact from './Pages/Contact';
import Event from './Pages/Event';
import Home from './Pages/Home';
import { Route, Routes } from "react-router-dom";
import Team from './Pages/Team';
import EventGallery from './Pages/EventGallery';

function App() {

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
