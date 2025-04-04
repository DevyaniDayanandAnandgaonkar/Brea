import React from 'react'
import { Link } from 'react-router-dom'

const ChainPendantsBanner = () => {
    return (
        <>
         <div className='ChainPendants-Bg Proucts-CateoryWise-Bg'>
            <div className='Mangalsutra-Bg-Wrapper'>
                <h2>Chain Pendants</h2>
                <p>
                <span ><Link to ="/" id="Home-Link">Home / </Link></span> 
                <span id="active-texc"><Link to ="/ChainPendants" id="HomeNot-Link">Chain Pendants </Link> </span>
                </p>
            </div>
        </div>
        </>
    )
}
export default ChainPendantsBanner