import React, { useState } from 'react';

const BGChanger = () => {
  const [color,setColor] = useState('crimson');
  return (
    <>
     <div className="w-full h-screen duration-200" style={{backgroundColor:color}}></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className="outline-none rounded-full px-4 py-1 text-white shadow-lg" style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
          <button className="outline-none rounded-full px-4 py-1 text-white shadow-lg" style={{backgroundColor:"olive"}} onClick={()=>setColor("olive")}>Olive</button>
          <button className="outline-none rounded-full px-4 py-1 text-white shadow-lg" style={{backgroundColor:"purple"}} onClick={()=>setColor("purple")}>Purple</button>
          <button className="outline-none rounded-full px-4 py-1 text-white shadow-lg" style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
          <button className="outline-none rounded-full px-4 py-1 text-white shadow-lg" style={{backgroundColor:"white",color:"black"}} onClick={()=>setColor("white")}>Reset</button>
        </div>
      </div>
    </>
  )
}

export default BGChanger