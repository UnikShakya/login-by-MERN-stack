import React from 'react'
import Signup from './Components/Signup/Signup.jsx'
import Login from './Components/Login/Login.jsx'
import Home from './Components/Home.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/home' element={<Home/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
