import React from 'react'
import CounterBtn from './CounterBtn'

const DecreaseBtn = ({handle}) => {
  console.log('decrease')
  return (
    <CounterBtn label="-" handle={handle} />
  )
}

export default DecreaseBtn