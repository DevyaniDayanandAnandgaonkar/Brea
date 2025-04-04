import React from 'react'
import { Link } from 'react-router-dom'

const GiftingBanner = () => {
    return(
        
        <div className='Mangalsutra-Bg Proucts-CateoryWise-Bg GiftingBannerBg'>
            <div className='Mangalsutra-Bg-Wrapper'>
                <h2>Gifting</h2>
                <p>
                <span ><Link to ="/" id="Home-Link">Home / </Link></span> 
                <span id="active-texc"><Link to ="/Gifting" id="HomeNot-Link">Gifting </Link> </span>
                </p>
            </div>
        </div>
    )
}
export default GiftingBanner