import ProductList from '../../components/ProductList/ProductList'
import { ProductoProvider } from '../../context/ProductContext'
import Header from '../../components/Header/Header'
import './home.css'

const Home = () => {
  return (
    <ProductoProvider>
      <Header />
      <div>
        <div className='main-container'>
          <ProductList />
        </div>
      </div>
    </ProductoProvider>
  )
}

export default Home
