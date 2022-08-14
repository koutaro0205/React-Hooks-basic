// メモ化（ブラウザのキャッシュに値を保存（保持）しておいて使い回すためのフック）
import React, { useMemo, useState } from 'react'

const Memo = () => {
  const [count01, setCount01] = useState(0)
  const [count02, setCount02] = useState(0)

  // const square = () => { //レンダリングされるたび（ステイトの更新毎に）に実行
  //   let sum: number = 0
  //   console.log('レンダリングが生じ、square関数が実行されました')
  //   for(let i = 0; i < 20; i++){ // 重めの処理が挟まれる（結果が表示されるまでに若干のラグを生じさる）
  //     sum += i
  //   }
  //   return count02 * count02 //更新されたステイトの情報をもとに計算し直される
  //   // ここで問題なのは、関係のないはずの「count01」の状態が変更された場合でもレンダリングが走ること
  // }

  // -------------------------------------------------------- //

  // 以上のような問題から、、
  //useMemoでメモ化しておきたい関数全体をラップしておく
  // これによって一連の処理はメモ化され、関係のない変数の変化によるレンダリングを避けることができる
  const square = useMemo(() => {
    let sum: number = 0
    console.log('レンダリングが生じ、square関数が実行されました')
    for(let i = 0; i < 20; i++){
      sum += i
    }
    return count02 * count02
  }, [count02]) // 依存配列（ここの中に指定された変数が変化した時にだけ実行する）


  return (
    <>
      <h1>useMemo</h1>
      <p>カウント01: {count01}</p>
      <p>カウント02: {count02}</p>
      <p>結果: {square}</p>
      <button onClick={() => setCount01((prevCount) => prevCount + 1)}>ボタン01</button>
      <button onClick={() => setCount02((prevCount) => prevCount + 1)}>ボタン02</button>
    </>
  )
}

export default Memo
