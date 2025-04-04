import React from 'react'
import { Link } from 'react-router-dom'

const CategoriesSection = () => {
    return(
    <>
    {/* Ctegory Section */}
    <div className='category-section'>
    <div className='cat-wrapper'>
    <div className='category-h1'><h1>Glamour in Every Category</h1></div>

    <div className='items'>

    <div className='box-products'>
    <img src="./DhritiSilverChainPendants/ChainPendants.jpg" alt="ChainPendants" />
    <h2><Link to='/ChainPendants' className='Box-Productsa-H2'>Chain Pendants</Link></h2>
    </div>

    <div  className='box-products'>
    <img src="./DhritiSilverTops/Diamond Blossom Earrings.jpg" alt="Tops" />
    <h2><Link to='/Tops' className='Box-Productsa-H2'>Everyday Tops</Link></h2>
    </div>
        
    <div  className='box-products'>
    <img src="./DhritiSilverMangalsutra/Rose Gold Periwinkle Mangalsutra.jpg" alt="Mangalsutra" />
    <h2><Link to='/Mangalsutra' className='Box-Productsa-H2'>Trendy Mangalsutras</Link></h2>
    </div>
    </div>

    </div>
    </div>
    </>
    )

}
export default CategoriesSection