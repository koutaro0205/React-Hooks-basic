import { useContext } from 'react'
import { UserContext } from './Hooks/ContextProvider'

const ContextConsumer: React.FC = () => {
  type ContextType = {
    name: string
    age: number
  }

  const userInfo: ContextType = useContext(UserContext) //受け取る側でも型を定義

  return (
    <div>
      <p>コンテキストから受け取ったユーザー情報：</p>
      <p>name: {userInfo.name}</p>
      <p>age: {userInfo.age}</p>
    </div>
  )
}

export default ContextConsumer
