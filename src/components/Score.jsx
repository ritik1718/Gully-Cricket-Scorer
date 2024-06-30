import react from 'react'

export default function Score(props) {
  return (
    <div className='container w-auto my-3  rounded-md bg-blue-100 bg-opacity-75 text-black  p-3'>
      <div className='heading flex justify-between font-bold'>
        <h3>Batsman</h3>
        <h3>R</h3>
        <h3>B</h3>
        <h3>4s</h3>
        <h3>6s</h3>
        <h3>SR</h3>
      </div>
      <div className={`batsman-1 ${props.whitebg1} flex justify-between`}>
      <div ><h3 className='w-20 overflow-hidden'>{props.bat1}</h3></div>
        <div className='relative left-1  w-8 overflow-hidden' ><h3>{props.player1runs}</h3></div>
       <div className=' relative left-1 w-8 overflow-hidden'> <h3>{props.player1balls}</h3> </div>
        <div className='relative left-2 w-8 overflow-hidden'><h3>{props.player1fours}</h3></div>
       <div className='relative left-3 w-8 overflow-hidden'><h3>{props.player1sixs}</h3></div>
        <div className='relative left-3 w-8 overflow-hidden'><h3>{props.player1sr}</h3></div>
      </div>
      <div className={`batsman-2 ${props.whitebg2} flex justify-between`}>
      <div ><h3 className='w-20 overflow-hidden'>{props.bat2}</h3></div>
        <div className=' relative left-1 w-8 overflow-hidden' ><h3>{props.player2runs}</h3></div>
       <div className=' relative left-1 w-8 overflow-hidden'> <h3>{props.player2balls}</h3> </div>
        <div className='relative left-2 w-8 overflow-hidden'><h3>{props.player2fours}</h3></div>
       <div className='relative left-3 w-8 overflow-hidden'><h3>{props.player2sixs}</h3></div>
       <div className='relative left-3 w-8 overflow-hidden'><h3>{props.player2sr}</h3></div>
      </div>
      <div className='w-88 overflow-hidden '><p>----------------------------------------------------</p></div>
      <div className='bollingEnd'>
      <div className='heading flex justify-between font-bold'>
        <h3>Bowler</h3>
        <h3>O</h3>
        <h3>M</h3>
        <h3>R</h3>
        <h3>W</h3>
      </div>
      <div className='bowler flex justify-between'>
      <div ><h3 className='w-20 overflow-hidden'>{props.bowl}</h3></div>
        <div className=' relative right-0 w-8 overflow-hidden' ><h3>{props.bowlerballs}</h3></div>
       <div className=' relative left-2 w-8 overflow-hidden'> <h3>{props.bowlermaiden}</h3> </div>
        <div className='relative left-3 w-8 overflow-hidden'><h3>{props.bowlerruns}</h3></div>
       <div className='relative left-5 w-8 overflow-hidden'><h3>{props.bowlerwickets}</h3></div>
       </div>
      </div>
    </div>
  )
}
