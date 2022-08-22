import { useState } from 'react'
import './App.css'

function App() {
  const [arr, setArr] = useState<string[]>([])

  const appendLeft = () => setArr(pre => [...pre, "left"])
  const appendRight = () => setArr(pre => [...pre, "right"])

  return (
    <div>

      <button onClick={appendLeft}>Left</button>
      <button onClick={appendRight}>Right</button>

      <div>
        {arr.map(x => (
          <p>{x}</p>
        ))}
      </div>
    </div>
  )
}

export default App
