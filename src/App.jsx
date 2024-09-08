import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
// import Home from './components/Home'
import Products from './components/Products'
import ProductDetail from './components/ProductDetail'
import Navbar from './components/Navbar'
import AuthPage from './components/Authpage'
// import Home from './components/Home'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        {/* <Route path='/'  element={<Home />} /> */}
        <Route path='/'  element={<Products />} />
        <Route path='/products/:id' element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
