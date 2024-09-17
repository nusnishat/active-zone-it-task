import React from 'react';

import './Actions.css'
const Actions = () => {
    const items = [
        {
            id:1,
            name:"Women's corner"
        },
        {
            id:2,
            name:"Women's corner"
        },
        {
            id:3,
            name:"Women's corner"
        },
    ]
    return (
        <div className='actions-container mb-5'>
            <h2 className="fw-bold">Actions</h2>
            <h3 className='fw-bold mt-2 mb-4'>Bid, Win, Smile: Your Ultimate Auction Experience</h3>
            <div className='d-flex justify-content-between'>
                <div className='rounded'  style={{backgroundColor:'#E5E5E9', height:'504px', width:'456px'}}>
                </div>
                <div>
                    <div className='rounded' style={{backgroundColor:'#E5E5E9', height:'240px', width:'456px'}}>
                    </div>
                    <div className='rounded mt-4' style={{backgroundColor:'#E5E5E9', height:'240px', width:'456px'}}>
                    </div>
                </div>
                <div>
                    <div className='rounded p-4' style={{backgroundColor:'#FAFAFC', height:'240px', width:'456px'}}>
                        <h3 className='mb-3 fw-bold'>Actions About To End</h3>
                        <div className='d-flex justify-content-between'>
                        {
                            items.map(item =>
                                <div key={item.id}>
                                    <div className='rounded' style={{backgroundColor:'#E5E5E9', height:'120px', width:'120px'}}></div>
                                    <span className='mt-2 fw'>{item.name}</span>
                                </div>
                            )
                        }
                        </div>
                    </div>
                    <div className='rounded mt-4 p-4' style={{backgroundColor:'#FAFAFC', height:'240px', width:'456px'}}>
                        <h3 className='mb-3 fw-bold'>New in Action</h3>
                        <div className='d-flex justify-content-between'>
                        {
                            items.map(item =>
                                <div key={item.id}>
                                    <div className='rounded' style={{backgroundColor:'#E5E5E9', height:'120px', width:'120px'}}></div>
                                    <span className='mt-2 fw'>{item.name}</span>
                                </div>
                            )
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Actions;