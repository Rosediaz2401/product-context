import { Routes, Route } from 'react-router-dom'
import ProductDetail from './components/ProductDetail/ProductDetail'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<ProductDetail />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
