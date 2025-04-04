import React from 'react'
import {Link} from 'react-router-dom'
const BlogsBanner = () => {
    return (
        <>
        <div className='Mangalsutra-Bg Proucts-CateoryWise-Bg BlogBanner-Bg '>
            <div className='Mangalsutra-Bg-Wrapper'>
                <h2>Our Blogs</h2>
                <p>
                <span ><Link to ="/" id="Home-Link">Home / </Link></span> 
                <span id="active-texc"><Link to ="/Blogs" id="HomeNot-Link">Our Blogs </Link> </span>
                </p>
            </div>
        </div>
        </>
    )
}
export default BlogsBanner
