import { Routes, Route } from 'react-router-dom'
import ProductDetail from './components/ProductDetail/ProductDetail'
import Home from './pages/Home'

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<ProductDetail />} />
      </Routes>
    </>
  )
}

export default App
