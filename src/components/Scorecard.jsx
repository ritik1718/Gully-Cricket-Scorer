import React from 'react'

export default function Scorecard(props) {
  return (<>
    <div className='bg-white flex justify-between my-3'>
      <button className='font-bold bg-blue-300 rounded-md ' onClick={props.deletelastbatblue}>Delete last batter</button>
      <div className='bg-red-700 text-white w-1/2 font-mono text-3xl text-center'>First Inning</div> 
      <button className='font-bold bg-blue-200 rounded-md ' onClick={props.deletelastbatwhite}>Delete last batter</button>
      
    </div>
    
    <div className='container w-auto my-3  rounded-md bg-blue-100 text-black  p-3'>
      <div className='heading flex justify-between font-bold'>
        <h3>Batter</h3>
        <h3>R</h3>
        <h3>B</h3>
        <h3>4s</h3>
        <h3>6s</h3>
        <h3 className='relative right-3'>SR</h3>
      </div>
      
      {props.bat1hist.map((player1, index) => { return <div key={index} className='batsman-1 bg-blue-300 flex justify-between'>
      <div ><h3 className='w-20 overflow-hidden'>{player1.name}</h3></div>
        <div className='relative right-3  w-8 overflow-hidden' ><h3>{player1.runs}</h3></div>
       <div className=' relative right-1 w-8 overflow-hidden'> <h3>{player1.balls}</h3> </div>
        <div className='relative left-0 w-8 overflow-hidden'><h3>{player1.fours}</h3></div>
       <div className='relative left-2 w-8 overflow-hidden'><h3>{player1.sixs}</h3></div>
        <div className='relative right-1 w-8 overflow-hidden'><h3>{player1.sr}</h3></div>
      </div> })}

      {props.bat2hist.map((player2, index) => { return <div key={index} className='batsman-2 bg-blue-200 flex justify-between'>
      <div ><h3 className='w-20 overflow-hidden'>{player2.name}</h3></div>
        <div className='relative right-3  w-8 overflow-hidden' ><h3>{player2.runs}</h3></div>
       <div className=' relative right-1 w-8 overflow-hidden'> <h3>{player2.balls}</h3> </div>
        <div className='relative left-0 w-8 overflow-hidden'><h3>{player2.fours}</h3></div>
       <div className='relative left-2 w-8 overflow-hidden'><h3>{player2.sixs}</h3></div>
        <div className='relative right-1 w-8 overflow-hidden'><h3>{player2.sr}</h3></div>
      </div> })}
       
      <div className='bg-slate-800 flex justify-center my-3'>
      <button className='font-bold bg-red-800 rounded-md text-white' onClick={props.deletelastbowler}>Delete last bowler</button>
      </div> 

      <div className='heading flex justify-between font-bold'>
        <h3>Bowler</h3>
        <h3>B</h3>
        <h3>M</h3>
        <h3>R</h3>
        <h3 className='relative right-2'>W</h3>
      </div>
      {props.bowlerhist.map((bowler, index) => { return <div key={index} className='batsman-1 bg-blue-300 flex justify-between'>
      <div ><h3 className='w-20 overflow-hidden'>{bowler.name}</h3></div>
        <div className='relative left-0  w-8 overflow-hidden' ><h3>{bowler.balls}</h3></div>
       <div className=' relative left-1 w-8 overflow-hidden'> <h3>{bowler.maiden}</h3> </div>
        <div className='relative left-2 w-8 overflow-hidden'><h3>{bowler.runs}</h3></div>
       <div className='relative left-3 w-8 overflow-hidden'><h3>{bowler.wickets}</h3></div>
      </div> })}
      </div>




      <div className='my-24'>
      <div className='bg-white flex justify-between my-3'>
      <button className='font-bold bg-blue-300 rounded-md ' onClick={props.deletelastbatblue2nd}>Delete last batter</button>
      <div className='bg-red-700 text-white w-1/2 font-mono text-3xl text-center'>Second Inning</div> 
      <button className='font-bold bg-blue-200 rounded-md ' onClick={props.deletelastbatwhite2nd}>Delete last batter</button>
      
    </div>
    
    <div className='container w-auto my-3  rounded-md bg-blue-100 text-black  p-3'>
      <div className='heading flex justify-between font-bold'>
        <h3>Batter</h3>
        <h3>R</h3>
        <h3>B</h3>
        <h3>4s</h3>
        <h3>6s</h3>
        <h3 className='relative right-3'>SR</h3>
      </div>
      
      {props.bat1hist2nd.map((player1, index) => { return <div key={index} className='batsman-1 bg-blue-300 flex justify-between'>
      <div ><h3 className='w-20 overflow-hidden'>{player1.name}</h3></div>
        <div className='relative right-3  w-8 overflow-hidden' ><h3>{player1.runs}</h3></div>
       <div className=' relative right-1 w-8 overflow-hidden'> <h3>{player1.balls}</h3> </div>
        <div className='relative left-0 w-8 overflow-hidden'><h3>{player1.fours}</h3></div>
       <div className='relative left-2 w-8 overflow-hidden'><h3>{player1.sixs}</h3></div>
        <div className='relative right-1 w-8 overflow-hidden'><h3>{player1.sr}</h3></div>
      </div> })}

      {props.bat2hist2nd.map((player2, index) => { return <div key={index} className='batsman-2 bg-blue-200 flex justify-between'>
      <div ><h3 className='w-20 overflow-hidden'>{player2.name}</h3></div>
        <div className='relative right-3  w-8 overflow-hidden' ><h3>{player2.runs}</h3></div>
       <div className=' relative right-1 w-8 overflow-hidden'> <h3>{player2.balls}</h3> </div>
        <div className='relative left-0 w-8 overflow-hidden'><h3>{player2.fours}</h3></div>
       <div className='relative left-2 w-8 overflow-hidden'><h3>{player2.sixs}</h3></div>
        <div className='relative left-1 w-8 overflow-hidden'><h3>{player2.sr}</h3></div>
      </div> })}
       
      <div className='bg-slate-800 flex justify-center my-3'>
      <button className='font-bold bg-red-800 rounded-md text-white' onClick={props.deletelastbowler2nd}>Delete last bowler</button>
      </div> 

      <div className='heading flex justify-between font-bold'>
        <h3>Bowler</h3>
        <h3>B</h3>
        <h3>M</h3>
        <h3>R</h3>
        <h3 className='relative right-2'>W</h3>
      </div>
      {props.bowlerhist2nd.map((bowler, index) => { return <div key={index} className='batsman-1 bg-blue-300 flex justify-between'>
      <div ><h3 className='w-20 overflow-hidden'>{bowler.name}</h3></div>
        <div className='relative left-0  w-8 overflow-hidden' ><h3>{bowler.balls}</h3></div>
       <div className=' relative left-1 w-8 overflow-hidden'> <h3>{bowler.maiden}</h3> </div>
        <div className='relative left-2 w-8 overflow-hidden'><h3>{bowler.runs}</h3></div>
       <div className='relative left-3 w-8 overflow-hidden'><h3>{bowler.wickets}</h3></div>
      </div> })}
      </div>
      </div>
      </>
  )
}
