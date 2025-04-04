import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import ProductData from "./ProductsData.json"
import { GoHeart } from "react-icons/go";

const LatestCollectionProducts = () => {
    
    // Declare state for random products
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    const shuffleArray = (array) => {
      return array.sort(() => Math.random() - 0.5);
    };

    const getRandomProducts = () => {
      const shuffled = shuffleArray([...ProductData]); // Shuffle products
      setRandomProducts(shuffled.slice(0, 18)); // Select 5 random products
    };

    getRandomProducts();
  }, []); // Run once when component mounts
  return (
    
    <div className="product-list products-grid" >
    {randomProducts.length > 0 ? (randomProducts.map((product, index) => (
    <div key={index} className="Product-Card Product-Card-latest">
    <Link to={`/product/${product.id}`}> 
    <img src={product.ProductImg} alt={product.name} />    </Link>
              
    {/* <h5>{product.tag}</h5> */}
                 
    {product.tag && ( <h5 className="Product-Tag">{product.tag}</h5>
    )}
                  <p>Price: Rs.{product.Price}    <GoHeart  className="LikedProducts"/></p>
                  <h2>{product.ProductName}</h2>
                  <div>
                    <button>Add to Cart</button>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading products...</p>
            )}
          </div>
        

    )
    }

    export default LatestCollectionProducts 