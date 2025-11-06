import './App.css'
import Btn from './components/Btn'
import Pill from './components/Pill'
import Card from './components/Card'

function App() {
  return (
    <div>
      <h1 style={{ marginTop: 12 }}>Figma Buttons</h1>
      <div className="figma-preview">
        <div className="btn-wrapper">
          <Btn size="S">Btn</Btn>
          <Btn size="M">Btn</Btn>
          <Btn size="L">Btn</Btn>
        </div>
        <div style={{ marginLeft: 24 }}>
          <Pill label="Pill" />
        </div>
      </div>

      <section style={{ marginTop: 24, display: 'flex', justifyContent: 'center' }}>
        <Card title="Ocean Breeze" />
      </section>
    </div>
  )
}

export default App
