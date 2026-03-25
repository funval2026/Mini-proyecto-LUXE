function Hero() {
  return (
    <section className=" w-full px-23 mt-3">
      
      <div
        className="pt-3 relative w-full h-[80px] md:h-[370px] rounded-2xl overflow-hidden"
      >
        {/* IMAGEN DE FONDO */}
        <img
          src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a"
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY OSCURO */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

        {/* CONTENIDO */}
        <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 max-w-2xl text-white">

          {/* Badge */}
          <span className="bg-blue-600 text-xs px-3 py-1 rounded-full w-fit mb-4">
            NEW COLLECTION 2024
          </span>

          {/* Título */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Redefine Your <br />
            <span className="text-blue-500">Everyday Style</span>
          </h1>

          {/* Descripción */}
          <p className="mt-4 text-gray-200">
            Explore our curated selection of premium electronics
            and high-fashion apparel tailored for the modern lifestyle.
          </p>

          {/* Botones */}
          <div className="flex gap-4 mt-6">
            <button className="bg-blue-600 px-6 py-3 rounded-xl font-medium hover:bg-blue-500 transition">
              Shop Collection
            </button>

            <button className="border border-gray-300 px-6 py-3 rounded-xl font-medium hover:bg-white/10 transition">
              View Deals
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;