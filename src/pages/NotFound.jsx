import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 text-center">
      
      {/* Número 404 */}
      <h1 className="text-7xl md:text-9xl font-extrabold text-blue-600 drop-shadow-lg">
        404
      </h1>

      {/* Mensaje */}
      <p className="mt-4 text-xl md:text-2xl text-gray-700 font-semibold">
        Página no encontrada
      </p>

      <p className="mt-2 text-gray-500 max-w-md">
        Lo sentimos, la página que buscas esta en mantenimiento o fue movida, comunicate con la central en la seccion Contacto
      </p>

      {/* Botón */}
      <Link
        to="/"
        className="mt-8 inline-block bg-blue-600 text-white px-8 py-3 rounded-xl shadow-md hover:bg-blue-700 hover:scale-105 transition duration-300"
      >
        Volver al inicio
      </Link>

    </div>
  );
}

export default NotFound;
