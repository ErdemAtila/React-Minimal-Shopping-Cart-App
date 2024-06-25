import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTrashCan } from '@fortawesome/free-solid-svg-icons';


function CartProduct({url}) {

    return (
      <>
      <div className="cart-product">
          <img src={url} alt="" />
          <div>
              <p>IPhone 15</p>
              <span>549$</span>
              <div className="operations">
                  <button><FontAwesomeIcon icon={faPlus} /></button>
                  <span>1</span>
                  <button><FontAwesomeIcon icon={faMinus} /></button>
              </div>
          </div>
          <button className="remove"><FontAwesomeIcon icon={faTrashCan} /></button>
      </div>
      </>
    )
  }
  
  export default CartProduct;
  