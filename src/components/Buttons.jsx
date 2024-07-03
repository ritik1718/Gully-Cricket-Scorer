import React from 'react'
import {Link} from "react-router-dom";


export default function Buttons(props) {
  return (  
        <div className='buttons w-full my-3  rounded-md bg-blue-100 p-3'>
           <div className='flex justify-center '>
           {props.bat1change}
           {props.bat2change}
           {props.bowlerchange} </div>
        <div className={`flex justify-between ${props.hide}`}>
            <button className='w-1/4 bg-slate-800 text-white rounded-md font-bold' onClick={props.undo}>Undo</button>
            <Link to="/">  <button className='w-24 bg-slate-800 text-white rounded-md font-bold' onClick={props.secondinning}>Start 2ndInning</button> </Link>
           <button className='w-1/4 bg-slate-800 text-white rounded-md font-bold' onClick={props.swap}>Swap Batsman</button>
        </div>
        <div className= {`flex justify-between my-4 ${props.hide}`}>
            <button className='w-10 h-10  bg-slate-800 text-white rounded-full font-bold' onClick={props.zero}>0</button>
            <button className='w-10 h-10  bg-slate-800 text-white rounded-full font-bold' onClick={props.one}>1</button>
            <button className='w-10 h-10  bg-slate-800 text-white rounded-full font-bold' onClick={props.two}>2</button>
            <button className='w-10 h-10  bg-slate-800 text-white rounded-full font-bold' onClick={props.three}>3</button>
            <button className='w-10 h-10  bg-slate-800 text-white rounded-full font-bold' onClick={props.four}>4</button>
            <button className='w-10 h-10  bg-slate-800 text-white rounded-full font-bold' onClick={props.five}>5</button>
            <button className='w-10 h-10  bg-slate-800 text-white rounded-full font-bold' onClick={props.six}>6</button>
        </div>
    </div>
  )
}
