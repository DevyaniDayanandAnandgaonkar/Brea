import React from 'react'
import {  FaLocationDot , FaPhone } from "react-icons/fa6";

const ContactUs_Boxes = () => {
    return (
        <>
        <div className='locationBoxes'>

<div className='locationBox'>

 <FaLocationDot className="contact-location-icon"></FaLocationDot>
 <h4>Branch 1</h4>
 <p>Powai Naka, Near IDBI Bank , Satara,415001</p>
 <span id="contact-icon1"><FaPhone></FaPhone><span  id="phone-1">+91 9421326055</span></span>

</div>

<div className='locationBox'>

<FaLocationDot className="contact-location-icon"></FaLocationDot>
 <h4>Branch 2</h4>
 <p>Budhwar Peth,Opp. Chhatrapati Shivaji Maharaj Cloth Market, Karad 415110</p>
 <span id="contact-icon2"><FaPhone></FaPhone> <span id="phone-2">+91 8824466669</span></span>

</div>

<div className='locationBox'>
 
<FaLocationDot className="contact-location-icon"></FaLocationDot>
 <h4>Main Branch</h4>
 <p>383B, Plot No. 39, Mangalmurti Jwell Palace, Shahupuri Chawk, Satara city, Satara, Maharashtra, 415002.</p>
 <span id="contact-icon3"><FaPhone></FaPhone><span id="phone-3">+91 9422401209</span></span>
 
 </div> 
</div>   

        </>
    )
}
export default ContactUs_Boxes