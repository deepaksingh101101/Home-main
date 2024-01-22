import React from 'react'
import { Link } from "react-router-dom";
import {logo} from '../../assets/assets'
import './Navbar.css'

export default function Navbar() {
  return (
   <>
   <nav className="navbar navbar-expand-lg main">
  <div className="container ">
    <Link className="navbar-brand" to="/"><img src={logo} className='logo' alt='logo'/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <Link className="nav-link text-white active" aria-current="page" to="/">HOME</Link>
        <Link className="nav-link text-white" to="/pricing">PRICING</Link>
        <Link className="nav-link text-white" to="/bloglist">BLOG</Link>
        <Link className="nav-link text-white " to='/contactPage'>CONTACT US</Link>
      </div>
    </div>
  </div>
</nav>
   </>
  )
}
