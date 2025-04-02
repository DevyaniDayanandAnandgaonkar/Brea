import React from 'react'
import {  FaYoutube,  FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram} from "react-icons/fa6";
import { Link } from 'react-router-dom';
// import ChainPendants from "./ChainPendants"

import "./Footer.css"

const Footer = () => {
return (
<div className='FooterSection'>
<div className='FooterWrapper'>

<div className='FooterSect1'>
    <div><Link to="/"><img src="./BreaLogo.png" alt="" /></Link></div>
    <div className='h3'><h3>BREA</h3></div>
    <div className='SocialMedia'>
    <li><FaFacebookF/></li>
    <li>< FaTwitter /></li>
    <li><FaLinkedinIn /></li>
    <li><FaInstagram/></li>
    <li><FaYoutube /></li>
    </div>
    
</div>

<div className='FooterSect2'>
    <div className='h3'><h3>Product Categories</h3></div>
    <div>
    <li> <Link to="/ChainPendants" className='F-Links'>Chain Pendants</Link></li>
    <li><Link to="/Tops" className='F-Links'>Tops</Link></li>
    <li> <Link to="/Mangalsutra" className='F-Links'>Mangalsutra</Link></li>
       
    </div>
</div>

<div className='FooterSect3'>
<div className='h3'><h3>Quick Links</h3></div>
    <div>
    
        <li><Link to="/" className='F-Links'>Home</Link></li>
        <li><Link to="/AboutUs" className='F-Links'>About Us</Link></li>
        {/* <li><Link to="/Blog" className='F-Links'>Blogs</Link></li> */}
        <li><Link to="/ParentBlog" className='F-Links'>Blogs</Link></li>
        <li><Link to="/ContactUs" className='F-Links'>Contact Us</Link></li>
        
        </div>
</div>

<div className='FooterSect4'>
    <div className='h3'><h3>Policies</h3></div>
    <div>
     
        <li><Link to="/Terms_Conditions" className='F-Links' >Terms & Conditions</Link></li>
        <li><Link to="/Shipping_ReturnPolicy" className='F-Links'>Shipping & Return Policy</Link></li>
        <li><Link to="/PrivacyPolicy" className='F-Links'>Privacy Policy</Link></li>
        
       
    </div>
</div>

<div className='FooterSect5'>
<div><h3>Contact Us</h3></div>
<div className='FooterSect-low'>
   
    <li>
    <span className='span'>Address: </span>
    
    <span>383B, Plot No. 39, Mangalmurti Jwell Palace, Shahupuri Chawk, Satara City, Satara, Maharashtra, 415002.</span>
    </li>

    <li>
    <span className='span'>Phone: </span>
    <span>+91 9422401209</span>
    </li>

    <li>
    <span className='span'>Email: </span>
    <span>care@brea.co.in</span>
    </li>
    
    </div>
</div>

</div>

<div className='CopyRight'>
<p>Copyright 2024, All Rights Reserved | Design & Developed by <a href="https://vm3techsolution.com/" id="vm3Link">VM3 Tech Solutions LLP</a> </p>
</div>

</div>
       
        
     
    )
}
export default Footer