function Hero() {
  return (
    <section className="w-full px-4 md:px-8 lg:px-16 mt-3">
      
      {/* CONTENEDOR PRINCIPAL  */}
      <div className="relative w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden">
        
        {/* IMAGEN */}
        <img
          src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a"
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

        {/* CONTENIDO */}
        <div className="relative z-10 h-full flex flex-col justify-end md:justify-center px-4 md:px-16 pb-6 md:pb-0 max-w-2xl text-white">
          
          <span className="bg-blue-600 text-xs px-3 py-1 rounded-full w-fit mb-4">
            NEW COLLECTION 2024
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
            Redefine Your <br />
            <span className="text-blue-500">Everyday Style</span>
          </h1>

          <p className="mt-4 text-gray-200">
            Explore our curated selection of premium electronics and
            high-fashion apparel tailored for the modern lifestyle.
          </p>

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