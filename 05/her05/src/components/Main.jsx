import React from 'react'
import './Main.css'
import Home from './mini-components/Home'
import About from './mini-components/About'
import Products from './mini-components/Products'
import Impact from './mini-components/Impact'
import Contact from './mini-components/Contact'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const Main = () => {
  return (
    <div className='main'>
        <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default Main