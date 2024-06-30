import React from 'react'
import {Link} from "react-router-dom";
export default function Navbar() {
  return (
   
    <nav className=' bg-slate-800 text-white p-3'>
      <div className="logo relative left-28">
        <span className='font-bold text-xl mx-8 relative right-4'>ArrE GaZaB</span>
      </div>
      <ul className='flex gap-8 mx-7'>
       <li className='curser-pointer hover:font-bold transition-all'>StartMatch</li>
      <Link  to="/livematch"> <li className='curser-pointer hover:font-bold transition-all'> LiveMatch </li></Link>
      <Link to="/scorecard" > <li className='curser-pointer hover:font-bold transition-all'>   ScoreCard </li></Link>
      </ul>
    </nav>
      )
}
