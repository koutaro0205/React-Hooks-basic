// useMemoとの違い：useMemo=値をメモ化、useCalback=関数をメモ化
import React, {useState, useCallback} from 'react'
import CallbackChild from '../CallbackChild'

const Callback = () => {
  const [count, setCount] = useState(0)

  const showCount = useCallback(() => {
    window.alert('これは重い処理です')
  }, [count])

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <>
      <h1>useCallback</h1>
      {showCount()}
      <CallbackChild showCount={showCount}/>
      <p>カウント: {count}</p>
      <button onClick={handleClick}>カウントを変化させる</button>
    </>
  )
}

export default Callback
