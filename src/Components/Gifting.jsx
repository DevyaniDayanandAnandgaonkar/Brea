import React, { useState } from "react";
import ProductsData from "../ProductsData.json";
import "./Products.css";
import "./Blog.css";
import { Link } from "react-router-dom";
import { GoHeart } from "react-icons/go";

const Gifting = () => {
  const [filteredProducts, setFilteredProducts] = useState(ProductsData);

  const [Category, setCategory] = useState("");
  const [Price, setPrice] = useState("");
  const [metal, setMetal] = useState("");
  const [style, setStyle] = useState("");


  // Function to filter products
  const filterProducts = () => {
    let filtered = ProductsData.filter((product) => {
      return (
        (Category ? product.Category === Category : true) &&
        (Price ? product.Price <= parseInt(Price) : true) &&
        (metal ? product.metal === metal : true) &&
        (style ? product.style === style : true)
      );
    });

    setFilteredProducts(filtered);
  };

  // Call `filterProducts` when any filter changes
  React.useEffect(() => {
    filterProducts();
  }, [Category, Price, metal , style]);

  return (

    <div className="Gifting-Wrapper">
    <div className='BlogBanner'> <img src="./Blog3.jpg" alt="" /></div>
<div className='BlogTecx'><h2 className="req-colo-h2">Gifting</h2>
<p><span ><Link to ="/" id="Home-Link">Home / </Link></span> 
<span id="active-texc"><Link to ="/Gifting" id="HomeNot-Link">Gifting </Link> </span></p></div>

      {/* Filter Dropdowns */}
      <div className="filters">
        <select onChange={(e) => setCategory(e.target.value)} className="selectSection">
          <option value="" className="options-sect"> All Categories</option>
          <option value="Mangalsutra">Mangalsutra</option>
          <option value="Tops">Tops</option>
          <option value="ChainPendants">Chain Pendants</option>
        </select>

        <select onChange={(e) => setPrice(e.target.value)} className="selectSection">
          <option value="">Prices</option>
          <option value="500">Under Rs. 500</option>
          <option value="2000">Under Rs. 2000</option>
          <option value="3000">Under Rs. 3000</option>
          <option value="4500">Under Rs. 4500</option>
        </select>

        <select onChange={(e) => setMetal(e.target.value)} className="selectSection">
          <option value="" >Metals</option>
          <option value="silver">Silver</option>
          <option value="roseGold">Rose Gold</option>
          <option value="oxidisedSilver">Oxidised Silver</option>
        </select>

        <select onChange={(e) => setStyle(e.target.value)} className="selectSection">
          <option value="" >Style</option>
          <option value="everyDay">Every Day</option>
          <option value="office">Office</option>
          <option value="wedding">Wedding</option>
        </select>

    
      </div>

      {/* Display Filtered Products */}
      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.slice(0, 30).map((value) => (
          
            <div key={value.id} className="Product-Card">
              <div>  <Link to={`/product/${value.id}`} key={value.id} className="Product-Link">
                    <img src={value.ProductImg} alt={value.ProductName} /></Link>
              </div>
              <div>
                <h3 id="Product-Price">Rs. {value.Price}  <GoHeart  className="LikedProducts LikedProducts-Gifting"/></h3>
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
  );
};

export default Gifting;
