import logo from './logo.svg';
import './App.css';
import  Home  from "./components/Home";
import { Product } from "./components/product";
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ProductDetails } from './components/Productdetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Product />}></Route>
        <Route path="/products/:id" element={<ProductDetails />}></Route>
      </Routes>

    </div>
  );
}

export default App;