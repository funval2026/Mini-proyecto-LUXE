import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Cart from "./Cart";

function Navbar({ search, setSearch, cart }) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* IZQUIERDA */}
        <div className="flex items-center gap-4">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-blue-600 text-white p-2 rounded-lg">🛍️</div>
            <span className="font-bold text-xl">LUXE.</span>
          </Link>

          {/* MENU */}
          <nav className="hidden md:flex gap-6 text-gray-600 font-medium">
            <Link
              to="/products/category/electronics"
              className="hover:text-black"
            >
              Electronics
            </Link>

            <Link to="/products/category/jewelery" className="hover:text-black">
              Jewelery
            </Link>

            <Link
              to="/products/category/men's clothing"
              className="hover:text-black"
            >
              Men’s
            </Link>

            <Link
              to="/products/category/women's clothing"
              className="hover:text-black"
            >
              Women’s
            </Link>

            <Link to="/" className="hover:text-black">
              All
            </Link>
          </nav>
        </div>

        {/* BUSCADOR */}
        {/* 🔥 AQUÍ VA EL SEARCHBAR */}

        <SearchBar search={search} setSearch={setSearch} />

        {/* DERECHA */}
        <div className="flex items-center gap-6">
          <button className="text-xl">❤️</button>
          
          {/* 🛒 carrito */}
          <Link to="/cart">
          🛒 ({cart.length})</Link>

          <div className="w-8 h-8 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
{
  /* CARRITO 
          <Link to="/cart" className="relative text-xl">
            🛒
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-2 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>*/
}
{
  /* 🧩 CATEGORÍAS 
            <CategoryFilter
              products={products}
              category={category}
              setCategory={setCategory
            />*/
}
