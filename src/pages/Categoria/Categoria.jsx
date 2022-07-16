import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../../components/Header/Header'
import FadeLoader from 'react-spinners/FadeLoader'

const Categoria = () => {
  const [categoria, setCategoria] = useState([])
  const [loading, setLoading] = useState(true)

  const getProductos = async () => {
    const res = await axios.get('https://ecomerce-master.herokuapp.com/api/v1/item/')
    const filterProducto = res.data.map((item) => item.category)
    const unique = [...new Set(filterProducto)]
    const mycategories = unique.filter(item => item)
    console.log(mycategories)
    setCategoria(mycategories)
  }
  useEffect(() => {
    setTimeout(() => {
      getProductos()
      setLoading(false)
    }, [2000])
  }, [])
  return (
    <>
      <Header />
      <div>
        {loading
          ? <FadeLoader color='#000000' loading={loading} size={100} />
          : categoria.map((categoria) => (
            <div key={categoria.category}>
              <p>{`Category: ${categoria} `}</p>
              <Link
                className='btn btn-dark'
                to={{
                  pathname: `categoria/${categoria}`
                }}
              >View Details
              </Link>
            </div>
          ))}
      </div>

    </>
  )
}

export default Categoria