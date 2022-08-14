// 指定したHTMLの中身（主に属性とその値）を参照するためのフック
import React, { useRef } from 'react'

const Ref = () => {
  const reference = useRef(null)

  const handleRef = () => {
    console.log(reference) //{current: input}
    console.log(reference.current) // <input type="text">
  }

  return (
    <>
      <h1>useRef</h1>
      <input
        type="text"
        ref={reference}
      />
      <button onClick={handleRef}>inputタグを参照</button>
    </>
  )
}

export default Ref
