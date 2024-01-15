import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Mainlayout from './Layouts/MainLayout/Mainlayout'
import Homepage from './Pages/HomePage/Homepage'
import Addpage from './Pages/AddPage/Addpage'
import Detail from './Pages/Detail/Detail'
import BasketProvider from './context/BasketContext'
import Basketpage from './Pages/Basket/Basketpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Mainlayout />}>
            <Route index element={<Homepage />} />
            <Route path='/add' element={<Addpage />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/basket' element={<Basketpage />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
