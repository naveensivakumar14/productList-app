  
  function ProductCard({product}){
    return(
        <div className="product-card  m-2 p-4 w-60 shadow-lg">
            <div className="image">
                <img key={product.id} src={product.thumbnail} alt="" />
            </div>
            <div>
                <p key={product.id}>{product.title}</p>
                <p>{product.price}</p>
            </div>
            <div className="mt-2">
                <button className="bg-[#17153B] text-white text-sm p-2 border rounded-md">Add to Cart</button>
            </div>

        </div>
    )
    
  }

  export default ProductCard