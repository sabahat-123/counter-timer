import {useState ,useEffect} from 'react';
function CounterTimer(){
    const[time , setTime] = useState(0);
    const[timeOn, setTimeOn] = useState(false);

    useEffect(()=>{
        let interval = null;
        if(timeOn){
            interval = setInterval(()=>{
                setTime((prevTime)=> prevTime + 10);
            },10);
        }else if(!timeOn){
            clearInterval(interval);
        }
        return ()=>clearInterval(interval);
    },[timeOn]);
    
  
    return (
    
      <div className='Timers'>
        <div id="display">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
        <div id="buttons">
        {!timeOn && time === 0 && (
          <button onClick={() =>setTimeOn(true)}>Start</button>
        )}
        {timeOn && <button onClick={() => setTimeOn(false)}>Stop</button>}
        {!timeOn && time > 0 && (
          <button onClick={() => setTime(0)}>Reset</button>
        )}
        {!timeOn && time > 0 && (
          <button onClick={() => setTimeOn(true)}>Restart</button>
        )}
        </div>
       </div>
      
    );

}
export default CounterTimer;