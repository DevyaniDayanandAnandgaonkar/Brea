import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import ProductData from "../ProductsData.json"
import { GoHeart } from "react-icons/go";

const BestOfBrea = () => {
    
    // Declare state for random products
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    const shuffleArray = (array) => {
      return array.sort(() => Math.random() - 0.5);
    };

    const getRandomProducts = () => {
      const shuffled = shuffleArray([...ProductData]); // Shuffle products
      setRandomProducts(shuffled.slice(18, 30)); // Select 5 random products
    };

    getRandomProducts();
  }, []); // Run once when component mounts
return (
<div className='BestofBrea'>
<div className='BlogBanner  BestofBrea-copy'> <img src="./DhritiSilverChainPendants/Rose Gold Pea Flower Pendant with Link Chain.jpg" alt="" /></div>
<div className='BlogTecx'><h2>Best of Brea</h2>
<p><span ><Link to ="/" id="Home-Link">Home / </Link></span> 
<span id="active-texc"><Link to ="/BestOfBrea" id="HomeNot-Link">Best of Brea </Link> </span></p></div>

 <div  >
 
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
    </div>



</div>
)
}
export default BestOfBrea;