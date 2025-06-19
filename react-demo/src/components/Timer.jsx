import React, { useEffect, useState, useRef } from 'react'

const Timer = () => {

  const [count,setCount] = useState(0);

  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(()=>{
        setCount(prevCount => prevCount +1)
    },1000)
    console.log(intervalRef);
    
    return () => {
        clearInterval(intervalRef.current)
    }
    
  })
    
  return (
    <div>
        <h1>Timer: {count}</h1>
        <button onClick={() => clearInterval(intervalRef.current)}>Stop Timer</button>
    </div>
  )
}

export default Timer