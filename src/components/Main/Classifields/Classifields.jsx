import React from 'react';
import './Classifields.css'
const Classifields = () => {
    return (
        <div className='classifields-container mb-5'>
            <h2 className="fw-bold">Classifields</h2>
            <h3 className='fw-bold mt-2 mb-4'>Share your own products</h3>
            <div  className='d-flex justify-content-between'>
                <div className='rounded'  style={{backgroundColor:'#E5E5E9', height:'504px', width:'696px'}}>
                </div>
                <div className='rounded p-4 border d-flex flex-column' style={{height: '504px', width: '336px'}}>
                    <h3 className='fw-bold mb-4'>New in Classifieds</h3>
                    <div className='rounded mb-3' style={{backgroundColor: '#E5E5E9', height: '208px', width: '208px'}}></div>
                    <div className='mt-auto'>
                        <button style={{fontSize:'12px'}} className='fw-bold py-2 px-4 rounded-pill bg-white border'>All New Products</button>
                    </div>
                </div>
                <div className='rounded p-4 border d-flex flex-column' style={{height: '504px', width: '336px'}}>
                    <h3 className='fw-bold mb-4'>Used Products</h3>
                    <div className='rounded mb-3' style={{backgroundColor: '#E5E5E9', height: '208px', width: '208px'}}></div>
                    <div className='mt-auto'>
                        <button className='fw-bold py-2 px-4 rounded-pill bg-white border'>View All</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Classifields;