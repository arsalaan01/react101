import React from 'react'
import ComponentB1 from './ComponentB1'

const ComponentA1 = ({name}) => {
  return (
    <div>
        <ComponentB1 name={name} />
    </div>
  )
}

export default ComponentA1