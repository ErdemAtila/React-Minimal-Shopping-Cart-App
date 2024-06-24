
function Product({url}) {

  return (
    <>
    <div className="product">
        <img src={url} alt="" />
        <div>
            <p>IPhone 15</p>
            <p>549</p>
        </div>
        <button>Add to cart</button>
    </div>
    </>
  )
}

export default Product;
