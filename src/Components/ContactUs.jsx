import React from 'react'
import "./Blog.css"
import { Link } from 'react-router-dom'
import {  FaLocationDot , FaPhone } from "react-icons/fa6";
import { useState } from 'react';

const ContactUs = () => {
// Form Fields Section

//Step-1:- Initialise State Objects & Step-2:- Add name & value to form element
let [data , setData] = useState( {
    fullName: "",
    emailAddress: "",
    phoneNo: "",
    type: "",
    message: ""
    
} ) 

let {fullName , emailAddress , phoneNo , type , message} = data;
// ---------------
// State for success message
const [submitted, setSubmitted] = useState(false);
  

// -------------
//step 3:- State Update add events like HandleChange Events or etc

let handleChange = (e) => {
let{name , value}= e.target;
setData({...data, [name]:value})
}

//Step-4 Add Submit Event 

let handleSubmit = (e) => {
    e.preventDefault();
    console.log(fullName , emailAddress , phoneNo , type , message);


    // Show success message
    setSubmitted(true);

    setData ({
        fullName: "",
        emailAddress: "",
        phoneNo: "",
        type: "",
    message: ""
    })

 // Hide success message after 5 seconds
 setTimeout(() => setSubmitted(false), 5000);

}



// -----------------------------------
    return (
       <div className='ContactUs-Section'>
       <div className='BlogBanner'> <img src="./ContactUs.jpeg" alt="" /></div>
       <div className='BlogTecx'><h2>Contact Us</h2>
            <p><span ><Link to ="/" id="Home-Link">Home / </Link></span> 
            <span id="active-texc"><Link to ="/ContactUs" id="HomeNot-Link">Contact Us </Link> </span></p>
            </div>

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


        {/* Creatting Form  */}

<div className='FormSect'>
    <h2>We would like hearing from you!</h2>

<form >
<div className='FormWrapper'>   

<div className='twoFieldsForm-Wrapper'>
<div className='singleFieldForm-Wrapper'>      
<label htmlFor="fullNameViewer">Full Name*</label>
<input type="text" placeholder='Enter Full Name' name="fullName" value={fullName}  onChange={handleChange} required/>
</div> 

<div className='singleFieldForm-Wrapper'>    
<label htmlFor="emailAddressViewer">Email Address*</label>
<input type="email" placeholder='Enter Email Address' name="emailAddress" value={emailAddress} onChange={handleChange} required/> 
</div> 
</div>

<div className='twoFieldsForm-Wrapper'>
<div className='singleFieldForm-Wrapper'> 
<label htmlFor="phoneNoViewer">Phone Number*</label>
<input type="text"  placeholder='Enter Mobile No' name="phoneNo" value={phoneNo} onChange={handleChange} required/>
</div> 

<div className='singleFieldForm-Wrapper'> 
<label htmlFor="enquiryType">Enquiry Type</label>
<select name="type" id="subject" value={type} onChange={handleChange}>
<option value="chooseOpt">-Please Choose an Option-</option>
    <option value="orderRelated">Order Related</option>
    <option value="productRelated">Product Related</option>
    <option value="generalQuery">General Query</option>
</select>
</div> 
</div>

<div className='singleFieldForm-Wrapper'> 
<label htmlFor="messageText">Message</label>
<textarea name="message" id="message" cols="20" rows="5" placeholder='Enter Your Message' value={message} onChange={handleChange}></textarea>
</div> 

<div className='singleFieldForm-Wrapper'> 
<button onClick={handleSubmit }
>SUBMIT</button>
</div>

</div> 

        </form>

        </div>
           {/* Success message */}
      {submitted && <p className="success-message">Form submitted successfully!</p>}
    {/* <h3>fullName = {fullName}</h3>
    <h3>email= {emailAddress}</h3>
    <h3>PhoneNo = {phoneNo}</h3>
    <h3>EnquiryType = {type}</h3>
    <h3>Message=</h3> */}
{/* Using Map */}

    <div className='mapWrapper' >
        
        <iframe src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d486535.3162117068!2d73.9821267!3d17.6947598!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bc239c4d70698a9%3A0x5a303706466866fd!2sMANGALMURTI%20JWELL%20PALACE%20SHOP%20NO%2039%20ZDP%20COLONY%20SHAHUPURI%20SATARA%20002%20Satara%2C%20Maharashtra%20415002!3m2!1d17.6947598!2d73.9821267!5e0!3m2!1sen!2sin!4v1743348064431!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        

    </div>
       </div>
       
    )
}
export default ContactUs