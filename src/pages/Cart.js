import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";

function Cart({product}) {

  const { cart, setCart } = useContext(ProductsContext);

  // Function to remove products from the cart list
  const removeCart = (id) => {
    setCart(cart.filter(cartItem => cartItem.id !== id));
  };

  return (
    <div className=" bg-slate-100 m-2 p-4 shadow-lg">
      <div className="image">
        <img key={product.id} src={product.thumbnail} alt={product.title} />
      </div>
      <div>
        <p>{product.title}</p>
        <p>{product.price}</p>
      </div>
      <div className="mt-2">
        <button
          className="bg-[#FF4C4C] border border-black text-white p-1 rounded-sm"
          onClick={() => removeCart(product.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default Cart;
