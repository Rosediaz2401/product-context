import { Link } from 'react-router-dom'

const Paginacion = ({ productosPerPage, totalProductos }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalProductos / productosPerPage); i++) {
    console.log(pageNumbers)
    pageNumbers.push(i)
  }
  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <Link to='!#' className='page-link'>
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Paginacion
