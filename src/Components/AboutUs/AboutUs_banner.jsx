import React from 'react'
import { Link } from 'react-router-dom'

const AboutUs_banner = () => {
    return (
        <>
        <div className='Mangalsutra-Bg Proucts-CateoryWise-Bg AboutUsBanner-Bg '>
                    <div className='Mangalsutra-Bg-Wrapper'>
                        <h2>About BREA</h2>
                        <p>
                        <span ><Link to ="/" id="Home-Link">Home / </Link></span> 
                        <span id="active-texc"><Link to ="/AboutUs" id="HomeNot-Link">About Brea</Link> </span>
                        </p>
                    </div>
                </div>
        </>
    )
}
export default AboutUs_banner