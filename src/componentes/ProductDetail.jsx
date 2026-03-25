import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [punico, setPunico] = useState(null);

  useEffect(() => {
    async function detalleProducto() {
      try {
        const { data } = await axios.get(
          `https://fakestoreapi.com/products/${id}`,
        );

        setPunico(data);
        
      } catch (error) {
        console.log("Algo salió mal:", error);
      }
    }

    detalleProducto();
  }, []);

  if (!punico) return <p>Cargando...</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-4xl w-full grid md:grid-cols-2 gap-8">
        {/* IZQUIERDA - IMAGEN */}
        <div className="flex justify-center items-center bg-gray-50 rounded-xl p-6">
          <img src={punico.image} alt={punico.title} width="200" />
        </div>

        {/* DERECHA - INFO */}
        <div className="flex flex-col justify-between ">
          <div className="flex justify-end">
            <button
              onClick={() => navigate(-1)}
              className=" text-sm w-20 bg-yellow-300 transition p-2 rounded-xl"
            >
              Volver{" "}
            </button>
          </div>

          {/* Categoría */}
          <p className="text-sm uppercase text-blue-600 font-semibold">
            {punico.category}
          </p>

          {/* Título */}
          <h2 className="text-2xl font-bold mt-2">{punico.title}</h2>

          {/* Precio */}
          <p className="text-3xl font-bold text-green-600 mt-4">
            ${punico.price}
          </p>

          {/* Rating */}
          <p className="mt-2 text-yellow-500 font-medium">
            ⭐ {punico.rating?.rate}
          </p>

          {/* Descripción */}
          <p className="mt-4 text-gray-600 leading-relaxed">
            {punico.description}
          </p>

          {/* Botón acción para carrito */}
          <button
            onClick={() => addToCart(punico)}
            className="mt-6 bg-blue-950 text-white py-3 rounded-xl hover:bg-blue-900 transition"
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>

   
  );
}

export default ProductDetail;
