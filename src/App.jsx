import MainScore from './components/MainScore'
import Navbar from "./components/Navbar"
import Score from "./components/Score"
import ThisOver from './components/ThisOver'
import Buttons from './components/Buttons'
import Startmatch  from './components/Startmatch'
import Scorecard from './components/Scorecard'
import background from './components/Background.jpg'
import { v4 as uuidv4 } from 'uuid';
import {useState , useEffect} from 'react'
import {
  createBrowserRouter,
  RouterProvider, Link
} from "react-router-dom";

function App() {
 const [totalruns, setTotalruns] = useState(0)
 const [player1runs, setPlayer1runs] = useState(0)
 const [player1hist, setPlayer1hist] = useState([0])
 const [player2hist, setPlayer2hist] = useState([0])
 const [player2runs, setPlayer2runs] = useState(0)
 const [player1sixs, setPlayer1sixs] = useState(0)
 const [player1fours, setPlayer1fours] = useState(0)
 const [player1balls, setPlayer1balls] = useState(0)
 const [player1sr, setPlayer1sr] = useState(0)
 const [player2sixs, setPlayer2sixs] = useState(0)
 const [player2fours, setPlayer2fours] = useState(0)
 const [player2balls, setPlayer2balls] = useState(0)
 const [player2sr, setPlayer2sr] = useState(0)
 const [balls, setBalls] = useState(0)
 const [wickets, setWickets] = useState([0])
 const [history, setHistory] = useState([0]);//runs history 
 const [divs, setDivs] = useState([])
 const [tick1, setTick1] = useState(false)
 const [tick2, setTick2] = useState(false)
 const [tick3, setTick3] = useState(false)
 const [tick4, setTick4] = useState(false)
 const [storetick, setstoreTick] = useState([])
 const [storage, setStorage] = useState([false])
 const [swaptf, setSwaptf] = useState(true)
 const [playertf, setPlayertf] = useState([true])
 const [overballs, setOverballs] = useState(0) //this is use to show main over balls
 const [over, setOver] = useState(0)   // this use to show main over
 const [overtf, setOvertf] = useState(true)
 const [whitebg1, setWhitebg1] = useState("bg-white")
 const [whitebg2, setWhitebg2] = useState("")
 const [unique, setUnique] = useState([])
 const [bowlerruns, setBowlerruns] = useState(0)
 const [bowlerwickets, setbowlerwickets] = useState(0)
 const [bowlermaiden, setBowlermaiden] = useState(0)
 const [batteam, setBatteam] = useState("")
 const [bowlteam, setBowlteam] = useState()
 const [finover, setFinover] = useState()
 const [bat1, setBat1] = useState()
 const [bat2, setBat2] = useState()
 const [bowl, setBowl] = useState()
 const [bat1hist, setBat1hist] = useState([])
 const [bat1hist2nd, setBat1hist2nd] = useState([])
 const [bat2hist, setBat2hist] = useState([])
 const [bat2hist2nd, setBat2hist2nd] = useState([])
 const [bowlerhist, setBowlerhist] = useState([])
 const [bowlerhist2nd, setBowlerhist2nd] = useState([])
 const [bowlerballs, setBowlerballs] = useState(0)
 const [bowlerchange, setBowlerchange] = useState()
 const [bat1change, setBat1change] = useState()
 const [bat2change, setBat2change] = useState()
 const [newplayertf, setNewplayertf] = useState([false])
 const [netrunrate, setNetrunrate] = useState()
 const [inning, setInning] = useState("1st INNING")
 const [inningtf, setInningtf] = useState(true)

 const secondinning =()=>{
  setInning("2nd INNING") ; setInningtf(false)

   setTotalruns(0)
   setPlayer1runs(0)
   setPlayer1hist([0])
   setPlayer2hist([0])
   setPlayer2runs(0)
   setPlayer1sixs(0)
   setPlayer1fours(0)
   setPlayer1balls(0)
   setPlayer1sr(0)
   setPlayer2sixs(0)
   setPlayer2fours(0)
   setPlayer2balls(0)
   setPlayer2sr(0)
   setBalls(0)
   setWickets([0])
   setHistory([0]);//runs history 
   setDivs([])
   setTick1(false)
   setTick2(false)
   setTick3(false)
   setTick4(false)
   setstoreTick([])
   setStorage([false])
   setSwaptf(true)
   setPlayertf([true])
   setOverballs(0) //this is use to show main over balls
   setOver(0)   // this use to show main over
   setOvertf(true)
   setWhitebg1("bg-white")
   setWhitebg2("")
   setUnique([])
   setBowlerruns(0)
   setbowlerwickets(0)
   setBowlermaiden(0)
   setBatteam("")
   setBowlteam()
   setFinover()
   setBat1()
   setBat2()
   setBowl()
   setBowlerballs(0)
   setBowlerchange()
   setBat1change()
   setBat2change()
   setNewplayertf([false])
   setNetrunrate()
  }

useEffect( ()=>{ if(over!==0) {setNetrunrate(totalruns/over)}} , [balls])

useEffect(() => {
  if( balls === 0){setOverballs(0); setOver(0)}
  else{
  if (balls%6 === 0 && overtf === true) { setOver(over + 1)
    setOverballs(0)}
  else {setOverballs(balls%6)}  }  },[balls])  

useEffect(() => {
  if (player1runs === 0) {
    setPlayer1sr(0)
  }else setPlayer1sr(player1runs/player1balls*100)
} )
useEffect(() => {
  if (player2runs === 0) {
    setPlayer2sr(0)
  }else setPlayer2sr(player2runs/player2balls*100)
 } )
 useEffect(() => { if(overtf === true) { setBowlerruns(bowlerruns+ history[history.length - 1]) }
   
   if(balls!==0){if(balls%6 === 0 && bowlerruns===0 ){setBowlermaiden(1)}}
 }, [balls])

 useEffect(() => {  if(bowlerballs===6 && bowlerballs!==0 && inningtf===true){setBowlerhist([...bowlerhist , {name:bowl, maiden:bowlermaiden , runs:(bowlerruns + history[history.length-1])  , wickets:bowlerwickets, balls:bowlerballs}]) 

  setBowlerchange(<div className='bg-blue-300 my-3 justify-center w-3/4'><h1 className='font-bold'>Add New Bowler</h1> <input type='text' className='w-3/4' onChange={change6}></input><button className='bg-slate-800 text-white rounded-md hover-bold' onClick={changebowler}>Add</button></div>) ; setNewplayertf([...newplayertf , true])}

  if(bowlerballs===6 && bowlerballs!==0 && inningtf===false){setBowlerhist2nd([...bowlerhist2nd , {name:bowl, maiden:bowlermaiden , runs:(bowlerruns + history[history.length-1])  , wickets:bowlerwickets, balls:bowlerballs}]) 
  
    setBowlerchange(<div className='bg-blue-300 my-3 justify-center w-3/4'><h1 className='font-bold'>Add New Bowler</h1> <input type='text' className='w-3/4' onChange={change6}></input><button className='bg-slate-800 text-white rounded-md hover-bold' onClick={changebowler}>Add</button></div>) ; setNewplayertf([...newplayertf , true])}
}, [bowlerballs])
 
 const deletelastbatblue =()=>{setBat1hist(bat1hist.slice(0 , -1))}
 const deletelastbatwhite =()=>{setBat2hist(bat2hist.slice(0 , -1))}
 const deletelastbowler =()=>{setBowlerhist(bowlerhist.slice(0 , -1))}

 const deletelastbatblue2nd =()=>{setBat1hist2nd(bat1hist2nd.slice(0 , -1))}
 const deletelastbatwhite2nd =()=>{setBat2hist2nd(bat2hist2nd.slice(0 , -1))}
 const deletelastbowler2nd =()=>{setBowlerhist2nd(bowlerhist2nd.slice(0 , -1))}

 const swap = ()=>{
setSwaptf(!swaptf)
if(swaptf === false){setWhitebg1("bg-white")} else{setWhitebg1("")}
if(swaptf === true){setWhitebg2("bg-white")} else{setWhitebg2("")   }

 } 
 const zero = ()=>{ setBowlerballs(bowlerballs+0.1)
        setTotalruns(totalruns+0)
        setHistory([...history, 0]);
        setBalls(balls+1)
        setDivs([...divs, <button key={uuidv4()} className="w-10 h-10 bg-red-600 text-white rounded-full font-bold">0</button>]);
        setstoreTick([...storetick, false])
        setTick1(false)
        setTick2(false)
        setTick3(false)
        setTick4(false)
        setStorage([...storage , false])
        if (swaptf === true) {
          setPlayer1runs(player1runs+0)
          setPlayer1hist([...player1hist,0])
          setPlayer1balls(player1balls+1)
          setPlayertf([...playertf ,true])  
          }
          else{
          setPlayer2runs(player2runs+0)  
          setPlayer2hist([...player2hist,0])
          setPlayer2balls(player2balls+1)
          setPlayertf([...playertf ,false]) } ; setOvertf(true) ; setBowlerballs(bowlerballs+1) ; setNewplayertf([...newplayertf , false])
      }
      
 const one = ()=>{ 
       setTotalruns(totalruns+1)
       setHistory([...history, 1]);
       setBalls(balls+1)
       setDivs([...divs, <button key={uuidv4()} className="w-10 h-10 bg-red-800 text-white rounded-full font-bold">1</button>]);
       setstoreTick([...storetick, false])
       setTick1(false)
       setTick2(false)
       setTick3(false)
       setTick4(false)
       setStorage([...storage , false])
       if (swaptf === true) {
        setPlayer1runs(player1runs+1)
        setPlayer1hist([...player1hist,1])
        setPlayer1balls(player1balls+1)
        setPlayertf([...playertf ,true])
        }
        else{
        setPlayer2runs(player2runs+1)  
        setPlayer2hist([...player2hist,1])
        setPlayer2balls(player2balls+1)
        setPlayertf([...playertf ,false])
        }  setOvertf(true)  ; setBowlerballs(bowlerballs+1) ;setNewplayertf([...newplayertf , false])
        }

const two = ()=>{ 
  setTotalruns(totalruns+2)
  setHistory([...history, 2]);
       setBalls(balls+1)
       setDivs([...divs, <button key={uuidv4()} className="w-10 h-10 bg-orange-500 text-white rounded-full font-bold">2</button>]);
       setstoreTick([...storetick, false])
       setTick1(false)
       setTick2(false)
       setTick3(false)
       setTick4(false)
       setStorage([...storage , false])
       if (swaptf === true) {
        setPlayer1runs(player1runs+2)
        setPlayer1hist([...player1hist,2])
        setPlayer1balls(player1balls+1)
        setPlayertf([...playertf ,true]) 
        }
        else{
        setPlayer2runs(player2runs+2)  
        setPlayer2hist([...player2hist,2])
        setPlayer2balls(player2balls+1)
        setPlayertf([...playertf ,false])
        }  setOvertf(true)  ; setBowlerballs(bowlerballs+1) ; setNewplayertf([...newplayertf , false])
        }
  const three = ()=>{
  setTotalruns(totalruns+3)
  setHistory([...history, 3]);
       setBalls(balls+1)
       setDivs([...divs, <button key={uuidv4()} className="w-10 h-10 bg-yellow-500 text-white rounded-full font-bold">3</button>]);
       setstoreTick([...storetick, false])
       setTick1(false)
       setTick2(false)
       setTick3(false)
       setTick4(false)
       setStorage([...storage , false]) 
       if (swaptf === true) {
        setPlayer1runs(player1runs+3)
        setPlayer1hist([...player1hist,3])
        setPlayer1balls(player1balls+1)
        setPlayertf([...playertf ,true]) 
        }
        else{
        setPlayer2runs(player2runs+3)  
        setPlayer2hist([...player2hist,3])
        setPlayer2balls(player2balls+1)
        setPlayertf([...playertf ,false])
        }  setOvertf(true) ; setBowlerballs(bowlerballs+1) ; setNewplayertf([...newplayertf , false])
      }
 const four = ()=>{
  setTotalruns(totalruns+4)
  setHistory([...history, 4]);
       setBalls(balls+1)
       setDivs([...divs, <button key={uuidv4()} className="w-10 h-10 bg-green-600 text-white rounded-full font-bold">4</button>]);
       setstoreTick([...storetick, false])
       setTick1(false)
       setTick2(false)
       setTick3(false)
       setTick4(false)
       setStorage([...storage , false])
       if (swaptf === true) {
        setPlayer1runs(player1runs+4)
        setPlayer1hist([...player1hist,4])
        setPlayer1fours(player1fours+1)
        setPlayer1balls(player1balls+1)
        setPlayertf([...playertf ,true])
        }
        else{
        setPlayer2runs(player2runs+4)  
        setPlayer2hist([...player2hist,4])
        setPlayer2fours(player2fours+1)
        setPlayer2balls(player2balls+1)
        setPlayertf([...playertf ,false])

        }   setOvertf(true) ; setBowlerballs(bowlerballs+1) ;setNewplayertf([...newplayertf , false])
        }
const five = ()=>{
  setTotalruns(totalruns+5)
  setHistory([...history, 5]);
       setBalls(balls+1)
       setDivs([...divs, <button key={uuidv4()} className="w-10 h-10 bg-green-800 text-white rounded-full font-bold">5</button>]);
       setstoreTick([...storetick, false])
       setTick1(false)
       setTick2(false)
       setTick3(false)
       setTick4(false)
       setStorage([...storage , false])
       if (swaptf === true) {
        setPlayer1runs(player1runs+5)
        setPlayer1hist([...player1hist,5])
        setPlayer1balls(player1balls+1)
        setPlayertf([...playertf ,true]) 
        }
        else{
        setPlayer2runs(player2runs+5)  
        setPlayer2hist([...player2hist,5])
        setPlayer2balls(player2balls+1)
        setPlayertf([...playertf ,false])
        }  setOvertf(true)  ; setBowlerballs(bowlerballs+1) ;setNewplayertf([...newplayertf , false])
        }
const six = ()=>{
  setTotalruns(totalruns+6)
  setHistory([...history, 6]);
       setBalls(balls+1)
       setDivs([...divs, <button key={uuidv4()} className="w-10 h-10 bg-blue-600 text-white rounded-full font-bold">6</button>]);
       setstoreTick([...storetick, false])
       setTick1(false)
       setTick2(false)
       setTick3(false)
       setTick4(false)
       setStorage([...storage , false])
       if (swaptf === true) {
        setPlayer1runs(player1runs+6)
        setPlayer1hist([...player1hist,6]) 
        setPlayer1sixs(player1sixs+1)
        setPlayer1balls(player1balls+1)
        setPlayertf([...playertf ,true]) 
        }
        else{
        setPlayer2runs(player2runs+6)  
        setPlayer2hist([...player2hist,6])
        setPlayer2sixs(player2sixs+1)
        setPlayer2balls(player2balls+1)
        setPlayertf([...playertf ,false]) 
         } 
       setOvertf(true) ; setBowlerballs(bowlerballs+1) ;setNewplayertf([...newplayertf , false]) }
const wide =()=>{         
  setTick1(true)
  setstoreTick([...storetick, true])
  setTotalruns(totalruns+1)
 setTick1 && (setDivs([...divs, <button key={uuidv4()} className="w-10 h-10 bg-slate-800 text-white rounded-full font-bold">wd</button>]))
  setHistory([...history, 1])
  setStorage([...storage , false]) ; setBowlerruns(bowlerruns+1) ; setNewplayertf([...newplayertf , false])}
            
const noball =()=>{
  setTick2(true)
  setstoreTick([...storetick, true])
  setTotalruns(totalruns+1)
 setTick2 && (setDivs([...divs, <button key={uuidv4()} className="w-10 h-10 bg-slate-800 text-white rounded-full font-bold">nb</button>]))
  setHistory([...history, 1])
  setStorage([...storage , false]) ; setBowlerruns(bowlerruns + 1) ; setNewplayertf([...newplayertf , false])}      
const legbyes =()=>{
  setNewplayertf([...newplayertf , false])
  setTick3(true)
  setstoreTick([...storetick, true])
 setTick3 && (setDivs([...divs, <button key={uuidv4()} className="w-10 h-10 bg-slate-800 text-white rounded-full font-bold">lb</button>]))
        setHistory([...history, 0])
         setStorage([...storage , false]) ; setNewplayertf([...newplayertf , false])}      
const wicket =()=>{ setStorage([...storage , true])
         setTick4(true) ; setNewplayertf([...newplayertf , false])
         setstoreTick([...storetick, true])
         setTick4 && (setDivs([...divs, <button key={uuidv4()} className="w-10 h-10 bg-slate-800 text-white rounded-full font-bold">W</button>]))
         setHistory([...history, 0])
         setWickets([...wickets , wickets[wickets.length - 1] + 1 ])
         if(inningtf === true){
         if(swaptf===true)
         {setBat1hist([...bat1hist , {name:bat1  ,runs: player1runs , totalballs:balls  ,balls: player1balls , fours:player1fours , sixs:player1sixs , sr:player1sr}]) ; setNewplayertf([...newplayertf , true])
         }
         else{
         setBat2hist([...bat2hist , { name:bat2 ,runs: player2runs ,totalballs:balls, balls: player2balls , fours:player2fours , sixs:player2sixs , sr:player2sr}]) ;setNewplayertf([...newplayertf , true])
         } }
         
         if(inningtf === false){
         if(swaptf===true)
          {setBat1hist2nd([...bat1hist , {name:bat1  ,runs: player1runs , totalballs:balls  ,balls: player1balls , fours:player1fours , sixs:player1sixs , sr:player1sr}]) ; setNewplayertf([...newplayertf , true])
          }
          else{
          setBat2hist2nd([...bat2hist , { name:bat2 ,runs: player2runs ,totalballs:balls, balls: player2balls , fours:player2fours , sixs:player2sixs , sr:player2sr}]) ;setNewplayertf([...newplayertf , true])
          } }


         setbowlerwickets(bowlerwickets + 1)
         if(swaptf===true){
         setBat1change(<div className='bg-blue-300 my-3 justify-center w-3/4'><h1 className='font-bold'>Add New BatsMan</h1> <input type='text' className='w-3/4' onChange={change4}></input><button className='bg-slate-800 text-white rounded-md hover-bold' onClick={changebat1}>Add</button></div>)}
         else{
         setBat2change(<div className='bg-blue-300 my-3 justify-center w-3/4'><h1 className='font-bold'>Add New BatsMan</h1> <input type='text' className='w-3/4' onChange={change5}></input><button className='bg-slate-800 text-white rounded-md hover-bold' onClick={changebat2}>Add</button></div>)}
}

const undo = ()=>{  if(newplayertf[newplayertf.length-1] === true){alert('if you have to remove new player :- give him wicket with 0 runs or 6 zero balls and delete from scorecard') ; setNewplayertf([newplayertf[newplayertf.length-1]])}
  
  if(newplayertf[newplayertf.length-1]===false){
  setNewplayertf(newplayertf.slice(0 , -1))  
  setDivs(divs.slice(0, -1))
 if(totalruns !== 0) {const lastNumber = history[history.length - 1];
  setTotalruns(totalruns - lastNumber);
  setHistory(history.slice(0, -1));}
  const lasttick = storetick[storetick.length - 1];
  if (lasttick === false) {
    setBalls(balls-1)  ; setBowlerballs(bowlerballs -1)}
  if (storage[storage.length - 1] === true ) {
    setWickets(wickets.slice(0 , -1)) ; setbowlerwickets(bowlerwickets - 1);
   } 
   setStorage(storage.slice(0 , -1))
    if(lasttick === false){if(player1hist[player1hist.length - 1] === 4){setPlayer1fours(player1fours-1)}
    if(player2hist[player2hist.length - 1] === 4){setPlayer2fours(player2fours-1)}
    if(player1hist[player1hist.length - 1] === 6){setPlayer1sixs(player1sixs-1)}
    if(player2hist[player2hist.length - 1] === 6){setPlayer2sixs(player2sixs-1)}}
 
   if (storetick[storetick.length - 1] === false) {
    if (playertf[playertf.length-1] == true) {
      setPlayer1balls(player1balls-1)
      setPlayer1runs(player1runs - player1hist[player1hist.length -1])
      setPlayer1hist(player1hist.slice(0 , -1))
      setPlayertf(playertf.slice(0 , -1))
    } 
    else{
      setPlayer2balls(player2balls-1)
      setPlayer2runs(player2runs - player2hist[player2hist.length -1])
      setPlayer2hist(player2hist.slice(0 , -1))
      setPlayertf(playertf.slice(0 , -1))
      } }
    setstoreTick(storetick.slice(0 , -1))
    setOvertf(false) ;   setBowlerruns(bowlerruns - history[history.length - 1])

   if(balls!== 0) {if(balls%6 === 0) {setOver(over-1)}}
   if(bowlerballs<=6){setBowlermaiden(0)} }
}  
   
      
     
      
    const change1 = (e)=>{setBatteam(e.target.value) }
    const change2 = (e)=>{setBowlteam(e.target.value)}
    const change3 = (e)=>{setFinover(e.target.value)}
    const change4 = (e)=>{setBat1(e.target.value)}
    const change5 = (e)=>{setBat2(e.target.value)}
    const change6 = (e)=>{setBowl(e.target.value)}
    const changebowler = ()=>{setBowlerchange() ; setBowlerballs(0) ; setBowlermaiden(0) ; setBowlerruns(0) ; setbowlerwickets(0) ; setDivs([])}
    const changebat1 =()=>{setPlayer1balls(0) ; setPlayer1fours(0) ; setPlayer1runs(0) ; setPlayer1sixs(0) ; setPlayer1sr(0) ; setBat1change()}
    const changebat2 =()=>{setPlayer2balls(0) ; setPlayer2fours(0) ; setPlayer2runs(0) ; setPlayer2sixs(0) ; setPlayer2sr(0); setBat2change()}
  
    const router = createBrowserRouter([
      {
        path: "/",
        element:<><Navbar/> <Startmatch batteam={batteam} change1={change1} change2={change2} change3={change3} change4={change4} change5={change5} change6={change6}  /></>
      },

      { path: "/livematch" , element: <><Navbar/>   <MainScore inning={inning} netrunrate={netrunrate} batteam={batteam} bowlteam={bowlteam} finover={finover} totalruns = {totalruns} balls={balls} wickets={wickets[wickets.length - 1]} over={over} overballs={overballs}/>
        <Score bat1={bat1} bat2={bat2} bowl={bowl} player1runs={player1runs} player2runs={player2runs} player1balls={player1balls} player2balls={player2balls} player1fours={player1fours} player2fours={player2fours} player1sixs={player1sixs} player2sixs={player2sixs} player1sr={player1sr} player2sr={player2sr} whitebg1={whitebg1} whitebg2={whitebg2} bowlerruns={bowlerruns} bowlerwickets={bowlerwickets}  bowlermaiden={bowlermaiden} bowlerballs={bowlerballs}/>
        <ThisOver  divs={divs} wide={wide} noball={noball} legbyes={legbyes} wicket={wicket} tick1={tick1}  tick2 = {tick2} tick3={tick3} tick4={tick4}  /> 
        <Buttons zero={zero}  one={one}  two={two}  three={three}  four={four}  five={five}  six={six} balls={balls} undo={undo} swap={swap} bowlerchange={bowlerchange} bat1change={bat1change} bat2change={bat2change} secondinning={secondinning} /> 
        </>
      },
     
      {
        path:"/scorecard",
        element:<><Navbar/> <Scorecard deletelastbowler={deletelastbowler} bowlerhist={bowlerhist} bat1hist={bat1hist} bat2hist={bat2hist} deletelastbatblue={deletelastbatblue} deletelastbatwhite={deletelastbatwhite}
        
        deletelastbowler2nd={deletelastbowler2nd} bowlerhist2nd={bowlerhist2nd} bat1hist2nd={bat1hist2nd} bat2hist2nd={bat2hist2nd} deletelastbatblue2nd={deletelastbatblue2nd} deletelastbatwhite2nd={deletelastbatwhite2nd}/></>
      } 
    ])

  return (
    <>
     <RouterProvider router={router} />
     </>
  )
  }

export default App
