import React from 'react'
import {Link} from "react-router-dom";

export default function Startmatch(props) {

  return ( 
    <>
    <div className='teams w-auto my-3 rounded-md bg-blue-100 '>
     <h3 className=' font-bold text-3xl mx-3'  > Batting Team Name</h3>
     <input type='text' placeholder='Baba' className='w-3/4 p-3 my-4 mx-3 rounded-md' onChange={props.change1} ></input> 

     <h3 className=' font-bold text-3xl mx-3' > Bowling Team Name</h3>
     <input type='text' placeholder='Bauaa' className='w-3/4 p-3 my-4 mx-3 rounded-md' onChange={props.change2}></input> 
     <h3 className=' font-bold text-3xl mx-3' > Bats Man 1</h3>
     <input type='text' placeholder='Sundram Bhaiya' className='w-3/4 p-3 my-4 mx-3 rounded-md' onChange={props.change4}></input>
    
     <h3 className=' font-bold text-3xl mx-3' > Bats Man 2</h3>
     <input type='text' placeholder='Adarsh bhaiya' className='w-3/4 p-3 my-4 mx-3 rounded-md' onChange={props.change5}></input>

     <h3 className=' font-bold text-3xl mx-3' > Bowler </h3>
     <input type='text' placeholder='Rudra' className='w-3/4 p-3 my-4 mx-3 rounded-md' onChange={props.change6}></input>
   { /* <h3 className=' font-bold text-3xl mx-3'> No of Overs?</h3>
     <input type='number' placeholder='20' className='w-1/4 p-3 my-4 mx-3 rounded-md' onChange={props.change3}></input> */}
    </div> 
    <button className='w-1/2  bg-slate-800 text-white rounded-lg relative left-24 p-2  font-bold text-2xl'> <Link  to="/livematch">Start The Game</Link></button>

    <div className='teams w-auto my-3 rounded-md bg-red-300 mx-1'>
      <p>NOTE :- if you use no ball , wide , wickets , leg byes then ball will not count so you have to assign runs before on that ball.</p> 
      <p>EXAMPLE 1:- wicket on 2nd ball then asiign 0 runs then click wicket  </p> 
      <p>EXAMPLE 2:- leg byes on 3rd ball then asiign 2 runs then click leg byes</p> 
    </div>
    </>  
  )
}
