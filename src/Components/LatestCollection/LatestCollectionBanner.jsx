import React from 'react'
import {Link} from 'react-router-dom'

const LatestCollectionBanner = () => {
    return (
        <>
        <div className='Mangalsutra-Bg Proucts-CateoryWise-Bg latestCollectionBanner-Bg '>
            <div className='Mangalsutra-Bg-Wrapper'>
                <h2>Latest Collection</h2>
                <p>
                <span ><Link to ="/" id="Home-Link">Home / </Link></span> 
                <span id="active-texc"><Link to ="/LatestCollection" id="HomeNot-Link">Latest Collection </Link> </span>
                </p>
            </div>
        </div>
        </>
    )
}
export default LatestCollectionBanner