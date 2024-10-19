import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import data from '../data/data.json'; // Ensure this path is correct

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [categoryIndex, setCategoryIndex] = useState({
    snacks: 0,
    staples: 0,
    beverages: 0,
    groceries: 0,
  });
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 5;

  useEffect(() => {
    if (Array.isArray(data.products)) {
      setProducts(data.products); // Set products from the JSON file
    } else {
      console.error("Data is not an array:", data.products);
    }
  }, []);

  const showNextCategory = (category) => {
    setCategoryIndex((prev) => ({
      ...prev,
      [category]: (prev[category] + 1) % products.filter(product => product.category === category).length,
    }));
  };

  const getDisplayedItems = (category) => {
    const filteredItems = products.filter(product => product.category.toLowerCase() === category.toLowerCase());
    const totalItems = filteredItems.length;
    return Array.from({ length: itemsPerPage }, (_, i) => filteredItems[(categoryIndex[category] + i) % totalItems] || {});
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = ['groceries', 'snacks', 'staples', 'beverages'];

  // Add to Cart functionality using axios.post
  const handleAddToCart = async (product) => {
    try {
      const response = await axios.post('http://localhost:3009/products', product); // Adjust the URL if necessary
      console.log('Product added to cart:', response.data);
      alert(`${product.name} has been added to your cart!`);
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  return (
    <div className="bg-gray-100 w-full max-w-none mx-auto">
      {/* Search Input */}
      <div className="my-5 text-center">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-4/5 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Search Results */}
      {searchTerm && (
        <div className="my-5">
          <div className="text-2xl font-bold uppercase text-center mb-4">Search Results</div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
            {filteredProducts.map(item => (
              <div className="bg-white p-4 rounded-lg shadow-lg" key={item.id}>
                <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-md mb-4" />
                <div className="text-center">
                  <h4 className="font-bold text-lg mb-2">{item.name}</h4>
                  <p className="text-red-600 font-semibold mb-2">{item.price}</p>
                  <button 
                    className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300"
                    onClick={() => handleAddToCart(item)}
                  >
                    <FontAwesomeIcon icon={faCartArrowDown} /> Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Categories */}
      {categories.map((category) => (
        <div key={category}>
          <div className="text-2xl font-bold uppercase mb-4 text-center mt-6">{category}</div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
            {getDisplayedItems(category).map((item) => (
              item ? (
                <div className="bg-white p-4 rounded-lg shadow-lg" key={item.id}>
                  <div className="bg-green-500 text-white py-1 px-2 rounded-full text-xs absolute top-2 left-2">{item.discount}</div>
                  <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-md mb-4" />
                  <div className="text-center">
                    <h4 className="font-bold text-lg mb-2">{item.name}</h4>
                    <p className="text-red-600 font-semibold mb-2">{item.price}</p>
                    <button 
                      className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300"
                      onClick={() => handleAddToCart(item)}
                    >
                      <FontAwesomeIcon icon={faCartArrowDown} /> Add to Cart
                    </button>
                  </div>
                </div>
              ) : null
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
