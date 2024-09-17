import React from 'react';
import './FeaturedImage.css'
const FeaturedImage = () => {
    return (
        <div className='Featured-image-container mb-5'>
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
                    <div className='rounded' style={{backgroundColor:'#E5E5E9', height:'240px', width:'456px'}}>
                    </div>
                    <div className='rounded mt-4' style={{backgroundColor:'#E5E5E9', height:'240px', width:'456px'}}>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedImage;