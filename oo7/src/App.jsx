import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useForm } from 'react-hook-form'

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [data, setData] = useState([]);

  const onSubmit = (data) => {
    setData(prev => [...prev, JSON.stringify(data)])
  }

  console.log(data);


  return (
    <>



      <div className='form'>
        <h2>
          React Hook Form (مدرک زبان)
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
        >
          <label for="cars">نوع مدرک : </label>
          <select name="cars" id="cars">
            <option value="IELTS">IELTS</option>
            <option value="TOFEL">TOFEL</option>
            <option value="DUOLINGO">DUOLINGO</option>
            <option value="PTE">PTE</option>
          </select>
          <input

            placeholder=""
            {...register("name")}
          />
          <input

            placeholder=""
            {...register("phoneNumber")}
          />
          <input

            placeholder=""
            {...register("email", {
              pattern: {
                value: /^.*@gmail.com$/,
                message: 'Email must end with FrontEndi.com'
              }
            })}
          />
          {errors && <p>{errors?.email?.message}</p>}
          <button

            type='submit'
          >
            <span>
              Submit
            </span>
          </button>
        </form>
        <div >
          <p> Data: </p>

          <h3>{...data}</h3>
        </div>
      </div>


    </>
  )
}

export default App
