import ProductDetail from '../../components/ProductDetail/ProductDetail'
import { ProductoProvider } from '../../context/ProductContext'

const Categoria = () => {
  return (
    <div>
      <ProductoProvider>
        <div>
          <ProductDetail />
        </div>
      </ProductoProvider>
    </div>
  )
}

export default Categoria
