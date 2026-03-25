import useProducts from "../hooks/useProducts";
import ProductCard from "../componentes/ProductCard";
import { useState } from "react";
import Hero from "../componentes/Hero";
import SearchBar from "../componentes/SearchBar";
import Navbar from "../componentes/Navbar";
import Cart from "../componentes/Cart";

function Home({ search, setCart }) {
  // 🔥 1. TRAER PRODUCTOS (AQUÍ VA)
  const { products, loading, error } = useProducts(
    "https://fakestoreapi.com/products",
  );
  const [category, setCategory] = useState("all");

  // 2. FILTROS - SearchBar (DESPUÉS de los estados )
  const filteredBySearch =
    products.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase()),
    ) || [];

  const filteredProducts =
    category === "all"
      ? filteredBySearch
      : filteredBySearch.filter((p) => p.category === category);

  // 🔥 4. ESTADOS VISUALES
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Hero />

      {/* 🔥 LISTA DE PRODUCTOS */}
      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-500">No se encontraron productos</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-20 flex-col">
        {filteredProducts.map((prod) => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </>
  );
}

export default Home;
      {/*<ProductCard key={p.id} product={p} setCart={setCart} />*/}
