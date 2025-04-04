import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Components/ContactUs/ContactUs'
import Blogs from './Components/Blogs/Blogs'
import Mangalsutra from './Components/Categories/Mangalsutra/Mangalsutra';
import ChainPendants from './Components/Categories/ChainPendants/ChainPendants';
import Tops from './Components/Categories/Tops/Tops'
import LatestCollection from './Components/LatestCollection/LatestCollection'
import BestOfBrea from './Components/BestOfBrea/BestOfBrea'
import Gifting from './Components/Gifting/Gifting'

import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy'
import Shipping_Return_policy from './Components/Shipping&ReturnPolicy/Shipping_Return_policy'
import Terms_Conditions from './Components/Terms_Conditions/Terms_Conditions'

import "./App.css"
import SingleBlogDisplay from './Components/Blogs/SingleBlog_display';
import SingleProductDisplay from './Components/ProductsDisplayStructure/SingleProductDisplay';

const App = () => {
  return (
    <Router>
      <>
        <Header />

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/contactus"  element={<ContactUs/>}/>
        <Route path="/blogs" element={<Blogs/>} />

        <Route path="/mangalsutra" element={<Mangalsutra/>} />
        <Route path="/chainpendants" element={<ChainPendants/>} />
        <Route path="/tops" element={<Tops/>} />

        <Route path="/latestcollection" element={<LatestCollection/>} />
        <Route path="/bestofbrea" element={<BestOfBrea/>} />
        <Route path="/gifting" element={<Gifting/>} />

        <Route path="/Terms_Conditions" element={<Terms_Conditions/>} />
        <Route path="/Shipping_Return_policy" element={<Shipping_Return_policy/>} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} />
      
        <Route path="/Blogs/:id" element={<SingleBlogDisplay></SingleBlogDisplay>}></Route>
        <Route path="/product/:id" element={<SingleProductDisplay></SingleProductDisplay>}></Route>
        </Routes>

        <Footer />
      </>
    </Router>
  );
};

export default App;
