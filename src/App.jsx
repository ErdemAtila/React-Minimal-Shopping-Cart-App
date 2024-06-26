import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Product from './components/Product'
import CartProduct from './components/CartProduct'
import data from './assets/data';
import './App.css'
import { useEffect, useState, useRef, useCallback } from 'react';

const PRODUCT_DISPLAYED_COUNT = 5;

function App() {
  const [cart, setCart] = useState([]);

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();
  const lastItemRef = useCallback(node => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
          if (entries[0].isIntersecting && hasMore) {
              setPage(prevPage => prevPage + 1);
          }
      });
      if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  useEffect(() => {
    if (page * PRODUCT_DISPLAYED_COUNT >= data.length) {
      setHasMore(false);
    }
    console.log(page);
  }, [page]);

  useEffect(() => {
    if (!loading) return;

    const loadMoreItems = () => {
      setTimeout(() => {
        setLoading(false);
      }, 4000); 
    };

    loadMoreItems();
  }, [page, loading]);

  useEffect(() => {
    if (page > 1) {
      setLoading(true);
    }
  }, [page]);

  
  return (
    <>
    <div className='main-container'>
      <div>
        <div className='products'>
          {data.slice(0, page*PRODUCT_DISPLAYED_COUNT).map((product, index) => <Product page={page} index={index} data={data} lastItemRef={lastItemRef} key={product.id} product={product} cart={cart} setCart={setCart} />)}


        </div>
      </div>

      {loading && <h3>Loading...</h3>}







      <div className='cart-container'>
        <h2>CART - <FontAwesomeIcon icon={faCartShopping} /></h2>
        <div>
          {
          cart.length == 0 ? <h2>Empty</h2> :
          cart.map(product => <CartProduct key={product.id} product={product} cart={cart} setCart={setCart} />)}
        </div>
      </div>

    </div>
    </>
  )
}

export default App
