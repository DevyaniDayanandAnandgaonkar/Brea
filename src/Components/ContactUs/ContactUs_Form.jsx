import React from 'react'
import { useState } from 'react';

const ContactUs_Form = () => {
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
return(

<>
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
<div/>
</div>
</>     
)
}
export default ContactUs_Form