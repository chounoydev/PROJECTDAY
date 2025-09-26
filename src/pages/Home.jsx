import React, { useEffect, useState } from "react";
import Filter from "../components/Filter";
import ProductCard from "../components/ProductCard";

const Home = ({ goToDetails, cartItems, setCartItems }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // show 5 products per page

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        const cats = [...new Set(data.products.map(p => p.category))];
        setCategories(cats);
      });
  }, []);

  let filtered = products.filter(p => {
    const matchCategory = selectedCategory === "all" || p.category === selectedCategory;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
    return matchCategory && matchSearch && matchPrice;
  });

  if (sortOption === "price-asc") filtered.sort((a,b) => a.price-b.price);
  else if (sortOption === "price-desc") filtered.sort((a,b) => b.price-a.price);
  else if (sortOption === "rating-desc") filtered.sort((a,b) => b.rating-a.rating);

  // Pagination
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filtered.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => setCurrentPage(prev => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));

  return (
    <div style={{ padding: "1rem" }}>
      <Filter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        search={search}
        setSearch={setSearch}
        sortOption={sortOption}
        setSortOption={setSortOption}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
      />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {paginatedProducts.map(p => (
          <ProductCard key={p.id} product={p} goToDetails={goToDetails} cartItems={cartItems} setCartItems={setCartItems} />
        ))}
      </div>

      {/* Pagination Buttons */}
      <div style={{ marginTop: "1rem", display: "flex", justifyContent: "center", gap: "1rem" }}>
        <button onClick={handlePrev} disabled={currentPage === 1} style={{ padding: "0.5rem 1rem", cursor: "pointer" }}>
          Prev
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={handleNext} disabled={currentPage === totalPages} style={{ padding: "0.5rem 1rem", cursor: "pointer" }}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
