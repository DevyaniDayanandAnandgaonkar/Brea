import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { GoHeart } from "react-icons/go";
import ProductsData from '../ProductsData.json'

const ChainPendantsFilter_Products = () => {
    let [data, setData] =useState(ProductsData);
    const [filteredProducts, setFilteredProducts] = useState(ProductsData);
    const [Price, setPrice] = useState("");
    const [metal, setMetal] = useState("");

    // Applying Function for filter products
    const filterProducts = () => {
    let filtered = ProductsData.filter((product) => {
    return (
    (metal ? product.metal === metal : true)  &&
    (Price ? product.Price <= parseInt(Price) : true)
    );
    });      
    setFilteredProducts(filtered);
    };
    // Call `filterProducts` when any filter changes
    React.useEffect(() => {
    filterProducts( );
    }, [ Price, metal])
    return (
       
              
              <>
              <div className='Mangalsutra-sect'>
       
               {/* Filter Dropdowns */}
               <div className="filters">
               <select onChange={(e) => setMetal(e.target.value)} className="selectSection">
                   <option value="" >Metals</option>
                   <option value="silver">Silver</option>
                   <option value="roseGold">Rose Gold</option>
                   <option value="oxidisedSilver">Oxidised Silver</option>
               </select>
       
               <select onChange={(e) => setPrice(e.target.value)} className="selectSection">
                   <option value="">Prices</option>
                   <option value="500">Under Rs. 500</option>
                   <option value="2000">Under Rs. 2000</option>
                   <option value="3000">Under Rs. 3000</option>
                   <option value="4500">Under Rs. 4500</option>
               </select>
       
               </div>  
       {/* Display Filtered Products */}
         <div className="products-grid">
         {filteredProducts.length > 0 ? (
         filteredProducts.slice(10, 20).map((value) => (
                
       <div key={value.id} className="Product-Card">
       <div>    
       <Link to={`/product/${value.id}`} key={value.id} className="Product-Link">
       <img src={value.ProductImg} alt={value.ProductName} /></Link>
       </div>
       <div>
       <h3 id="Product-Price">Rs. {value.Price} <GoHeart  className="LikedProducts LikedProducts-Gifting"/></h3>
       </div>
       <div>
       <h2>{value.ProductName}</h2>
       </div>
       <div>
       <button>Add to Cart</button>
       </div>
       </div>
       ))
       ) : (
       <p>No products match your filters.</p>
       )}
       </div>    

       </div>
              </>
    )
}
export default ChainPendantsFilter_Products