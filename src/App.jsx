import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Main from "./components/Main.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="grid">
          <Header/>
          <div className="row">
              <Sidebar/>
              <Main/>
          </div>
      </div>
  )
}

export default App
