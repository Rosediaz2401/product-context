import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const ProductDetail = () => {
  const [producto, setProducto] = useState({})

  const getProductos = async () => {
    const res = await axios.get('https://ecomerce-master.herokuapp.com/api/v1/item/')
    const filterProducto = res.data.filter((item) => item._id === id)[0]
    console.log('+>>')
    console.log(filterProducto)
    setProducto(filterProducto)
    // setProducto(res.data)
  }

  useEffect(() => {
    getProductos()
    // setLoading(false)
  }, [])

  const validacionUrl = (url) => {
    if (typeof url !== 'string') {
      return false
    }
    // eslint-disable-next-line no-useless-escape
    return (url.match(/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gmi) !== null)
  }
  const { id } = useParams()
  return (
    <>
      <div>
        <img className='imagen' src={validacionUrl(producto.image) ? producto.image : validacionUrl(producto.images) ? producto.images : producto.images || 'https://cf.geekdo-images.com/camo/cba429883803dadea626df689cdbf3ddc0dc1bba/68747470733a2f2f692e696d6775722e636f6d2f456161485557462e6a7067'} alt='imagen producto' />
        <h1> {`${producto.product_name} `}</h1>
        <h3>{`SKU: ${producto.sku} `}</h3>
        <h3>{`Brand: ${producto.brand} `}</h3>
        <h3>{`Category: ${producto.category} `}</h3>
        <h4>{`Description: ${producto.description} `}</h4>
        <h2>{`Price: $ ${producto.price} `}</h2>
        <button>Buy now</button>
      </div>
    </>
  )
}

export default ProductDetail
