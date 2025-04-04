import React from 'react'
import { GoGoal, GoEye } from "react-icons/go";

const AboutOurStory = () => {
    return(
        <>
                <div className='OurStorySection'>
            <h2>Our <span id="dual-color">Story</span> </h2>
            <p>At BREA, we deeply appreciate the importance of jewelry in your life. BREA operates as an online establishment committed to offering an array of accessible jewelry options, including unique pieces, lightweight designs, and exquisite silver and diamond jewelry.</p> <br />

            <p>Through BREA, our mission extends beyond online commerce. We aspire to champion talented and creative women, not only by conducting business through our online platform but also by establishing physical stores to serve our valued customers. In doing so, we aim to empower women by providing them with opportunities to excel and contribute to society.</p> <br />

            <p>In today's world, women are making significant strides in various fields, and our dedication is to support and propel them even further. We firmly believe in women's rights and their capacity to establish businesses and assert their identities. Our unwavering commitment is to facilitate and nurture these aspirations.</p>

        </div>

        <div className='VisionMision-Section'>

            <div className='vm-box'>
            <GoEye  className='aboutUs-icons'/> 
            <h3>Our Vision</h3>
            <p>To be the global beacon of aspiration through exquisite silver & diamond jewellery, celebrating diversity and crafting timeless pieces that embody beauty, elegance, and joy</p>

            </div>

            <div className='vm-box'>
            <GoGoal  className='aboutUs-icons'/>
            <h3>Our Mission</h3>
            <p>Setting new standards in elegance and inspiration through exceptional quality, innovation, and exceeding customer experiences with our diverse silver and diamond jewellery.</p>
            </div>

        </div>
        </>
    )
}
export default AboutOurStory