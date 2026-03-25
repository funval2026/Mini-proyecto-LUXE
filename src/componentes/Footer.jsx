export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-700 px-8 md:px-16 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo + descripción */}
        <div>
          <h2 className="text-xl font-semibold mb-3">
            🛍️ LUXE<span className="text-blue-600">.</span>
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Your one-stop destination for premium lifestyle products,
            from jewelry to electronics. Quality guaranteed.
          </p>

          <div className="flex gap-3 mt-4 text-lg">
            <a href="#" className="hover:text-blue-600 transition">🔗</a>
            <a href="#" className="hover:text-blue-600 transition">✉️</a>
          </div>
        </div>

        {/* Categorías */}
        <div>
          <h3 className="font-semibold mb-3">Categories</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a href="#" className="hover:text-blue-600 transition">Electronics</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Jewelry</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Men's Fashion</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Women's Fashion</a></li>
          </ul>
        </div>

        {/* Soporte */}
        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a href="#" className="hover:text-blue-600 transition">Help Center</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Shipping Policy</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Returns & Refunds</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Order Tracking</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-3">Newsletter</h3>
          <p className="text-sm text-gray-500 mb-3">
            Get the latest updates on new arrivals and sales.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("Subscribed");
            }}
            className="flex"
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 text-sm rounded-r-md hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Parte inferior */}
      <div className="border-t border-gray-200 mt-10 pt-5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-3">
        <p>© 2024 Luxe Store. Powered by FakeStore API.</p>

        <div className="flex gap-4">
          <a href="#" className="hover:text-blue-600 transition">Terms of Service</a>
          <a href="#" className="hover:text-blue-600 transition">Privacy Policy</a>
          <a href="#" className="hover:text-blue-600 transition">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
