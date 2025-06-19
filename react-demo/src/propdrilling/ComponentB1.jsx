import React from 'react'
import ComponentC1 from './ComponentC1'

const ComponentB1 = ({name}) => {
  return (
    <div><ComponentC1 name = {name} /></div>
  )
}

export default ComponentB1