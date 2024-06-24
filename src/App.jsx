import Product from './components/Product'
import './App.css'

function App() {

  return (
    <>
    <div className='main-container'>
      <div className='products'>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <div className='cart-container'>
      <h2>Alışveriş Sepeti</h2>
      <p>Sepetinizde ürün yok.</p>
      </div>
    </div>
    </>
  )
}

export default App
