import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
const Counter = () => {
    const [count, setCount]=useState(0);
    const [value, setValue]=useState('');
    const intervalRef=useRef(null);
    const[isRunning, setIsRunning]=useState(false);
    const[direction, setDirection]=useState('up');

    useEffect(()=>{
        if(isRunning){
        intervalRef.current=setInterval(()=>{
            setCount((prevCount)=>direction === 'up'?prevCount+1:prevCount-1);
            
        },1000);
       }  return () => clearInterval(intervalRef.current);
    },[isRunning, direction])


    const handleChange=(type)=>{
        
        const amount= Number(value);
        if(!isNaN(amount)){
            if(type==='+')
                {
                setCount(count+amount);
                setValue('');
            }
            else if(type==='-')
                {
                setCount(count-amount);
                setValue('');
            }
        }

    }
  return (
   <div className='counter-container'>
    <div className='container'>
        <h1 className='heading'>counter / Timer</h1>
        <h1 className='number'>{count}</h1>
        <div className='btn-container'>
        <button className='btn' onClick={()=>setCount(count-1)}>-</button> 
        <button className='btn' onClick={()=>setCount(count+1)}>+</button> 
        </div>
        <div className='btn-container'>
        <button className='btn' onClick={()=>setCount(count-2)}>-2</button> 
        <button className='btn' onClick={()=>setCount(count+2)}>+2</button> 
        </div>
        <div className='input-container'>
        <input type="number" className='input-space' value={value} placeholder='input any value' onChange={(e)=>setValue(e.target.value)} />
        <button className='input-btn' onClick={()=>handleChange('+')}>Add specific Amount</button> 
        <button className='input-btn' onClick={()=>handleChange('-')}>Subtract specific Amount</button> 
        </div>
        <div className='timer'>
            Timer:
        <button className='input-btn' onClick={()=>setIsRunning(!isRunning)}>{isRunning?'Stop Timer':'Start Timer'}</button>
          <button className='input-btn' onClick={() => setDirection((prev) => prev === 'up' ? 'down' : 'up')}>
        Switch to {direction === 'up' ? 'Countdown' : 'Count Up'}
      </button>
        </div>
      
        <button className='btn' onClick={() => setCount(0)}>Reset</button>
    </div>
</div>
  )
}

export default Counter