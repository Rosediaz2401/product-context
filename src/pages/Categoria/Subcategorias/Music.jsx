import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../../../components/Header/Header'
import FadeLoader from 'react-spinners/FadeLoader'

const Music = () => {
  const [kidscat, setKidscat] = useState([])
  const [loading, setLoading] = useState(true)

  const getProductos = async () => {
    const res = await axios.get('https://ecomerce-master.herokuapp.com/api/v1/item/')
    const filterKids = res.data.filter((item) => item.category === music)
    console.log(filterKids)
    setKidscat(filterKids)
  }
  useEffect(() => {
    setTimeout(() => {
      getProductos()
      setLoading(false)
    }, [2000])
  }, [])
  const validacionUrl = (url) => {
    if (typeof url !== 'string') {
      return false
    }
    // eslint-disable-next-line no-useless-escape
    return (url.match(/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gmi) !== null)
  }

  const { music } = useParams()
  return (
    <>
      <Header />
      <div className='main-container'>
        {loading
          ? <FadeLoader color='#000000' loading={loading} size={100} />
          : kidscat.map((item) => (
            <div className='app-header' key={item._id}>
              <div className='child'>
                <div className='card'>
                  <img className='imagen' src={validacionUrl(item.image) ? item.image : validacionUrl(item.images) ? item.images : item.images || 'https://cf.geekdo-images.com/camo/cba429883803dadea626df689cdbf3ddc0dc1bba/68747470733a2f2f692e696d6775722e636f6d2f456161485557462e6a7067'} alt='' />
                  <p> {`${item.product_name} `}</p>
                  <p>{`Brand: ${item.brand} `}</p>
                  <p>{`Price: $ ${item.price} `}</p>
                  <Link
                    className='btn btn-dark'
                    to={{
                      pathname: `/${item._id}`
                    }}
                  >View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  )
}

export default Music
