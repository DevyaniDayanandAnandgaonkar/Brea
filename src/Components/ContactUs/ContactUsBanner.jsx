import React from 'react'
import {Link} from 'react-router-dom'

const ContactUsBanner = () => {
    return (
        <>
        <div className='Mangalsutra-Bg Proucts-CateoryWise-Bg ContactUs-Bg '>
            <div className='Mangalsutra-Bg-Wrapper'>
                <h2>Contact Us</h2>
                <p>
                <span ><Link to ="/" id="Home-Link">Home / </Link></span> 
                <span id="active-texc"><Link to ="/ContactUs" id="HomeNot-Link">Contact Us </Link> </span>
                </p>
            </div>
        </div>
        </>
    )
}
export default ContactUsBanner