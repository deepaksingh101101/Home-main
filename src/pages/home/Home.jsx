import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import './Home.css'
import Card from '../../components/card/Card'
import {video} from '../../assets/assets'
export default function Home() {
const cardData=[
    {
        id:"card_1",
        title:"FREE FOR LIFE",
        para:"Enjoy the power of ReplyPal for FREE, allowing you to spend up to 300 emails per month at no cost. Our goal is to bring the power of productivity accessible to all!"
    },
    {
        id:"card_2",
        title:"CUSTOM REPLY",
        para:"Our intuitive AI allows you to choose reply style & crafts a custom response by analyzing the incoming email. No more cookie cutter responses!"
    },
    {
        id:"card_3",
        title:"OUR TEAM",
        para:"Our small team is dedicated to delivering you a great product. Choosing us supports independent creators, not big corporations. Thank you for your invaluable support!"
    },
]


  return (
   <>
    <Navbar/>
    {/* Main Body Started */}


    {/* First Section */}
    <div className='main pt-5'>
    <div className='container'>
        <div className='row'>
            <div className='col-12 col-lg-6 d-flex flex-column align-items-center'>
                <h1 className='text-center main_para text-white'>AUTOMATE CUSTOM EMAIL REPLIES AT THE TOUCH OF A BUTTON</h1>
                <button className=' main_btn mt-4 mb-4'>Get Started For Free!</button>
            </div>
            <div className='col-12 col-lg-6'>
                <div className='d-flex justify-content-center'>
                    <video width="500" height="300" className='video_responsive' controls>
                        <source src={video} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    </div>
    </div>

{/* Second Section */} 
<div className='section2 pt-5'>
<div className='container  text-center'>
<h1 className='display-4 fw-normal pb-3'>Our mission is to automate your email experience with a personalized touch.</h1>
<h2 className='pt-3  sec2_para2 fw-light'>Effortlessly generate tailored replies by analyzing incoming emails with a single click. Experience the power of ReplyPal for <b className='fw-bold'>FREE.</b> Your ultimate email efficiency tool!</h2>
</div>
</div>


{/* Third Section */}
<div className='section3 pt-5 '>
<Card cardData={cardData}/>
</div>


{/* Fourth Section */}
<div className='section4 mt-5 mb-5'>
<div className='container'>
<div className='row d-flex justify-content-center'>
<button className='last_btn mb-5'>Try ReplyPal For Free!</button>
</div>
</div>
</div>

    <Footer/>
   
   </>
  )
}
