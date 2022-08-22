import { useState } from 'react'

function App() {
  const [arr, setArr] = useState<string[]>([])
  const [current, setCurrent] = useState<number>(0)

  const appendLeft = () => setArr(pre => [...pre, "left"])
  const appendRight = () => setArr(pre => [...pre, "right"])

  const updatePosition = (p: number) => {
    setCurrent(p)
  }
  const deletePanel = (p: number) => {
    setArr(pre => pre.filter((_, i) => i !== p))
  }

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
              <button
                className={`w-12 h-12 bg-slate-400 border-gray-100 border ${i === current && "bg-red-400"}`}
                onClick={() => updatePosition(i)}
              >
              </button>
              <button
                className={`w-12 h-12`}
                onClick={() => deletePanel(i)}
              >
              </button>
            </div>
          ) : (
            <div className="w-24 h-12 flex">
              <button
                className={`w-12 h-12`}
                onClick={() => deletePanel(i)}
              >
              </button>
              <button
                className={`w-12 h-12 bg-slate-400 border-gray-100 border ${i === current && "bg-red-400"}`}
                onClick={() => updatePosition(i)}
              ></button>
            </div>
          )
        ))}
      </div>
    </div>
  )
}

export default App
