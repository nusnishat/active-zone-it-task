import React from 'react';
import './Deals.css';

const Deals = () => {
    return (
        <div className='deals-container row rounded p-4'>
            <div className='d-flex justify-content-between mb-2'>
                    <h2 className='fw-semibold'>Deals of the day</h2>
                    <span className='heading-span d-block mt-2 fw-semibold' style={{color:'#0B80FD',fontSize:' 12px'}}>View All Deals </span>
            </div>
            <div className='col-8'>
                <div className='row'>
                    <div className='col-6 deal-box-1 rounded'>
                    </div>
                    <div className='col-6 mt-2 ms-2'>
                        <button className='rounded-pill fw-bold px-4 py-2'>Top Deals</button>
                        <h3 className='fw-bold mt-4'>Smartphones</h3>
                        <span className='mt-2'>Samsung, OnePlus, Nokia, Motorola & more</span>
                        <span className='d-block mt-4 fw-bold'>Under $200.00</span>
                        <span className='mt-2 fw-bold'>Free Gifts</span>
                    </div>
                </div>
            </div>
            <div className='col-4'>
                <div className='d-flex'>
                    <div className='deal-box-2 rounded'>
                    </div>
                    <div className='ms-3'>
                        <span>Headphones</span>
                        <span className='d-block fw-bold'>From $0.99</span>
                    </div>
                </div>
                <div className='d-flex mt-3'>
                    <div className='deal-box-2 rounded'>
                    </div>
                    <div className='ms-3'>
                        <span>Women Tops</span>
                        <span className='d-block fw-bold'>Up to 40% discount</span>
                    </div>
                </div>
                <div className='d-flex mt-3'>
                    <div className='deal-box-2 rounded'>
                    </div>
                    <div className='ms-3'>
                        <span>Kid’s bicycle <br /> (girls) & accessories</span>
                        <span className='d-block fw-bold'>Up to 60% discount</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Deals;
