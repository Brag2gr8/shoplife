import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import HomeLayout from "./components/HomeLayout";
import Products from "./pages/products/Products";
import Cart from "./pages/cart/Cart";
import Favorite from "./pages/favorite/Favorite";
// import Products from "./pages/products/Products";
import { ProductsProvider } from './context/productsContext';
import About from "./pages/about/About"
import Login from './pages/auth/Login';
import SignUp from './pages/auth/Signup';
import Orders from "./pages/orders/Orders"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="cart" element={<Cart />} />
          <Route path="favorite" element={<Favorite />} />
          <Route path="orders" element={<Orders />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProductsProvider>
    <App />
  </ProductsProvider>
);
