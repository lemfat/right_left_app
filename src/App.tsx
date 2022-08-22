import { useState } from 'react'

function App() {
  const [arr, setArr] = useState<string[]>([])

  const appendLeft = () => setArr(pre => [...pre, "left"])
  const appendRight = () => setArr(pre => [...pre, "right"])

  return (
    <div>
      <button
        className="btn gap-2 absolute bottom-4 left-4"
        onClick={appendLeft}
      >
        Left
      </button>
      <button
        className="btn gap-2 absolute bottom-4 right-4"
        onClick={appendRight}
      >
        Right
      </button>

      <div className="flex flex-col-reverse justify-center items-center">
        {arr.map((x, i) => (
          x === "left" ? (
            <div className="w-24 h-12 flex">
              <div className="w-12 h-12 bg-slate-400 border-gray-100 border"></div>
              <div className="w-12 h-12"></div>
            </div>
          ) : (
            <div className="w-24 h-12 flex">
              <div className="w-12 h-12"></div>
              <div className="w-12 h-12 bg-slate-400 border-gray-100 border"></div>
            </div>
          )
        ))}
      </div>
    </div>
  )
}

export default App
