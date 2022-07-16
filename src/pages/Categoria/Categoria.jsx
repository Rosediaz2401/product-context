import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../../components/Header/Header'
import FadeLoader from 'react-spinners/FadeLoader'
import category from '../../assets/img/category.png'
import './categoria.css'

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
      <div className='main-container'>
        {loading
          ? <FadeLoader color='#000000' loading={loading} size={100} />
          : categoria.map((categoria) => (
            <div className='child' key={categoria.category}>
              <div className='category-card'>
                <img className='category-img' img src={category} alt='category' />
                <p>{` ${categoria} `}</p>
                <Link
                  className='btn btn-dark'
                  to={{
                    pathname: `categoria/${categoria}`
                  }}
                >See More
                </Link>
              </div>
            </div>
          ))}
      </div>

    </>
  )
}

export default Categoria
