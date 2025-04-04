import React from 'react'
import {Link} from 'react-router-dom'

const BestOfBreaBanner = () => {
    return (
        <>
        <div className='Mangalsutra-Bg Proucts-CateoryWise-Bg BestBreaBanner-Bg '>
            <div className='Mangalsutra-Bg-Wrapper'>
                <h2>Best of Brea</h2>
                <p>
                <span ><Link to ="/" id="Home-Link">Home / </Link></span> 
                <span id="active-texc"><Link to ="/BestOfBrea" id="HomeNot-Link">Best of Brea </Link> </span>
                </p>
            </div>
        </div>
        </>
    )
}
export default BestOfBreaBanner