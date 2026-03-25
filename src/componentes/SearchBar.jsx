import { Search } from "lucide-react";

function SearchBar({ search, setSearch }) {
  return (
    <div className="hidden md:flex flex-1 justify-center">
      <div className="relative w-full max-w-lg">
        {/* ICONO */}
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

        {/* INPUT */}
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search products..."
          className="
            w-full
            pl-12 pr-4 py-2.5
            rounded-full
            bg-gray-100
            text-sm
            text-gray-700
            placeholder-gray-400
            outline-none
            transition-all duration-200

            border border-transparent
            focus:border-blue-500
            focus:bg-white
            focus:shadow-md
          "
        />
      </div>
    </div>
  );
}

export default SearchBar;
