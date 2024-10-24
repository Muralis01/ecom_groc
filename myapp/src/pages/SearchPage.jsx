import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/data.json'; // Ensure data is correctly imported

const SearchPage = () => {
  const { searchTerm } = useParams(); // Get search term from the URL
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (data && data.products) {
      // Filter products that match the search term
      const filteredProducts = data.products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filteredProducts);
    }
  }, [searchTerm]);

  return (
    <div className="p-5 font-sans">
      {searchResults.length > 0 ? (
        searchResults.map((product) => (
          <div key={product.id} className="flex flex-col lg:flex-row gap-5 p-5 border border-gray-300 rounded-lg bg-white mb-5 transition-shadow hover:shadow-lg">
            <div className="flex justify-center items-center lg:w-2/5">
              <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg border border-gray-300" />
            </div>
            <div className="lg:w-3/5 p-2">
              <h4 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h4>

              <div className="mb-4">
                <p className="text-lg text-gray-600 line-through">MRP: {product.mrp}</p>
                <p className="text-2xl text-red-600 font-bold mb-2">Price: {product.price} ({product.pricePerUnit} / {product.unit})</p>
                {product.discount > 0 && (
                  <p className="text-lg text-green-600">You Save: <span>{product.discount}% OFF</span></p>
                )}
                <small className="text-gray-500">(Inclusive of all taxes)</small>
              </div>

              <div className="mb-4">
                <h5 className="text-xl text-gray-800 mb-2">Description</h5>
                <p className="text-gray-700">{product.description}</p>
              </div>

              {product.packSizes && product.packSizes.length > 0 && (
                <div className="mb-4">
                  <h5 className="text-xl text-gray-800 mb-2">Pack sizes</h5>
                  {product.packSizes.map((pack, index) => (
                    <div key={index} className={`flex justify-between p-4 border border-gray-300 rounded-lg mb-2 ${pack.selected ? 'bg-green-50 border-green-400' : ''}`}>
                      <span>{pack.size}</span>
                      <span>({pack.unitPrice} / {pack.unit})</span>
                      {pack.discount > 0 && (
                        <span className="text-green-600">{pack.discount}% OFF</span>
                      )}
                    </div>
                  ))}
                </div>
              )}

              <div className="mb-4">
                <h5 className="text-xl text-gray-800 mb-2">Customer Reviews</h5>
                <p>{product.reviews} reviews</p>
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <span key={index} className={`text-lg ${index < product.rating ? 'text-yellow-500' : 'text-gray-300'}`}>
                      ★
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 mb-4">
                <button className="bg-blue-800 text-white py-2 px-5 rounded-lg transition-colors hover:bg-red-500">
                  Add to basket
                </button>
                <button className="bg-white text-gray-800 py-2 px-5 border border-gray-300 rounded-lg transition-colors hover:border-gray-400">
                  Buy now
                </button>
              </div>

              <p className={`font-bold ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {product.stock > 0 ? `In stock: ${product.stock}` : 'Out of stock'}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p>No products found for "{searchTerm}".</p>
      )}
    </div>
  );
};

export default SearchPage;
