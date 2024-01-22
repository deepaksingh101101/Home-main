import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'
import Blog from '../../components/blog/Blog'

export default function BlogList() {
  return (<>
  
  <Navbar/>
  
 <Blog/>
<div className='container text-white' style={{minHeight:"40vh"}}>
<div className='col-lg-12'>
      <h2><b>Next Blog:</b> Coming Soon...</h2>
    </div>
    <div className='mt-4 mb-5 w-100 line' style={{ borderTop: '3px solid #FFFFFF' }}></div>
</div>
    <Footer/>
  </>
  )
}
