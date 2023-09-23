import React from 'react'
import './navbar.css'
import {BsTelephone} from 'react-icons/bs'
import {AiOutlineInstagram} from 'react-icons/ai';
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineYoutube } from 'react-icons/ai';
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='contact'>
        <div className='contact-number'>
        <p>Kontaktiraj <BsTelephone /> +381 (0) 64 6132794</p>
        </div>

        <div className='contact-media'>
         <a href="https://www.instagram.com/"><AiOutlineInstagram /></a> 
         <a href="https://www.facebook.com/"><AiOutlineFacebook /></a>
         <a href="https://www.youtube.com/"><AiOutlineYoutube /></a>
        </div>
        </div>

        <div className='nav-list'>
        <ul>
            <li>NASLOVNA</li>
            <li>SMESTAJ</li>
            <li>TIP SMESTAJA</li>
            <li><img src={logo} alt="logo" /></li>
            <li>AKTIVNOSTI</li>
            <li>VASI IZBORI</li>
            <li>KONTAKTI</li>
        </ul>
        </div>
        
    </div>
  )
}

export default Navbar