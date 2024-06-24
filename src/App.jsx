import Product from './components/Product'
import CartProduct from './components/CartProduct'
import './App.css'

function App() {

  return (
    <>
    <div className='main-container'>
      <div className='products'>
        <Product url="https://cdn.akakce.com/z/apple/iphone-15.jpg" />
        <Product url="https://cdn.akakce.com/z/apple/iphone-15.jpg" />
        <Product url="https://m.media-amazon.com/images/I/51eOztNdCkL.jpg" />
        <Product url="https://m.media-amazon.com/images/I/51eOztNdCkL.jpg" />
        <Product url="https://cdn.akakce.com/z/apple/iphone-15.jpg" />
        <Product url="https://cdn.akakce.com/z/apple/iphone-15.jpg" />
        <Product url="https://cdn.akakce.com/z/apple/iphone-15.jpg" />


      </div>
      <div className='cart-container'>
      <h2>CART</h2>
      <div>
        <CartProduct  url="https://cdn.akakce.com/z/apple/iphone-15.jpg" />
        <CartProduct  url="https://cdn.akakce.com/z/apple/iphone-15.jpg" />
        <CartProduct url="https://m.media-amazon.com/images/I/51eOztNdCkL.jpg" />
        <CartProduct url="https://m.media-amazon.com/images/I/51eOztNdCkL.jpg" />
        <CartProduct url="https://m.media-amazon.com/images/I/51eOztNdCkL.jpg" />
        <CartProduct url="https://m.media-amazon.com/images/I/51eOztNdCkL.jpg" />
        <CartProduct url="https://m.media-amazon.com/images/I/51eOztNdCkL.jpg" />

      </div>
      </div>
    </div>
    </>
  )
}

export default App
