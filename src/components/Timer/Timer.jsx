import React from 'react'
import { useState, useEffect } from 'react'
const Timer = ({duration}) => {
    const [time, setTime] = useState(duration)
    
  const [isActive, setIsActive] = useState(true);
    useEffect(() => {
       if(isActive && time) {
        setTimeout(() => {
            setTime(time - 1000)
        },1000)
       }
    },[time,isActive])

    const getFormattedTime = () => {
        let total_seconds = parseInt(Math.floor(time/1000));
        let total_minutes = parseInt(Math.floor(total_seconds/60));
        let total_hours = parseInt(Math.floor(total_minutes/60));
        let days = parseInt(Math.floor(total_hours/24));

        let seconds = parseInt(total_seconds % 60);
        let minutes = parseInt(total_minutes % 60);
        let hours = parseInt(total_hours % 24);
        

        return `${days}: ${hours}: ${minutes}: ${seconds}` ;
        
    }
    const toogleTime = () => {
        setIsActive(!isActive)
    }
  return (
    <div>
      <div>{getFormattedTime(time)}</div>
      <div className='button'><button onClick={toogleTime}>{isActive ? "Pause" : "Start"}</button></div>
    </div>
  )
}

export default Timer
