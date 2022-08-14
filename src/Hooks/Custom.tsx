import React from 'react'
import useAdd from '../useAdd'

const Custom = () => {
  const { numA, numB, result, changeNumA, changeNumB } = useAdd()
  return (
    <>
      <h1>custom hook</h1>
      <input type='number' value={numA} onChange={changeNumA} />
      <input type='number' value={numB} onChange={changeNumB} />
      <p>{`result : ${result}`}</p>
    </>
  )
}

export default Custom
