import React from 'react';

import './PopulerCategories.css'
const PopulerCategories = () => {
    const populerCategories =[
        {
            id:1,
            name:"Women’s Corner"
        },
        {
            id:2,
            name:"Men’s Corner"
        },
        {
            id:3,
            name:"Baby Items",
        },
        {
            id:4,
            name:"Kid’s Zone",
        },
        {
            id:5,
            name:"Smartphones & Tabletse",
        },
        {
            id:6,
            name:"Watches",
        },
    ]
    return (
        <div className='populer-categories-container row mb-5 g-x-4 rounded py-4 px-5'>
            <div className="col-4">
                <h2 className='fw-bold'>Popular Categories</h2>
                <p>What our customers find interesting</p>
                <button className='rounded px-4 py-2 mt-2 fw-bold'>All Popular Categories</button>
            </div>
            <div className='col-8 d-flex justify-content-between'>
                {
                    populerCategories.map(item=>
                        <div key={item.id} >
                            <div className='box rounded'>

                            </div>
                            <h3 className='fw-bold mt-2'>{item.name}</h3>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default PopulerCategories;