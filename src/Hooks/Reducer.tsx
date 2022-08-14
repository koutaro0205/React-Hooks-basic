import React, { useReducer } from 'react'

type Store = { count: number }
type ActionType =
    | { type: "increment" }
    | { type: "decrement" }
    | { type: "reset" }

const reducer = (state: Store, action: ActionType) => {
  switch(action.type){
    case "increment":
      return { count: state.count + 1 }
    case "decrement":
      return { count: state.count - 1 }
    case "reset":
      return { count: state.count = 0 }
    default:
      return state
  }
}

const Reducer = () => {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState)
  // ボタンクリックでaction（状態を変えようとするもの）が生成される
  // dispatch = イベントハンドラ。生成されたactionをstore(この中にreducerがある)に通知（dispatch）する
  // 通知されたactionと同時にstateもreducerの中に入る
  // reducerの中で現在の状態が変更されて
  // UIに反映
  return (
    <>
      <h1>useReducer</h1>
      <p>{state.count}</p>
      <button onClick={() => dispatch({type: "increment"})}>＋</button>
      <button onClick={() => dispatch({type: "decrement"})}>ー</button>
      <button onClick={() => dispatch({type: "reset"})}>リセット</button>
    </>
  )
}

export default Reducer
