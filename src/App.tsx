import React, { useEffect } from 'react'
import './App.css'
import State from './Hooks/State'
import ContextProvider from './Hooks/ContextProvider'
import Ref from './Hooks/Ref'
import Reducer from './Hooks/Reducer'
import Memo from './Hooks/Memo'
import Callback from './Hooks/Callback'
import Custom from './Hooks/Custom'

function App() {

  // useEffect(() => { // 処理の発火のタイミングを決められる
  //   console.log('DOMがマウントされました')
  // }, []) // []とすることで、コンポーネントがマウントされた時に発火する。（依存配列）

  // useEffect(() => {
  //   console.log('カウントが更新されました')
  //   // setCount((prevCount) => prevCount - or + 1) としてしまうと、無限ループに陥る
  // }, [count]) // [count]とすることで、カウントの差分が検出された時に発火する。（依存配列）

  return (
    <div className="App">
      <State/>
      <hr />
      <ContextProvider/>
      <hr />
      <Ref/>
      <hr />
      <Reducer/>
      <hr />
      <Memo/>
      <hr />
      <Callback/>
      <hr />
      <Custom/>
    </div>
  )
}

export default App
