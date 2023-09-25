import React from 'react'
import './selectbar.css'

const SelectBar = () => {
  return (
    <div className='select-bar'>

    <div className='lokacija'>
     <p>Lokacija :</p>
     <select name="Izaberi lokaciju" id="select-location">
        <option value="Izaberi lokaciju" disabled selected>Izaberi lokaciju</option>
        <option value="Beograd"></option>
        <option value="Novi Pazar"></option>
     </select>
    </div>

    <div className='smestaj'>
    <p>Smestaj  :</p>
    <select name="Izaberi smestaj" id="select-smestaj">
        <option value="Izaberi Smestaj" disabled selected>Izaberi smestaj</option>
        <option value="Hotel Beograd">Beograd</option>
        <option value="Hotel Novi Sad">Novi Sad</option>
    </select>
    </div>

    <div className='price'>

        <span>
        <p className='price-p'>Cena :</p>
        <input type="range" className='range-input'/>
        </span>

        <span>
        <p>Vidi samo promocije</p>
        <input type="checkbox" className='checkbox'/>
        </span>

    </div>

    <button>Pretrazi</button>
    </div>
  )
}

export default SelectBar