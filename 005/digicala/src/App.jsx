import { useState } from 'react'
import './App.css'
import Filter from './components/Filter'
import Header from './components/Header'
import Products from './components/Products'

function App() {

  const [DATA , setData] = useState([])

  const [isLoding , setLoading] = useState(true)

  const [ cart , setCart] = useState([])

  const [sum , setSum] = useState(0)
  
  const getProducts = (link) => {
    fetch(link)
    .then(res => res.json())
    .then(items => setData(items))
    .finally(() => {setLoading(false)})
}
  
  return (
    <>
    <Header cart={cart} sum={sum} />
    <Filter getProducts={getProducts} />
    <Products DATA={DATA} getProducts={getProducts} isLoding={isLoding} setCart={setCart} setSum={setSum}/>
    </>
  )
}

export default App
