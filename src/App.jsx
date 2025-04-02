import React from 'react'
import Header from './Components/Header';
import Home from './Components/Home';
import Mangalsutra from './Components/Mangalsutra';
import ChainPendants from './Components/ChainPendants';
import Tops from './Components/Tops';
import Blog from './Components/Blog'
import Footer from './Components/Footer'
import AboutUs from './Components/AboutUs'
import ContactUs from './Components/ContactUs'
import Terms_Conditions from './Components/Terms_Conditions';
import Shipping_ReturnPolicy from './Components/Shipping_ReturnPolicy';
import PrivacyPolicy from './Components/PrivacyPolicy';
import BlogPage from "./Components/BlogPage";
import ParentBlog from './Components/ParentBlog';
import "./App.css"

// import ProductsData from "./ProductsData.json";
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import BestOfBrea from './Components/BestOfBrea';
import LatestCollection from './Components/LatestCollection';
import Gifting from './Components/Gifting';
import CategoriesHome from './Components/CategoriesHome'
import ProductPage from './Components/ProductPage';
// import { useState } from 'react';
// import { CartContext } from './Context/cartContext';



const App = () =>  {
  
    const router = createBrowserRouter([
        {
            path: "/",
            element: <><Header /><Home />  <Footer /></>,
        },
        {
            path: "/Mangalsutra",
            element: <><Header /><Mangalsutra />  <Footer /></>,
        },
        {
            path: "/ChainPendants",
            element: <><Header /><ChainPendants /><Footer /></>,
        },
        {
            path: "/Tops",
            element: <><Header /><Tops />  <Footer /></>,
        },
        {
            path: "/Blog",
            element: <><Header /><Blog />  <Footer /></>
        },
        {
            path: "/blog/:id",
            element: <><Header /><BlogPage /> <Footer /></>,
        },
        {
            path: "/AboutUs",
            element: <><Header/><AboutUs/><Footer/></>
        },
        {
            path: "/ContactUs",
            element: <><Header/><ContactUs/><Footer/></>
        },
        {
            path: "/Terms_Conditions",
            element: <><Header/><Terms_Conditions/><Footer/></>
        },
        {
            path : "/Shipping_ReturnPolicy",
            element: <><Header/><Shipping_ReturnPolicy/><Footer/></>
        },
        {
            path: "/PrivacyPolicy",
            element: <><Header/><PrivacyPolicy/><Footer/></>
        },
        {
            path: "/ParentBlog",
            element: <><Header/><ParentBlog /><Footer/></>
        },
        {
            path: "/BestOfBrea",
            element: <><Header/><BestOfBrea /><Footer/></>
        },
        {
            path: "/LatestCollection",
            element: <><Header/><LatestCollection /><Footer/></>
        },
        {
            path: "/Gifting",
            element: <><Header/><Gifting /><Footer/></>
        },
        {
            path: "/CategoriesHome",
            element: <><CategoriesHome></CategoriesHome></>
        },
        {
            path: "/product/:id",
            element: <><ProductPage /></>
        },
       
    ])
    return (
       <>
       <RouterProvider router={router} />
       

        </>
    );
}
export default App