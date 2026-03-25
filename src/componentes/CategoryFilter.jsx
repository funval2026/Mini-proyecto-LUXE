

/*function CategoryFilter({ products, category, setCategory }) {
  const categories = ["all", ...new Set(products.map(p => p.category))];

  return (
    <div className="flex gap-3 justify-center mb-6">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setCategory(cat)}
          className={`px-4 py-2 rounded ${
            category === cat ? "bg-blue-900 text-white" : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;*/