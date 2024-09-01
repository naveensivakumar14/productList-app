import ProductsContextProvider from './contexts/ProductsContext';
import ProductList from './pages/ProductList';
import Header from './components/Header';

import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <ProductsContextProvider>
        <ProductList/>
      </ProductsContextProvider>
    </div>
  );
}

export default App;

