import { Link } from "react-router-dom";


function ProductCard({ product, setCart }) {
  console.log(product);

  const classeName = "bg";
  const getColorByCategory = (category) => {
    switch (category) {
      case "men's clothing":
        return "bg-slate-100";
      case "women's clothing":
        return "bg-amber-50";
      case "electronics":
        return "bg-gradient-to-br from-green-40 to-emerald-100";
      case "jewelery":
        return "bg-gray-100";
      default:
        return "bg-white";
    }
  };

  // ✅ CARRITO (fuera del switch)
  const addToCart = () => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <>
      <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
        <div
          className={`${getColorByCategory(
            product.category,
          )} rounded-1 p-8 flex flex-col justify-center items-center h-55 mb-3 `}
        >
          <img
            src={product.image}
            alt={product.title}
            className=" h-full object-contain"
          />
        </div>

        {/* Categoria */}
        <h2 className="text-left mt-4 text-sm font-semibold line-clamp-2 text-blue-600 uppercase">
          {product.category}
        </h2>

        {/* Título */}
        <h2 className="text-left mt-4 text-sm font-semibold line-clamp-2">
          {product.title}
        </h2>

        {/* Precio */}
        <p className="flex justify-between  text-left text-lg font-bold mt-2 text-gray-800">
          ${product.price}
          {/* Rating */}
          <span className="items-center gap-1 text-sm font-medium">
            ⭐{product?.rating?.rate}
          </span>
        </p>

        {/* Botón */}
        <Link to={`/products/${product.id}`}>
          <button className="w-full mt-4 bg-blue-950 text-white py-2 rounded-xl hover:bg-blue-900 transition">
            Ver Detalles
          </button>
        </Link>

        {/* ✅ Carrito de compra */}
        <button
          onClick={addToCart}
          className="w-full mt-2 bg-green-500 text-white py-2 rounded-xl hover:bg-green-400 transition"
        >
          Agregar al carrito
        </button>
      </div>
    </>
  );
}
export default ProductCard;
