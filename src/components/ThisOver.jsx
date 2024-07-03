import React from 'react'

export default function ThisOver(props) {
  return (
          <div className='container w-auto my-3  rounded-md bg-blue-100 p-3'>
             <div> <h1 className=''>This Over:</h1> </div> 
            <div className='this-over flex  my-4'> {props.divs}</div>
            <div className={`decission-checkboxes flex justify-between font-semibold ${props.hide}`}>
            <div><h3>Wide</h3>
            <input type='checkbox'onChange={props.wide} onClick={props.wide} checked={props.tick1}></input></div>
            <div><h3>No Ball</h3>
            <input type='checkbox'onChange={props.noball} onClick={props.noball} checked={props.tick2}></input></div>
            <div><h3>Leg-Byes</h3>
            <input type='checkbox'onChange={props.legbyes} onClick={props.legbyes} checked={props.tick3}></input></div>
            <div><h3>Wicket</h3>
            <input type='checkbox'onChange={props.wicket} onClick={props.wicket} checked={props.tick4}></input></div>
            </div>
          </div>
  )
}
