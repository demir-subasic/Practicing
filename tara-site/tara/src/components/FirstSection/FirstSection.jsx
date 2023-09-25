import React from 'react'
import './main.css'
import SelectBar from './SelectBar'

const Main = () => {
  return (
    <div className='main'>
        <div className="text-content">
         <h1>SMESTAJ NA TARI</h1>
         <p>Prelepi vidikovci Tare, jezera Zaovine i Perućac, kanjon Drine i netaknuta priroda nacionalnog Parka Tara zovu Vas da provedete odmor upravo ovde.</p>
         <button>PONUDE</button>
        </div>
        <SelectBar />
    </div>
  )
}

export default Main