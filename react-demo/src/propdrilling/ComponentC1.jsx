import React from 'react'

const ComponentC1 = ({name}) => {
  return (
    <div>
        <h3>Receiving props using props drilling method</h3>
        <h6>{name}</h6>
    </div>
  )
}

export default ComponentC1