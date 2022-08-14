import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// type ContextType = {
//   name: string
//   age: number
// }

// const userInfo: ContextType = {
//   name: 'kotaro',
//   age: 21
// }

// export const UserContext = createContext(userInfo)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
