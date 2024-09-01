import { createContext, useState } from "react";
import dummyData from "../dummyData/products.json"


//creating a context
const ProductsContext=createContext();

//useContext
// export const useProductsContext=()=>{
//     return useContext(ProductsContext);
// }

//component
function ProductsContextProvider({children}){
    //useState
    const [products,setProducts]=useState(dummyData.products);
    // const [cart,setCart]=useState([]);
    const value = {
        products,
        setProducts,
    };
 
    /* To add Incart, addcart, removecart*/

    return(
        <>
        <ProductsContext.Provider value={value} >
            {children}
        </ProductsContext.Provider>
        </>
        
    )
}
export default ProductsContextProvider
export {ProductsContext}