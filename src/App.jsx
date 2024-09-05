import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
// import Home from './components/Home'
import Products from './components/Products'
import ProductDetail from './components/ProductDetail'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Header />
      <Routes>
        {/* <Route path='/'  element={<Home />} /> */}
        <Route path='/products'  element={<Products />} />
        <Route path='/products/:id' element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
