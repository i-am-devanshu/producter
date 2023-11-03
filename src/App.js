import './App.css';
import Header from './components/header';
import Product from './components/product';
import ProductDetail from './components/productDetail';
import ProductPage from './pages/productPage';

function App() {
  return (
   <>
  
   <Header />
   {/* <ProductDetail title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops" img="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" category="men's clothing" price="109.95" description="Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday" /> */}
   <ProductPage />
   
   </>
  );
}

export default App;
