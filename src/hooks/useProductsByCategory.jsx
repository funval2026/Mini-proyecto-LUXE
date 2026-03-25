import { useEffect, useState } from "react";
import axios from "axios";

const useProductsByCategory = (category) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await axios.get(
          `https://fakestoreapi.com/products/category/${category}`
        );

        setProducts(res.data);
      } catch (err) {
        setError("Error al cargar categoría");
      } finally {
        setLoading(false);
      }
    };

    if (category) fetchCategory();
  }, [category]);

  return { products, loading, error };
};

export default useProductsByCategory;