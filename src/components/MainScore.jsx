
import React from 'react'

export default function MainScore(props) {
  return (
    <div className='container w-auto my-3  rounded-md bg-blue-200 bg-opacity-50 text-black  p-3'>
    <div className='flex font-serif justify-between'>
      <div className='w-1/2 overflow-hidden'><h5>{props.batteam}</h5></div>  
      <h5>{props.inning}</h5></div>
      <div className='main-score flex justify-between'>
      <div className='font-bold '>{props.totalruns}-{props.wickets}</div>
      <div className='font-bold'>Over:{props.over}.{props.overballs}</div>
      <div className='font-bold'>CRR:{props.netrunrate}</div>
      </div>
    </div>

  )
}
