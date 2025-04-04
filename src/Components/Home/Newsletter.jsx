import React from 'react'
import { useState } from 'react'

const Newsletter = () => {
    // Newsletter Subscription Form
    const [data , setData] = useState({
        email: ""
    }) 
    let {email} = data
    let handleChange = (e)=>{
        let {name , value}=e.target;
        setData({...data, [name]:value})
    }

    let handleSubmit = (e)=> {
        e.preventDefault();
        console.log(email);

        setData({
            email:""
        })}
    return (
    <>
    <div className='NewsletterWrapper'>
    <h2>Our Newsletter</h2>
    <p>Get E-mail updates about our latest shop and special offers.</p>

    <div className='newsInput'>
    <input type="text" placeholder='Email' name="email" value={email} onChange={handleChange}/>
    <button onClick={handleSubmit}>SUBSCRIBE</button>
    </div>

    </div>
    </>

       
    )
}
export default Newsletter