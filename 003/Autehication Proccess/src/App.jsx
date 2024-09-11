import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const nameInput = useRef("")

  const phoneInput = useRef("")

  const OTPInput = useRef("")

  const [name, setname] = useState("")

  const [step, setStep] = useState(1)

  const OTP = 1151515

  const handelClick = () => {

    setname(nameInput.current.value)
    setStep(2)
    console.log(OTP);
  }

  const handelSub = () => {
    if (OTPInput.current.value == OTP) {
      setStep(3)
    }
  }



  return (
    <>
      <header>
        <span>{(!name) ? <h1>ثبت نام کنید</h1> : <h2>{name}</h2>}</span>
        <h1>mobile.com</h1>
      </header>
      {step == 1 && <div className='loginForm'>
        <br />
        <label>نام و نام خانوادگی</label>
        <br />
        <input ref={nameInput} />
        <br /><br />
        <label>شماره تلفن</label>
        <br />
        <input ref={phoneInput} />
        <br /><br />
        <input type='submit' value="ثبت نام" onClick={handelClick} />
      </div>}
      {step == 2 && <div className='loginForm'>
        <h1>{phoneInput.current.value} :شماره تلفن </h1>
        <input ref={OTPInput} />
        <input type='submit' value="ثبت کد" onClick={handelSub} />
      </div>}
      {
        step == 3 && <div className='loginForm'>
          <br/><br/><br/>
          <h1>{name} خوش امدی</h1>
        </div>
      }
    </>
  )
}

export default App
