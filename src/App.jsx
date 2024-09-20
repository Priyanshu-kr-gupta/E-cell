import './App.css'
import Footer from './Components/Footer'
import Guestspeaker from './Components/Guestspeaker'
import Hero from './Components/Hero'
import Intro from './Components/Intro'
import Objectives from './Components/Objectives'
import PastEvents from './Components/PastEvents'
import Sidebar from './Components/Sidebar'
import ThanksGallery from './Components/ThanksGallery'
import UpcomingEvent from './Components/UpcomingEvent'

function App() {

  return (
    <>
    <Sidebar/>
    <Hero/>
    <Intro/>
    <Objectives/>
    <Guestspeaker/>
    <UpcomingEvent/>
    <PastEvents/>
    <ThanksGallery/>
    <Footer/>
    </>
  )
}

export default App
