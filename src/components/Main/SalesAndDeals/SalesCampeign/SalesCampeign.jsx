import React from 'react';
import './SalesCampeign.css'
const SalesCampeign = () => {
    return (
        <div className='sales-container p-4 rounded'>
            <div className='d-flex justify-content-between heading'>
                <h2 className='fw-semibold'>Sale Campaigns</h2>
                <p className='mt-2 fw-semibold'>All Campaigns</p>
            </div>
            <div className='row'>
                <div className='col-4'>
                    <div className='sales-box rounded'>

                    </div>
                    <h3 className='fw-bold mt-3'>Summer Sales</h3>
                    <p>Only 3 days left</p>
                </div>
                <div className='col-4'>
                    <div className='sales-box rounded'>

                    </div>
                    <h3 className='fw-bold mt-3'>Buy 1 Get 1</h3>
                    <p>56 : 22 : 08 : 23</p>
                </div>
                <div className='col-4'>
                    <div className='sales-box rounded'>

                    </div>
                    <h3 className='fw-bold mt-3'>Welcome Home Furnit… </h3>
                    <p>Only 7 days left</p>
                </div>
            </div>
        </div>
    );
};

export default SalesCampeign;