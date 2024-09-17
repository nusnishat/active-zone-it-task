import './Offers.css'

const Offers = () => {
    return (
        <div className='offers-container row rounded-2 mb-5'>
            <div className='col-6 d-flex flex-column justify-content-center font-custom-black'>
                <h1 className='font-size-40 fw-bold'>Offers You Can't Resist</h1>
                <p className='mt-2 fw-semibold'>Fashion, Smartphones & more</p>
                <div className='mt-2'>
                    <button className='btn-shop-now rounded px-4 py-2'>Shop Now</button>
                    <span className='ms-4 fw-bold'>Upto 60% Discount</span>
                </div>
            </div>
            <div className='col-6 bg-div rounded'>
            
            </div>
        </div>


    );
};

export default Offers;