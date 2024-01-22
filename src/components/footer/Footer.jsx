import React from 'react'
import './Footer.css'
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>

   <div className='container-fluid footer pt-4 ' >
    <h5 className='text-center fw-bold '>ReplyPal, LLC</h5>
    <p className='text-center'>Tampa, FL 33605</p>
    <div className='container '>
    <ul className='d-flex justify-content-center fw-bold flex-wrap'>
    <li><Link className='remove-decoration mx-3 '  to="/">HOME</Link></li>
    <li><Link className='remove-decoration mx-3 ' to="/">PRICING</Link></li>
    <li><Link className='remove-decoration mx-3 ' to="/">BLOG</Link></li>
    <li><Link className='remove-decoration mx-3 ' to="/">CONTACT US</Link></li>
    </ul>
    </div>
    <p className='text-center pb-2 '>@ 2024 ReplyPal. All rights reserved</p>
   </div>
 

    </>
  )
}
