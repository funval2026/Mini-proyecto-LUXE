import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProductosPage from "./pages/ProductosPage";
import ProductDetail from "./componentes/ProductDetail";
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";

import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  return (
    <>
      {/* 🔥 NAVBAR GLOBAL */}
      <Navbar search={search} setSearch={setSearch} cart={cart} />

      <Routes>
        <Route path="/" element={<Home search={search} setCart={setCart} />} />
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/products/:id" element={<ProductDetail setCart={setCart}/>} />
        <Route
          path="/products/category/:category"
          element={<ProductosPage search={search} setCart={setCart}/>}
        />
      </Routes>

      {/* 🔥 FOOTER GLOBAL */}
      <Footer />
    </>
  );
}

export default App;
