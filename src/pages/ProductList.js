import { useContext, useState } from "react"
import { ProductsContext } from "../contexts/ProductsContext";

import ProductCard from "../components/ProductCard";
function ProductList(){


   //destructuring
   const {products}=useContext(ProductsContext);

   const[search,setSearch]=useState([]);
   const[filterProducts,setfilterProducts]=useState(products)

   //search products
   function searchProducts(event){
     setSearch(event.target.value);
    
   }
 
   //filter products
   function searchResult(){
      {
         products.filter(function(product){
            const results = products.filter((product) =>
               product.title.toLowerCase().includes(search.toLowerCase())
             );
             setfilterProducts(results);
         })
      }
   }

   function refresh(){
      setSearch([null]);
      setfilterProducts(products)
   }
   
  
   return(
      <div>
         <div className=" py-10 flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold">Popular Products</h2>
            
               <input value={search}  onChange={searchProducts} className="border border-black w-48 mt-4 p-2 outline-none rounded-sm" type="text" placeholder="search products" />
               <div className="flex mt-4">
                  <button onClick={searchResult} className="bg-black text-white p-2 ml-2 border rounded-sm">Search</button>
                  <button onClick={refresh} className="bg-black text-white p-2 ml-2 border rounded-sm"  >Refresh</button>
               </div>
               
            
           
         </div>

         {/* list out the products titles using map */}
         <div className="flex flex-wrap justify-center items-center p-10">
            {
            filterProducts.map(product => (
               // <p key={product.id}>{product.title}</p>
               <div key={product.id}>
                  <ProductCard product={product}/>
               </div>
            ))}
         </div>
         
      </div>
   )

}
export default ProductList