import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GetAnApple.css'
const GetAnApple = () => {
  return (
    <div className="mb-5 get-an-apple-container p-4 rounded">
      <div className="row">
        {/* Large box on the left */}
        <div className="col-lg-6">
          <div className="rounded" style={{ width:'640',height: '248px', backgroundColor:'#E5E5E9'}}>
          </div>
        </div>

        {/* Right section with heading, description, countdown, and button */}
        <div className="col-lg-6 d-flex flex-column justify-content-center">
          <h1 className="mb-3 fw-bold">Get an Apple</h1>
          <span className="d-block mb-4">Hurry up and get up to 20% discount on selected Apple Devices</span>
          <div className="d-flex mb-3">
            <div className="me-4 bg-white px-3 pt-2 rounded text-center">
              <h2 className="fw-bold">120</h2>
              <p>Days</p>
            </div>
            <div className="me-4 bg-white px-3 pt-2 rounded text-center">
              <h2 className="fw-bold">120</h2>
              <p>Hours</p>
            </div>
            <div className="me-4 bg-white px-3 pt-2 rounded text-center">
              <h2 className="fw-bold">50</h2>
              <p>Min</p>
            </div>
            <div className="text-center bg-white px-3 pt-2 rounded">
              <h2 className="fw-bold">120</h2>
              <p>Second</p>
            </div>
          </div>
          <div>
           <button className="rounded px-4 py-2 mt-3 fw-bold">Go Shopping</button>
          </div>
        </div>
      </div>

      {/* Small cards section */}
      <div className="d-flex justify-content-between mt-5">
        {[1, 2, 3, 4, 5].map((item, index) => (
          <div key={index} style={{backgroundColor:'#E5E5E9', width:'248px'}} className='d-flex p-4 rounded'>
            <div className='rounded' style={{backgroundColor:'#FAFAFC', width:'80px', height:'80px'}} >

            </div>
            <div className='ms-3'>
                <p className='text-black '>Kid’s bicycle (girls) &  accessories</p>
                <p className='text-black fw-bold'> Upto 60% discount</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetAnApple;
