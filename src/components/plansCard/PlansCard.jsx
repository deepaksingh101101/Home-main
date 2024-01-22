import React, { useState } from 'react';
import './PlanCard.css';

export default function PlansCard({ monthlyPlansData }) {
  const [activeIndices, setActiveIndices] = useState(Array(monthlyPlansData.length).fill(false));
  const [values, setValues] = useState(Array(monthlyPlansData.length).fill(0));

  const incNum = (index) => {
    if (values[index] < 10) {
      setValues((prevValues) => {
        const newValues = [...prevValues];
        newValues[index]++;
        return newValues;
      });
    }
  };

  const decNum = (index) => {
    if (values[index] > 0) {
      setValues((prevValues) => {
        const newValues = [...prevValues];
        newValues[index]--;
        return newValues;
      });
    }
  };

  const handleChange = (index, e) => {
    const newValue = parseInt(e.target.value, 10) || 0;
    setValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = newValue;
      return newValues;
    });
  };

  const handleMouseEnter = (index) => {
    setActiveIndices((prevActiveIndices) => {
      const newActiveIndices = [...prevActiveIndices];
      newActiveIndices[index] = true;
      return newActiveIndices;
    });
  };

  const handleMouseLeave = () => {
    setActiveIndices(Array(monthlyPlansData.length).fill(false));
  };

  return (
    <div className='container d-flex justify-content-center  flex-wrap'>
      {monthlyPlansData.map((plan, index) => (
        <div
          key={plan.id}
          className={`card mt-5 mx-4 scale_effect mb-5 ${activeIndices[index] ? 'active' : ''}`}
          style={{
            maxWidth: '20rem',
            background: 'black',
            color: 'white',
            border: '2px solid white',
            zIndex: activeIndices[index] ? 1 : 'auto',
            cursor: 'pointer',
          }}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <div className='card-body mt-4'>
            <h2 className='card-title fw-bold text-center'>{plan.title}</h2>
            <p className='card-text text-center'>
              <span className='h5'>$</span>
              <span className='h1'>{plan.rate}</span>
              <span className='first fw-bold ms-2 mt-2'>/User</span>
              <span className='second fw-bold'>/Month</span>
            </p>
            <p className='text-center fw-bold'>{plan.creditCardRequired}</p>

            <div className='container'>
              <div className='input-group'>
                <div className='input-group-prepend mx-3'>
                  <button
                    className='btn fw-bold'
                    style={{ border: '2px solid white', color: 'white', width: '40px' }}
                    type='button'
                    onClick={() => decNum(index)}
                  >
                    -
                  </button>
                </div>
                <input
                  type='text'
                  className='form-control fw-bold'
                  style={{ background: 'black', color: 'white' }}
                  value={`${values[index]} USER`}
                  onChange={(e) => handleChange(index, e)}
                />
                <div className='input-group-prepend mx-3'>
                  <button
                    className='btn'
                    style={{ border: '2px solid white', color: 'white', width: '40px' }}
                    type='button'
                    onClick={() => incNum(index)}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className='d-flex mt-4 justify-content-center mb-5'>
                <button
                  type='submit'
                  className='btn text-white mt-2 fw-bold'
                  style={{ background: 'black', width: '220px', fontSize: 'larger', border: '2px solid white' }}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
