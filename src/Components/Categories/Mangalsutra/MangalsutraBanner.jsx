import React from 'react'
import { Link } from 'react-router-dom'

const MangalsutraBanner = () => {
    return(
        <>
        <div className='Mangalsutra-Bg Proucts-CateoryWise-Bg'>
            <div className='Mangalsutra-Bg-Wrapper'>
                <h2>Mangalsutra</h2>
                <p>
                <span ><Link to ="/" id="Home-Link">Home / </Link></span> 
                <span id="active-texc"><Link to ="/Mangalsutra" id="HomeNot-Link">Mangalsutra </Link> </span>
                </p>
            </div>
        </div>


        </>
    )
}
export default MangalsutraBanner