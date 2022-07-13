import ProductList from '../../components/ProductList/ProductList'
import { ProductoProvider } from '../../context/ProductContext'
import './home.css'

const Home = () => {
  return (
    <div>
      <ProductoProvider>
        <div className='main-container'>
          <ProductList />
        </div>
      </ProductoProvider>
    </div>
  )
}

export default Home
