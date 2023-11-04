import './App.css';
import Header from './components/header';
import ProductDetail from './components/productDetail';
import ProductPage from './pages/productPage';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>

      <Header />
      <Routes>
        <Route path='/' element={<ProductPage />} />
        <Route path='/product' element={<ProductDetail />} />
      </Routes>

    </Router>
  );
}

export default App;
