import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import PlansCard from '../../components/plansCard/PlansCard'

export default function Plans() {
  
  const [activeTab, setActiveTab] = useState('monthly'); // 'monthly' or 'yearly' based on your default active tab

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

const monthlyPlansData=[
  {
    id:"_1",
    title:"FREE PLAN",
    rate:"0",
    creditCardRequired:"No Credit Card Required",
  },
  {
    id:"_2",
    title:"INDIVIDUAL PLAN",
    rate:"7.99",
    creditCardRequired:"Billed Monthly",
  },
  {
    id:"_3",
    title:"TEAM PLAN",
    rate:"0",
    creditCardRequired:"Billed Monthly",
  },

]

  return (
    <>
    <Navbar/>
    <div className='container text-white mt-3'>
    <div className='row'>

    <div className='d-flex justify-content-center'>
   <div className='col-lg-4 '>
    <h1 className='text-center'>BUILT FOR EFFICIENCY WITH YOU IN MIND</h1>
   </div>
   </div>

  <div className='d-flex justify-content-center'>
  <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" style={{}} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">MONTHLY</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">YEARLY</button>
  </li>
</ul>
  </div>
  <div className="tab-content" id="pills-tabContent">
     {/* Monthly plan */}
  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0"><PlansCard monthlyPlansData={monthlyPlansData}/></div>
   {/* Yearly plan */}
  {/* <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0"><PlansCard  monthlyPlansData={monthlyPlansData}/></div> */}
  </div>

    </div>
    </div>
    <Footer/>
    </>
  )
}
