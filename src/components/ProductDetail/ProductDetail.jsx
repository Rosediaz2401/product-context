import { useProductContext } from '../../context/ProductContext'

const ProductDetail = () => {
  const context = useProductContext()
  console.log(context)
  const validacionUrl = (url) => {
    if (typeof url !== 'string') {
      return false
    }
    // eslint-disable-next-line no-useless-escape
    return (url.match(/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gmi) !== null)
  }
  return (
    <>
      {
         context.selectedProduct
           ? <div>
             <img className='imagen' src={validacionUrl(context.selectedProduct.image) ? context.selectedProduct.image : validacionUrl(context.selectedProduct.images) ? context.selectedProduct.images : context.selectedProduct.images || 'https://cf.geekdo-images.com/camo/cba429883803dadea626df689cdbf3ddc0dc1bba/68747470733a2f2f692e696d6775722e636f6d2f456161485557462e6a7067'} alt='imagen producto' />
             <h1> {`${context.selectedProduct.product_name} `}</h1>
             <h3>{`SKU: ${context.selectedProduct.sku} `}</h3>
             <h3>{`Brand: ${context.selectedProduct.brand} `}</h3>
             <h3>{`Category: ${context.selectedProduct.category} `}</h3>
             <h4>{`Description: ${context.selectedProduct.description} `}</h4>
             <h2>{`Price: $ ${context.selectedProduct.price} `}</h2>
             <button>Buy now</button>
             </div>
           : <h1>Selecciona un producto</h1>
      }
    </>
  )
}

export default ProductDetail
