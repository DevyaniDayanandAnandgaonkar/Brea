import React from 'react'
import HomeBanner from './HomeBanner'
import CategoriesSection from './CategoriesSection'
import ProductsCategoriesHomeTabs from './ProductsCategoriesHomeTabs'
import HomeBlogBanner from './HomeBlogBanner'
import Newsletter from './Newsletter'
import BlogsOnHome_Section from './BlogsOnHome_Section'

const Home=()=>{
    return(
        <>
        <><HomeBanner></HomeBanner></>
        <><CategoriesSection></CategoriesSection></>
        <><ProductsCategoriesHomeTabs></ProductsCategoriesHomeTabs></>
        <><HomeBlogBanner/></>
        <><BlogsOnHome_Section></BlogsOnHome_Section></>
        <><Newsletter></Newsletter></>
        </>
    )
}
export default Home
