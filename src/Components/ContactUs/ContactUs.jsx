import React from 'react'
import ContactUsBanner from './ContactUsBanner'
import ContactUs_Boxes from './ContactUs_Boxes'
import ContactUs_Form from './ContactUs_Form'
import ContactUs_Map from './ContactUs_Map'
const ContactUs = () => {
    return (
        <>
        <ContactUsBanner></ContactUsBanner>
        <ContactUs_Boxes></ContactUs_Boxes>
        <ContactUs_Form></ContactUs_Form>
        <ContactUs_Map></ContactUs_Map>
        </>
    )
}
export default ContactUs