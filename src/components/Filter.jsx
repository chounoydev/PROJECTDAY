import React from "react";

function Filter({
  categories = [],
  selectedCategory,
  setSelectedCategory,
  search,
  setSearch,
  sortOption,
  setSortOption,
  priceRange = [0, 1000],
  setPriceRange
}) {
  return (
    <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem", flexWrap: "wrap" }}>
      {/* Search */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "0.5rem", flex: "1 1 200px" }}
      />

      {/* Category */}
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="all">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      {/* Sort */}
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      >
        <option value="default">Sort By</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="rating-desc">Rating: High to Low</option>
      </select>

      {/* Price Range */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label>Price: ${priceRange[0]} - ${priceRange[1]}</label>
        <input
          type="range"
          min="0"
          max="1000"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
          style={{ width: "150px" }}
        />
      </div>
    </div>
  );
}

export default Filter;
