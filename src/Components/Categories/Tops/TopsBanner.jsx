import React from 'react'
import { Link } from 'react-router-dom'

const TopsBanner = () => {
    return (
        <>
         <div className='Tops-Bg Proucts-CateoryWise-Bg '>
            <div className='Mangalsutra-Bg-Wrapper'>
                <h2>Tops</h2>
                <p>
                <span ><Link to ="/" id="Home-Link">Home / </Link></span> 
                <span id="active-texc"><Link to ="/Tops" id="HomeNot-Link">Tops </Link> </span>
                </p>
            </div>
        </div>
        </>
    )
}
export default TopsBanner