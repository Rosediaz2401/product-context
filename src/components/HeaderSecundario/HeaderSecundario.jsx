import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import logo from '../../assets/img/logo.png'

const HeaderSecundario = () => {
  const [producto, setProducto] = useState([])
  const [buscador, setBuscador] = useState('')

  const getProductos = async () => {
    const res = await axios.get('https://ecomerce-master.herokuapp.com/api/v1/item/')
    setProducto(res.data)
  }

  useEffect(() => {
    getProductos()
  }, [])
  const handleSearch = (e) => {
    setBuscador(e.target.value)
    console.log(buscador)
  }

  return (
    <>
      {producto.filter((producto) => {
        if (buscador === '') {
          return producto
        } else if (producto.product_name.toLowerCase().includes(buscador)) {
          return producto
        }
        return null
      })}
      <div className='header-container'>
        <div className='container'>
          <h2>ENVÍO GRATIS en toda la tienda - Entregas de 1 a 3 días hábiles.</h2>
        </div>
        <div className='navbar is-primary'>
          <div className='navbar-brand'>
            <img className='logo-header' img src={logo} alt='logo' />
            <div className='input-box'>
              <div className='main-input'>
                <div className='main-input-container'>
                  <input
                    className='input-header' type='search' placeholder='Search...'
                    onChange={handleSearch}
                  />
                </div>
              </div>
            </div>
            <header>
              <nav>
                <ul className='list-links'>
                  <li className='nav-items'>
                    <Link to='/'>Home</Link>
                  </li>
                  <li className='nav-items'>
                    <Link to='/categorias'>Categorias
                    </Link>
                  </li>
                  <li className='nav-items'>
                    <Link to='/login'>Log in</Link>
                  </li>
                </ul>
              </nav>
            </header>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderSecundario
