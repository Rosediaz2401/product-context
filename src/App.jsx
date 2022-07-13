import { Routes, Route } from 'react-router-dom'
import Categoria from './pages/Categorias/Categoria'
import Home from './pages/Home'

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Categoria />} />
      </Routes>
    </>
  )
}

export default App
