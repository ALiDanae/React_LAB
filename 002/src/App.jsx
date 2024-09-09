
import { useState } from 'react'
import './App.css'
import Questions from './components/Question'

function App() {

  const [step, setstep] = useState(0)

  const [isCorrect, setCorrect] = useState(false)

  const [time , setTime] = useState(0)

  const [point, setpoint] = useState(0)

  const handelNext = () => {
    setstep(step + 1)
    setTime(0)
    setCorrect(false)
  }

  return (
    <>
      {step < 15 ?
        <>
          <h1>react questions</h1>
          <Questions step={step} setpoint={setpoint} time={time} setTime={setTime} isCorrect={isCorrect} setCorrect={setCorrect} />
          <div className='point'>
            <h1>{"your point : "+point}</h1>
            <button  onClick={handelNext}>next</button>
          </div>
        </> :
        <>
          <div style={{textAlign:"center"}}>
            <h1>{"your point is = " + point}</h1>
            <h2>thank you to play it 👋🏻 </h2>
          </div>
        </>
      }
    </>
  )
}

export default App
