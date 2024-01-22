import React from 'react'

export default function Blog() {
  return (
    <>
     <div className='container mt-5 text-white' >
  <h1 className='fw-bold'>Blog</h1>
  <div className='row mt-5'>
    <div className='col-lg-8'>
      <h2><b>Day 1:</b> What we're building & welcome to the blog!</h2>
    </div>
    <div className='col-lg-4  d-flex align-items-center justify-content-center mt-2'>
      <p className="d-inline-flex align-items-center gap-1">
        <button className="btn text-white fw-bold " style={{ background: "#FF8794", fontSize: "larger" }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          Start Reading
        </button>
      </p>
    </div>
    <div className='col-12 mt-3'>
      <div className="collapse" id="collapseExample">
        <div className="card card-body col-12" style={{background:"black",fontSize:"20px"}}>
            <p>
            Hi there! Thanks for stopping by and checking out the blog, I'm super excited you're here and I hope you're excited to check out this new tool, ReplyPal when it's ready to launch (in a few short weeks!! As you follow along for the next couple weeks, I am going to be providing blog updates as I continue to build this project. As you can see I am referencing "I", which is because I'm a one person show working to build something that people will find useful when it comes to email.
            </p>
            <p>
            Put simply, here's how ReplyPal will work: Once you sign up, ReplyPal will get integrated directly into your email platform (Gmail or Outlook). Once integrated, when you receive an email, the ReplyPal button will be in the corner of the email when you're ready to type your reply.
            </p>
            <p>
            If you click on the button, ReplyPal will prompt you to choose from a list of a few options of how you want to reply. For example, you can click the option to politely decline, ask for more information, happily accept, etc. Once you choose an option, ReplyPal will provide you with a few prompted, custom tailored responses. It does this by analyzing the incoming email (so yes, it is truly a custom response) and then depending on "how you selected you want to reply, it will provide a few options.
            </p>
            <p>
            Once you select a reply option, it will then put that into your reply (essentially as a draft). From there you can edit the response to be more customized or add/remove any context you would like, or you can simply hit send.
That's it! It's very straightforward, but what I think is going to be an amazing tool to reduce the amount of time people spend replying to emails day to day.
            </p>
            <p>
            I'm super excited for you to follow along on this journey and if you have any feedback, thoughts or would like to chat more please shoot me an email at support@replypal.co. Furthermore, feel free to check out ReplyPal.co to watch the explainer video I put together and sign up to get early access to the platform.
            </p>
            <p>
            Thanks again for being here and I hope you're excited to start automating emails & give yourself time back in your day!
            </p>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}
