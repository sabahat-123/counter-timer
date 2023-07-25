import {useState ,useEffect} from 'react';
function CounterTimer(){
    const[time , setTime] = useState(0);
    const[timeOn, setTimeOn] = useState(false);

    useEffect(()=>{
        let interval = null;
        if(timeOn){
            interval = setInterval(()=>{
                setTime((prevTime)=> prevTime + 1);
            },1000);
        }else if(!timeOn){
            clearInterval(interval);
        }
        return ()=>clearInterval(interval);
    },[timeOn]);
    
  
    return (
    
      <div className='Timers'>
        <div id="display">
            <span>{("0" + Math.floor((time / 6000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 6000) % 60)).slice(-2)}:</span>
            <span>{("0" + ((time / 1) % 60)).slice(-2)}</span>
        </div>
        <div id="button">
            <button onClick={()=>setTimeOn(true)}>Start</button>
            <button onClick={()=>setTimeOn(false)}>Stop</button>
            <button onClick={()=>setTimeOn(true)}>Restart</button>
            <button onClick={() => setTime(0)}>Reset</button>
        </div>
       </div>
      
    );

}
export default CounterTimer;