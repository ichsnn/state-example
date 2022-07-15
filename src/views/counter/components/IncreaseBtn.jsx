import React from 'react'
import CounterBtn from './CounterBtn'

const IncreaseBtn = ({handle}) => {
  console.log('increase')
  return (
    <CounterBtn label="+" handle={handle} />
  )
}

export default IncreaseBtn