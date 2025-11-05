import React from 'react'
import './App.css'
import Btn from './components/Btn'

function App() {
  return (
    <div>
      <h1 style={{ marginTop: 12 }}>Figma Buttons</h1>
      <div className="figma-preview">
        <div className="btn-wrapper">
          <Btn size="S">Btn</Btn>
          <Btn size="M">Btn</Btn>
        </div>
      </div>
    </div>
  )
}

export default App
