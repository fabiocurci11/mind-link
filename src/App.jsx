import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AuthPage from './pages/AuthPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <AuthPage/>
    </>
  )
}

export default App
