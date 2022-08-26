import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import './App.css'
import { Home } from './pages/home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='w-screen h-screen bg-[#694AFD]'> 
   <BrowserRouter >
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/home" element={<Home/>}  />
    </Routes>
  </BrowserRouter>
  </div>
)
