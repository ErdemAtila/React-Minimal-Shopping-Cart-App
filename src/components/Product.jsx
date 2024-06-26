import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import {findItemById} from "../assets/functions"

const PRODUCT_DISPLAYED_COUNT = 5;

function Product({product, cart, setCart, index, data, lastItemRef, page}) {

  return (
    <>
    <div className="product" ref={index ==  page*PRODUCT_DISPLAYED_COUNT -1 ? lastItemRef : null}>
        <img src={'/src/assets/' + product.image} alt="" />
        <div>
            <p>{product.title}</p>
            <p>{product.price}$</p>
        </div>
        {
          findItemById(product.id, cart) ? 
          <button disabled onClick={()=> setCart(curr => [...curr, {...product}])}><FontAwesomeIcon icon={faCartShopping} /></button>
          :
          <button onClick={()=> setCart(curr => [...curr, {...product, count: 1}])}><FontAwesomeIcon icon={faCartShopping} /></button>
        }
    </div>
    </>
  )
}

export default Product;
