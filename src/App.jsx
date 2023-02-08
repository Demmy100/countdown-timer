import './App.css'
import Timer from './components/Timer/Timer'

function App() {


  return (
    <div className="App">
     <Timer duration={4 * 24 * 60 * 60 * 1000}/>
    </div>
  )
}

export default App
