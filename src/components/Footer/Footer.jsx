import { Link } from 'react-router-dom'
import './footer.css'
import logosNegro from '../../assets/img/logosNegro.png'

const Footer = () => {
  return (
    <div className='navbar is-primary-footer'>
      <div className='navbar-brand-footer'>
        <div>
          <Link className='footer' to='/'>Productos</Link>
          <Link className='footer' to='/'>Términos y condiciones</Link>
          <Link className='footer' to='/'>Aviso de privacidad</Link>
        </div>
        <Link id='etiqueta_a' to='/'>Dev.f Hackeando Latinoamérica desde 2022_ </Link>
      </div>
      <div className='bancos'>
        <Link id='metop' to='/'>Medios de pago</Link>
        <img className='footer-img' src={logosNegro} alt='logosNegro' />
      </div>
      <div className='final'>
        <Link id='final' to='/'>© 2022 DEV.F®</Link>
      </div>
    </div>
  )
}

export default Footer
