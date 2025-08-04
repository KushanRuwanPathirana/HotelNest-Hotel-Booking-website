import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home';
import Footer from './Components/Footer';
import AllRooms from './Pages/AllRooms.jsx';

const App = () => {

  const isOwnerPath = useLocation().pathname.includes("owner");
  return (
    <div className=''>
      {!isOwnerPath && <Navbar/>}
      <div className='min-h-[70vh]'>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/rooms' element={<AllRooms/>} />
          </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App