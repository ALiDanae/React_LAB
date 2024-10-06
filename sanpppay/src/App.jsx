
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout'
import Contact from './components/contact'
import Contactlist from './components/contactlist'


function App() {



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Layout />} />
          <Route path="/contact" element={<Contact  />} />
          <Route path="/contacts" element={<Contactlist />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
