
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://fakestoreapi.com/products";



const useProducts = () => {
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getProducts = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get(API_URL);

      setProducts(response.data);
    } catch (err) {
      setError("Error al cargar productos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return { products, loading, error, refetch: getProducts };
};

export default useProducts;