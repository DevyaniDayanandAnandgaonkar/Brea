import React from 'react'
// import Blog1 from './Blogs/Blog'
import Blog from './Blog'
import Tabs from './CategoriesHome'
import { useState } from 'react'
import { Link } from "react-router-dom";


const Home = () => {

    // Newsletter Subscription Form
    const [data , setData] = useState({
        email: ""
    }) 
    let {email} = data
    let handleChange = (e)=>{
        let {name , value}=e.target;
        setData({...data, [name]:value})
    }

    let handleSubmit = (e)=> {
        e.preventDefault();
        console.log(email);

        setData({
            email:""
        })
    }

    return (
        
    <div className='Home'>
        {/* Banner Section */}
    <div className='HomeBanner HomeBannerFirst'>
    
        {/* <img src="./BannerFirst.jpeg" alt="" /> */}
    </div>
    

    {/* Ctegory Section */}
    <div className='category-section'>
    <div className='cat-wrapper'>
    <div className='category-h1'><h1>Glamour in Every Category</h1></div>

    <div className='items'>

    <div className='box-products'>
    <img src="./DhritiSilverChainPendants/ChainPendants.jpg" alt="ChainPendants" />
    <h2><Link to='/ChainPendants' className='Box-Productsa-H2'>Chain Pendants</Link></h2>
    </div>

    <div  className='box-products'>
    <img src="./DhritiSilverTops/Diamond Blossom Earrings.jpg" alt="Tops" />
    <h2><Link to='/Tops' className='Box-Productsa-H2'>Everyday Tops</Link></h2>
    </div>
        
    <div  className='box-products'>
    <img src="./DhritiSilverMangalsutra/Rose Gold Periwinkle Mangalsutra.jpg" alt="Mangalsutra" />
    <h2><Link to='/Mangalsutra' className='Box-Productsa-H2'>Trendy Mangalsutras</Link></h2>
    </div>
    </div>

    </div>
    </div>
{/* writing template 1. Trending Now 2. Top Picks 3. Forever Shine */}
<div className='TabInfo'><Tabs></Tabs></div>

{/* <div className='Templates'>
    <div className='temp1'>Trending Now</div>
    <div className='temp2'>Top Picks</div>
    <div className='temp3'>Forever Shine</div>
</div> */}
           {/* ///here some dynamic code is remaining */}

           {/* designing Below 2nd banner */}
           {/* Banner Section */}
    <div className=' HomeBannerBlog'>
        {/* <img src="./bannersecond.jpeg" alt="" /> */}
    </div>

    {/* Designing Blog Section */}
    <div className='HomeBlogs'>
  
    <div className='HomeBlogs HomeBlogsnew'><h2 >BREA Blogs</h2></div>
    <div><Blog></Blog></div>

</div>

{/* Newsletter Section */}
<div className='NewsletterWrapper'>
<h2>Our Newsletter</h2>
<p>Get E-mail updates about our latest shop and special offers.</p>

<div className='newsInput'>
<input type="text" placeholder='Email' name="email" value={email} onChange={handleChange}/>
<button onClick={handleSubmit}>SUBSCRIBE</button>
</div>

</div> 
</div>
)
}
export default Home