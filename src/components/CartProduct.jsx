import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import {findItemById} from "../assets/functions"


function CartProduct({product, cart, setCart}) {
    function deleteHandler(id) {
        let newCart = [...cart];
        newCart.splice(cart.findIndex(item => item.id == id), 1);
        setCart(newCart);
    }

    function countHandler(id, quantity) {
        let newCount = findItemById(id, cart).count + quantity;
        if (newCount == 0) {
            deleteHandler(id);
        } else {
        let index = cart.findIndex(item => item.id == id);
        let newCart = [...cart];
        newCart[index] = {...findItemById(id, cart), count:newCount}
        setCart(newCart);
        }
    }

    return (
      <>
      <div key={product.id} className="cart-product">
          <img src={'/src/assets/' + product.image} alt="" />
          <div>
              <p>{product.title}</p>
              <span>{product.price * product.count}$</span>
              <div className="operations">
                  <button onClick={() => countHandler(product.id, 1)}><FontAwesomeIcon icon={faPlus} /></button>
                  <span>{product.count}</span>
                  <button onClick={() => countHandler(product.id, -1)}><FontAwesomeIcon icon={faMinus} /></button>
              </div>
          </div>
          <button className="remove" onClick={() => deleteHandler(product.id)}><FontAwesomeIcon icon={faTrashCan} /></button>
      </div>
      </>
    )
  }
  
  export default CartProduct;
  