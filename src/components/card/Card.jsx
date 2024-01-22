import React from 'react'



export default function Card({ cardData }) {
    return (
      <div className='container d-flex justify-content-center flex-wrap '>
        {cardData.map((card, index) => (
          <div className="card col-lg-3 mx-4 text-white my-3" style={{background:"#D5717C"}} key={index}>
            <div className="card-body">
              <h3 className="card-title fw-bold  text-center">{card.title}</h3>
              <p className="card-text text-center " style={{ fontSize:"1.45rem"}}>{card.para}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  