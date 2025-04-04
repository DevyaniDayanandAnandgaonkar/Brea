import React from 'react'
import { useState } from "react";
// import "./CategoriesHome.css"
// import "./Products.css"
import ProductsData from '../ProductsData/ProductsData.json'
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";


const ProductsCategoriesHomeTabs = () => {
const [activeTab, setActiveTab] = useState("tab2"); // Manages active tab
const navigate = useNavigate();
function CategoryMangalsutra () {
navigate("/Mangalsutra");}

function CategoryChainPendants () {
navigate("/ChainPendants");}

function CategoryTops () {
navigate("/Tops");}

//for Tops products
let [data, setData] =useState(ProductsData);
  useEffect(() => {setData(ProductsData.slice(21, 25)); }, [])

// for Mangalsutra Products
 let [data1, setData1] =useState(ProductsData);
  useEffect(() => {setData1(ProductsData.slice(1, 5)); }, [])

// for ChainPendants Products
let [data2, setData2] =useState(ProductsData);
  useEffect(() => {setData2(ProductsData.slice(11, 15)); }, [])


return (
<>
<div className="tabs-container">
<div className="tabs">
<div  className="tempp">
  <button id="stat-btn" className={activeTab === "tab1" ? "active" : "notActiveMe"} onClick={() => setActiveTab("tab1")}>Trending Now</button></div>

<div  className="tempp"><button id="stat-btn-2"  className={activeTab === "tab2" ? "active" : "notActiveMe"} onClick={() => setActiveTab("tab2")}>Top Pick</button></div>

<div className="tempp"><button  id="stat-btn-3" className={activeTab === "tab3" ? "active" : "notActiveMe"} onClick={() => setActiveTab("tab3")}>Forever Shine</button></div>
</div>
  
{/* Tab Content */}
<div className="tab-content">
{activeTab === "tab1" && 
<div className="tab-Wapper">
<div className="bg-container">
<h2>Tradition Meets Elegance</h2>
<p>Redefining tradition with a modern touch!</p>
<button onClick={CategoryMangalsutra}>Shop Now</button>
</div>

{/* Adding Products of Tops */}
<div className=' homeProductCat-Grid'>{data1.map((value)=>{
return(
<div key={value.id} className='Product-Card-HP'>
<img src={value.ProductImg} alt="fvsjkhjh" />
<h2>{value.ProductName}</h2>
</div>
)})}
</div>
</div>}

{activeTab === "tab2" && 
<div className="tab-Wapper">
<div className="bg-container bg-container-2 overlay">
<h2>Elegant Tops for Every Occasion</h2>
<p>Elevate your style with our exquisite collection of tops</p>
<button onClick={CategoryTops}>Shop Now</button>
</div>

{/* Adding Products of Tops */}
<div className=' homeProductCat-Grid'>{data.map((value)=>{
return(
<div key={value.id} className='Product-Card-HP'>
<img src={value.ProductImg} alt="fvsjkhjh" />
<h2>{value.ProductName}</h2>
</div>
)})}
</div>
</div>}

{activeTab === "tab3" && 
<div className="tab-Wapper">
<div className="bg-container bg-container-3">
<h2>Celebrate Every Moment in Style</h2>
<p>Express yourself with a personalized chain pendant</p>
<button onClick={CategoryChainPendants}>Shop Now</button>
</div>

{/* Adding Products of Tops */}
<div className=' homeProductCat-Grid'>{data2.map((value)=>{
return(
<div key={value.id} className='Product-Card-HP'>
<img src={value.ProductImg} alt="fvsjkhjh" />
<h2>{value.ProductName}</h2>
</div>
)})}
</div>
</div>
}
</div>
</div>
</>
);
};

export default ProductsCategoriesHomeTabs;