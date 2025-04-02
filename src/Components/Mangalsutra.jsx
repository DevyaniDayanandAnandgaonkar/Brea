import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import "./Products.css"
import "./Blog.css"
import ProductsData from "../ProductsData.json"
import { Link } from 'react-router-dom'
import { GoHeart } from "react-icons/go";

const Mangalsutra = () => {
 

let [data, setData] =useState(ProductsData);
const [filteredProducts, setFilteredProducts] = useState(ProductsData);
const [Price, setPrice] = useState("");
const [metal, setMetal] = useState("");
// Function to filter products
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
}, [ Price, metal]);

// adding Filter
return (
<div className='Mangalsutra-sect'>
{/* <div className='product-banner'>
<img src="./MangalsutraBanner.jpg" alt="" />
</div> */}
{/* ////////////////// */}
<div className='BlogBanner BlogBanner-Copy-Mang  '> <img src="./DhritiSilverMangalsutra/Two Rings Interconnected Silver Mangalsutra.jpg" alt="" /></div>
<div className='BlogTecx'><h2>Mangalsutra</h2>
<p><span ><Link to ="/" id="Home-Link">Home / </Link></span> 
<span id="active-texc"><Link to ="/Mangalsutra" id="HomeNot-Link">Mangalsutra </Link> </span></p></div>
{/* //////////////////////// */}
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
  filteredProducts.slice(0, 10).map((value) => (
         
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
   
  {/* <div className='Products-Grid'>

    {
    data.map((value)=>{
    return(
    
<div key={value.id} className='Product-Card'>
<div><img src={value.ProductImg} alt="fvsjkhjh" /></div>

<div>
<h3 id='Product-Price'>Rs. {value.Price}</h3>
</div>

<div>
<h2>{value.ProductName}</h2>
</div>

<div><button>Add to Cart</button></div>

</div>
    )
    })
    }
    </div> */}
</div>
)
}

export default Mangalsutra
