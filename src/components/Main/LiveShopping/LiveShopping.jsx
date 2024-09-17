import React from 'react';
import './LiveShopping.css'
const LiveShopping = () => {
    const items = [
        {
            id:1,
            name: "Fantech Associates..",
            description:" Included 32 Products",
            time: " Monday, 20 May 2024"
        },
        {
            id:2,
            name: "Fantech Associates..",
            description:" Included 32 Products",
            time: " Monday, 20 May 2024"
        },
        {
            id:3,
            name: "Fantech Associates..",
            description:" Included 32 Products",
            time: " Monday, 20 May 2024"
        },
        {
            id:4,
            name: "Fantech Associates..",
            description:" Included 32 Products",
            time: " Monday, 20 May 2024"
        },
        {
            id:5,
            name: "Fantech Associates..",
            description:" Included 32 Products",
            time: " Monday, 20 May 2024"
        },
        {
            id:6,
            name: "Fantech Associates..",
            description:" Included 32 Products",
            time: " Monday, 20 May 2024"
        },
    ]
    return (
        <div className='live-shopping-container'>
             <div className='d-flex justify-content-between mb-4'>
                <div>
                    <h2 className='fw-bold mb-2'>Live Shopping</h2>
                    <h3  className='fw-bold mb-2'> Experience the new way of shopping…</h3>
                </div>
                <div >
                    <button className='fw-bold py-2 px-4 rounded-pill bg-white border'>All Live Shopping</button>
                </div>
             </div>
            <div className='d-flex justify-content-between'>
                {items.map(item => 
                    <div className='d-flex flex-column px-2 py-4 rounded' key={item.id} style={{backgroundColor: '#E5E5E9', height: '396px', width: '224px'}}>
                        <div className='ms-1 mt-auto rounded px-4 py-2' style={{backgroundColor:'rgba(0, 0, 0, 0.3)', height: '92px', width: '200px'}}>
                            <span className='name fw-bold '>{item.name}</span>
                            <span className='description d-block'>{item.description}</span>
                            <span className='description d-block'>{item.time}</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LiveShopping;