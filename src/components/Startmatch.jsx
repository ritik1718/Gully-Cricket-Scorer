import React from 'react'
import {Link} from "react-router-dom";

export default function Startmatch(props) {

  return ( 
    <>
    <div className='teams w-auto my-3 rounded-md bg-blue-100 '>
     <h3 className=' font-bold text-3xl mx-3'  > Batting Team Name</h3>
     <input type='text' placeholder='India' className='w-3/4 p-3 my-4 mx-3 rounded-md' onChange={props.change1} ></input> 

     <h3 className=' font-bold text-3xl mx-3' > Bowling Team Name</h3>
     <input type='text' placeholder='Pakistan' className='w-3/4 p-3 my-4 mx-3 rounded-md' onChange={props.change2}></input> 
     <h3 className=' font-bold text-3xl mx-3' > Bats Man 1</h3>
     <input type='text' placeholder='Rohit Sharma' className='w-3/4 p-3 my-4 mx-3 rounded-md' onChange={props.change4}></input>
    
     <h3 className=' font-bold text-3xl mx-3' > Bats Man 2</h3>
     <input type='text' placeholder='Virat Kohli' className='w-3/4 p-3 my-4 mx-3 rounded-md' onChange={props.change5}></input>

     <h3 className=' font-bold text-3xl mx-3' > Bowler </h3>
     <input type='text' placeholder='Bumrah' className='w-3/4 p-3 my-4 mx-3 rounded-md' onChange={props.change6}></input>
   { /* <h3 className=' font-bold text-3xl mx-3'> No of Overs?</h3>
     <input type='number' placeholder='20' className='w-1/4 p-3 my-4 mx-3 rounded-md' onChange={props.change3}></input> */}
    </div> 
    <button className='w-1/2  bg-slate-800 text-white rounded-lg relative left-24 p-2  font-bold text-2xl'> <Link  to="/livematch">Start The Game</Link></button>

    <div className='teams w-auto my-3 rounded-md bg-slate-300'>
    </div>
    </>  
  )
}
