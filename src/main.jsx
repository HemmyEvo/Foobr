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
        
      {/* home */}
        <Route exact path='/' Component={Home} />
        <Route  path='/restaurant' Component={Restaurant} />
        <Route  path='/:id' Component={Info} />
        <Route  path='/details' Component={CustomerDetails} />
        <Route  path='/service' Component={Service} />
        <Route  path='/about' Component={About} />
        <Route  path='/contact' Component={Contact} />




   

    </Routes>
    <Footer />
    </Router>
   
  </React.StrictMode>,
)
