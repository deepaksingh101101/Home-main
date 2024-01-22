import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import ContactForm from '../../components/contactForm/ContactForm'
// import ContactResponse from '../../components/contactResponse/ContactResponse'
export default function ContactUs() {
  return (
    <>
    <Navbar/>
    <ContactForm/>
{/* Contact response will be displayed after submitting */}
{/* <ContactResponse/> */}
    <Footer/>
    </>
  )
}
