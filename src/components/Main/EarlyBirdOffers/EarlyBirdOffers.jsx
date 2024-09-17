import React from 'react';
import './EarlyBirdOffers.css'
const EarlyBirdOffers = () => {
    const products =[
        {
            id:1,
            name:"Women’s Beauty Products",
            description: "Upto 70% discount"
        },
        {
            id:2,
            name:"Smartphone Accessories",
            description: "From $0.99"
        },
        {
            id:3,
            name:"Men’s Watches",
            description: "From $2.99"
        },
        {
            id:4,
            name:"Women Tops",
            description: "Upto 40% discount"
        },
        {
            id:5,
            name:"Charger & Cables",
            description: "Upto 40% discount"
        },
        {
            id:6,
            name:"Watches",
            description: "From $0.99"
        },
    ]
    return (
        <div className='early-bird-offers-container mb-5 border p-4 rounded'>
            <div className='d-flex justify-content-between'>
                <div>
                    <h2 className='fw-bold'>Early Bird Offers</h2>
                </div>
                <div>
                    <p className='fw-bold'>All ptoducts</p>
                </div>
            </div>
            <div className='d-flex justify-content-between'>
                {
                products.map(item=>
                    <div key={item.id} >
                        <div className='newly-arived-box-1 rounded'>

                        </div>
                        <h3 className='mt-3'>{item.name}</h3>
                        <span className='d-block fw-bold '>{item.description}</span>
                    </div>
                )
                }
            </div>
        </div>
    );
};

export default EarlyBirdOffers;