import React from 'react';
import SalesCampeign from './SalesCampeign/SalesCampeign';
import Deals from './Deals/Deals';
const SalesAndDeals = () => {
    
    return (
        <div style={{margin:'0 216px'}}>
            <div className='sales-and-deals-container row mb-5 g-x-4'>
            <div className='col-6'>
                <SalesCampeign></SalesCampeign>
            </div>
            <div className='col-6'>
                <Deals></Deals> 
            </div>
           </div>
        </div>
    );
};

export default SalesAndDeals;