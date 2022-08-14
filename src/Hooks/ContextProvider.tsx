import React, { createContext } from 'react'
import ContextConsumer from '../ContextConsumer'

type ContextType = {
  name: string
  age: number
}

const defaultInfo: ContextType = { // コンテキストの初期値（変数）
  name: 'default',
  age: 1
}

export const UserContext = createContext<ContextType>(defaultInfo) // コンテキストの初期値を設定

const ContextProvider = () => {

  const userInfo: ContextType = { // グローバルに共有するデータ
    name: 'kotaro',
    age: 21
  }

  return (
    <>
      <h1>useContext</h1>
      <UserContext.Provider value={userInfo}>
        {/* value で任意の値をプロバイド（指定しない場合、初期値が渡る） */}
        <ContextConsumer/>
      </UserContext.Provider>
    </>
  )
}

export default ContextProvider
