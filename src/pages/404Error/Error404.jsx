import { Link } from 'react-router-dom'
import error from '../../assets/img/Error404.jpg'
import Header from '../../components/Header/Header'
const Error404 = () => {
  return (
    <><Header />
      <div className='main-container'>
        <img className='error-img' src={error} alt='error' />
      </div>
      <div className='error-text'>
        <p>Page Not Found</p>
        <Link className='btn btn-dark' to='/'>Go Back</Link>
      </div>
    </>
  )
}

export default Error404
