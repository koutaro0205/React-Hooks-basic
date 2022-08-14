import React, { useState } from 'react'

const State = () => {
  const [count, setCount] = useState<number>(0)

  const handleCountUp = (): void => {
    setCount((prevCount) => prevCount + 1)
  }

  const handleCountDown = (): void => {
    setCount((prevCount) => prevCount - 1)
  }

  return (
    <>
      <h1>useState</h1>
      <p>{count}</p>
      <button onClick={handleCountUp}>CountUp</button>
      <button onClick={handleCountDown}>CountDown</button>
    </>
  )
}

export default State
