import React from 'react'
export default function ContactForm() {
  return (
    <>
<form>
  <div className="container text-white mt-5">
    <div className="">
      <h1>Contact Us</h1>
    </div>

    <h3 className='mt-4'>Name</h3>
    <div className="row">
      <div className="col-lg-6 my-1">
        <label htmlFor="firstName">First Name</label>
        <input className="form-control" type="text" id="firstName" aria-label="First Name" />
      </div>
      <div className="col-lg-6 my-1">
        <label htmlFor="lastName">Last Name</label>
        <input className="form-control" type="text" id="lastName" aria-label="Last Name" />
      </div>

      <div className="col-lg-12 my-1">
        <label htmlFor="email">Email</label>
        <input className="form-control" type="email" id="email" aria-label="Email" />
      </div>

      <div className="col-lg-12 my-1">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">How Can We Help?</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
      </div>

      <div className="col-lg-12 my-3">
        <button type="submit" className="btn text-white fw-bold" style={{ background: "#FF8794", width: "150px", fontSize: "larger" }}>SUBMIT</button>
      </div>
    </div>
  </div>
</form>


    </>
  )
}
