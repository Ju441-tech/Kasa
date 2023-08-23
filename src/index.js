
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/'
import Flat from './pages/Flat'
import Footer from './components/Footer'
import Error from './pages/404'
import Header from './components/Header'
import About from './pages/About'
<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
</style>



const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<React.StrictMode>
  <Router>
    <Header/>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Flat/:logementId" element={<Flat />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>)