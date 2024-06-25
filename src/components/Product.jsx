import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Product({url}) {

  return (
    <>
    <div className="product">
        <img src={url} alt="" />
        <div>
            <p>IPhone 15</p>
            <p>549</p>
        </div>
        <button><FontAwesomeIcon icon={faCartShopping} /></button>
    </div>
    </>
  )
}

export default Product;
