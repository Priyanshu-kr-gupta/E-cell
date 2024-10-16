import './App.css'
import Footer from './Components/Footer'
import Sidebar from './Components/Sidebar'
import Home from './Pages/Home';
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
    <Sidebar/>
    <Routes>
      <Route path="/" element={<Home />} />
      
    </Routes>
    <Footer/>
    </>
  )
}

export default App
