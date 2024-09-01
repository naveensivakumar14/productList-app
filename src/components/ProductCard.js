  import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext" 

  function ProductCard({product}){

    //destrctiong productContext useStates
    const {products}=useContext(ProductsContext)
    const {cart,setCart}=useContext(ProductsContext)

  
    // Function to add products to the cart list
    const addCart = (id) => {
        const product = products.find((product) => product.id === id);
        if (product && !cart.some((cartItem) => cartItem.id === id)) {
        setCart([...cart, product]);
        console.log(product.title)
        }
    };

    //conditional rendering of cart button
    const isInCart = cart.some(cartItem => cartItem.id === product.id);

    return(
        <div className="product-card bg-slate-200 m-2 p-4 w-60 shadow-lg">
            <div className="image">
                <img key={product.id} src={product.thumbnail} alt="" />
            </div>
            <div>
                <p key={product.id}>{product.title}</p>
                <p>{product.price}</p>
            </div>
            <div className="mt-2">
                <button onClick={() => addCart(product.id)}   className={`text-white text-sm p-2 border rounded-md ${isInCart ? 'bg-[#5D13E7]' : 'bg-[#17153B]'}`}>
                {isInCart ? 'Carted' : 'Add to Cart'}
                </button>
            </div>
        </div>
    )
    
  }

  export default ProductCard