import React from 'react'
import "./Blog.css"
import Blog from "./Blog"
import { Link } from 'react-router-dom'

const ParentBlog = () => {
    return (

        <div className='BlogSection'>
            <div className='BlogBanner'> <img src="./Blog_Banner.jpeg" alt="" /></div>
            <div className='BlogTecx'><h2>Our Blogs</h2>
            <p><span ><Link to ="/" id="Home-Link">Home / </Link></span> 


            <span id="active-texc"><Link to ="/ParentBlog" id="HomeNot-Link">Blogs </Link> </span></p>
            </div>
            
            <div> <Blog/></div>
        </div>
    )
}
export default ParentBlog