import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import './index.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Info from './Pages/Restaurant/Info.jsx'
import Restaurant from './Pages/Restaurant/Restaurant.jsx'
import Contact from './Pages/Contact.jsx'
import About from './/Pages/About.jsx'
import Service from './/Pages/Service.jsx'
import Header from './Component/Header.jsx'
import Footer from './Component/Footer.jsx'
import CustomerDetails from './Pages/Restaurant/CustomerDetails.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <Header />
      <Routes>  
        <Route exact path='/' element={<Home />} />
        <Route  exact path='/restaurant' element={<Restaurant />} />
        <Route  exact path='/:id' element={<Info />} />
        <Route  exact path='/details' element={<CustomerDetails />} />
        <Route  exact path='/service' element={<Service />} />
        <Route  exact path='/about' element={<About />} />
        <Route  exact path='/contact' element={<Contact />} />
    </Routes>
    <Footer />
    </Router>
  </React.StrictMode>
   
 
)
