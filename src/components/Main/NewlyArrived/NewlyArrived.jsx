import React from 'react';
import './NewlyArriived.css'
const NewlyArrived = () => {
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
        <div className='newly-arrived-container mb-5'>
            <div className='d-flex justify-content-between'>
                <div>
                    <h2 className='fw-bold'>Newly Arrived</h2>
                    <p>Products arrived in last 30 days</p>
                </div>
                <div>
                    <button className='fw-bold rounded-pill px-4 py-2'> View All New Products</button>
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
            <div className='my-4 d-flex justify-content-between'>
                <div className='newly-arived-box-2 rounded '></div>
                <div className='newly-arived-box-2 rounded'></div>
                <div className='newly-arived-box-2 rounded'></div>
            </div>
            <div className='d-flex justify-content-between my-4'>
                <div style={{backgroundColor:'#E5E5E9', height:'344px', width:'696px'}} className='rounded'></div>
                <div style={{backgroundColor:'#E5E5E9', height:'336px', width:'344px'}} className='rounded'></div>
                <div>
                    <div style={{backgroundColor:'#E5E5E9', height:'160px', width:'336px'}} className='rounded'></div>
                    <div style={{backgroundColor:'#E5E5E9', height:'160px', width:'336px'}} className='mt-3 rounded'></div>
                </div>
            </div>
        </div>
    );
};

export default NewlyArrived;