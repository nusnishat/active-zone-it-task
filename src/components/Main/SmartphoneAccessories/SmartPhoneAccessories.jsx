import React from 'react';
import './SmartphoneAccessories.css'
const SmartPhoneAccessories = () => {
    const populerItems =[
        {
            id: 1,
            name:'Headphones',
            description:'From $0.99'
        },
        {
            id: 2,
            name:'Women Tops',
            description:'Upto 40% discount'
        },
        {
            id: 3,
            name:'Kid’s bicycle (girls) & accessoires',
            description:'Upto 60% discount'
        },
        {
            id: 4,
            name:'Women Tops',
            description:'Upto 40% discount'
        },
    ]
    return (
        <div className='Smart-phone-accessories-container mb-5'>
            <div className='d-flex justify-content-between'>
                <div>
                    <h1 className='fw-bold mb-2'>Smartphone & Accessories</h1>
                    <div style={{width:'450px'}} className='fw-bold mb-4 d-flex  justify-content-between'>
                        <p>iPhones</p>
                        <p>Smartphones under $200</p>
                        <p>Free Gifts</p>
                        <p>Charger</p>
                        <p>Charging Cables</p>
                    </div>
                </div>
                <div >
                        <button className='fw-bold py-2 px-4 rounded-pill bg-white border'>View All Products</button>
                </div>
            </div>
            <div className='d-flex justify-content-between'>
                <div className='p-4 rounded' style={{backgroundColor:'#FAFAFC', height:'454px', width:'336px'}}>
                    <h2 className='fw-bold mb-3'>Top Deals</h2>
                    <div className='rounded' style={{backgroundColor:'#E5E5E9', width:'276px', height:'368px'}}>

                    </div>
                </div>
                <div className='p-4 rounded' style={{backgroundColor:'#FAFAFC', height:'454px', width:'336px'}}>
                    <h2 className='fw-bold mb-3'>Top Deals</h2>
                   <div>
                   {
                        populerItems.map(item=>
                        <div key={item} className='d-flex mb-3'>
                            <div className='rounded' style={{backgroundColor:'#E5E5E9', width:'80px', height:'80px'}}>

                            </div>
                            <div className='ms-4'>
                                <span className='d-block mt-2'>{item.name}</span>
                                <span className='d-block fw-bold'>{item.description}</span>
                            </div>
                        </div>
                        )
                    }
                   </div>
                </div>
                <div>
                    <div className='rounded' style={{backgroundColor:'#E5E5E9', width:'336px', height:'215px'}}>    
                    </div>
                    <div className='rounded mt-4' style={{backgroundColor:'#E5E5E9', width:'336px', height:'215px'}}>
                    </div>
                </div>
                <div className='p-4 rounded' style={{backgroundColor:'#fff1eb', height:'454px', width:'336px'}}>
                    <h2 className='fw-bold mb-3'>Top Deals</h2>
                   <div>
                   {
                        populerItems.map(item=>
                        <div key={item} className='d-flex mb-3'>
                            <div className='rounded' style={{backgroundColor:'#E5E5E9', width:'80px', height:'80px'}}>

                            </div>
                            <div className='ms-4'>
                                <span className='d-block mt-2'>{item.name}</span>
                                <span className='d-block fw-bold'>{item.description}</span>
                            </div>
                        </div>
                        )
                    }
                   </div>
                </div>
            </div>
        </div>
    );
};

export default SmartPhoneAccessories;