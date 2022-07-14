import { createContext, useState, useEffect, useContext } from 'react'
import axios from 'axios'

const ProductContext = createContext()

function ProductoProvider (props) {
  const [producto, setProducto] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedProduct, setSelectedProduct] = useState({})
  const [buscador, setBuscador] = useState('')
  const getProductos = async () => {
    const res = await axios.get('https://ecomerce-master.herokuapp.com/api/v1/item/')
    console.log('api', res.data)
    setProducto(res.data)
  }
  useEffect(() => {
    getProductos()
    setLoading(false)
  }, [])

  const value = {
    producto,
    selectedProduct,
    setSelectedProduct,
    loading,
    buscador,
    setBuscador
  }
  return (
    <ProductContext.Provider value={value} {...props} />
  )
}
const useProductContext = () => {
  const context = useContext(ProductContext)
  return context
}
export {
  ProductoProvider,
  useProductContext
}
