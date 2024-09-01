import ProductsContextProvider from './contexts/ProductsContext';
import { ProductsContext } from './contexts/ProductsContext';
import { useContext } from 'react';

import Header from './components/Header';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';

import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import './App.css';

//Cartpage Componennt to map the product items from card.js (copilot)
function CartPage() {
  const { cart } = useContext(ProductsContext);

  return (
    <div className=' bg-[#B5C0D0] flex flex-wrap justify-center items-center px-20 py-10'>
      {cart.map(product => (
        <div className=' p-4 w-60'>
            <Cart key={product.id} product={product} />
        </div>
        
      ))}
    </div>
  );
}

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      {/* <h1><Link to={'ProductList'}>All products</Link></h1>
      <h1><Link to={'Cart'}>Cart</Link></h1> */}
      <ProductsContextProvider>
        <Routes>
          <Route path='ProductList' element={<ProductList/>}></Route>
          <Route path='Cart' element={<CartPage/>}></Route>
        </Routes>
      </ProductsContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

