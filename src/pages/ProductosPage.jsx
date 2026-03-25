import { useParams } from "react-router-dom";
import useProductsByCategory from "../hooks/useProductsByCategory";
import ProductCard from "../componentes/ProductCard";

function ProductosPage() {
  const { category } = useParams();
  const { products, loading, error } = useProductsByCategory(category);

  //BUSQUEDA Combinar búsqueda + categoría //


  return (
    <>
      <h1 className="py-7 text-center text-2xl font-bold">
        Categoría: {category}
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-10">
        {products.map((prod) => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </>
  );
}

export default ProductosPage;
