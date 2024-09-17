import React from 'react';
import './ShopByCategories.css'
const ShopByCategories = () => {
    const items =[
        {
            id:1,
            name:'Women’s Corner'
        },
        {
            id:2,
            name:'Women’s Corner'
        },
        {
            id:3,
            name:'Women’s Corner'
        },
        {
            id:4,
            name:'Women’s Corner'
        },
        {
            id:5,
            name:'Women’s Corner'
        },
        {
            id:6,
            name:'Women’s Corner'
        },
        {
            id:7,
            name:'Women’s Corner'
        },
        {
            id:8,
            name:'Women’s Corner'
        },
        {
            id:9,
            name:'Women’s Corner'
        },
        {
            id:10,
            name:'Women’s Corner'
        },
        {
            id:11,
            name:'Women’s Corner'
        },
        {
            id:12,
            name:'Women’s Corner'
        },
        {
            id:13,
            name:'Women’s Corner'
        },
        {
            id:14,
            name:'Women’s Corner'
        },
        {
            id:15,
            name:'Women’s Corner'
        },
        {
            id:16,
            name:'Women’s Corner'
        },
    ]
    return (
        <div className='Shop-by-categories-container mb-5'>
            <h1 className='text-center fw-bold'>Shop By Categories</h1>
            <div className="row mt-4">
                {items.map((item) => (
                    <div key={item.id} className="col-1-5 mb-3" style={{ flex: '0 0 12.5%', maxWidth: '12.5%' }}>
                         <div className='rounded' style={{backgroundColor:'#E5E5E9', width:'112px', height:'112px'}}>

                         </div>
                        <p className='mt-2 fw-bold'>{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShopByCategories;