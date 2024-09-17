import React from 'react';
import './Header.css'
import { CiSearch } from 'react-icons/ci';
import { FaHeart, FaRegUser } from 'react-icons/fa';
import { BsFillGridFill } from 'react-icons/bs';
import { FaMessage, FaRegMessage } from 'react-icons/fa6';

const Header = () => {
  return (
    <nav className="header-container">
      <div className="container-fluid">
        <div className='d-flex justify-content-between mb-2'>
           <h1 className='fw-bold logo-text'>The Shop</h1>
           <div className='form'>
                <form className="d-flex bg-white rounded-pill px-4 adivgn-items-center w-100">
                    {/* Select dropdown */}
                    <select className="bg-white border-0 me-2">
                        <option selected>All Products</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </select>

                    {/* Search input field */}
                    <input className="form-control border-0 me-2" type="search" placeholder="Search for products, brands and more..." aria-label="Search" />

                    {/* Search button */}
                    <button className="bg-white border-0" type="submit">
                        <CiSearch />
                    </button>
                </form>
           </div>
            <div className='d-flex'>
                <div className='me-4'>
                    <span className='span-yellow d-block'>+01 112 352 566</span>
                    <span className='span-gray d-block'>Track Order</span>
                </div>
                <div className='me-5'>
                    <span className='span-yellow d-block'>EN/USD</span>
                    <span className='span-gray d-block'>Seller Center</span>
                </div>
                <div className='d-flex ms-3'>
                    <div className='user-icon rounded-circle mx-auto text-center me-2 mt-1'>
                        <FaRegUser />
                    </div>
                    <div>
                        <span className='span-yellow d-block'>Login or Register</span>
                        <span className='span-gray d-block'>Customer Zone</span>
                    </div>
                </div>
            </div>

        </div>
        <div className='d-flex justify-content-between'>
            <div className='d-flex'>
                <BsFillGridFill className='icon mt-1 me-2'/>
                <div><a className="text-white text-decoration-none me-4" href="">All Categories</a></div>
                <span className='text-white me-4'>|</span>
                <div><a className="span-yellow me-5" href="">Home</a></div>
                <div><a className="span-yellow me-5" href="">Coupon</a></div>
                <div><a className="span-yellow me-5" href="">All Shops</a></div>
                <div><a className="span-yellow me-5" href="">Brands</a></div>
                <div><a className="span-yellow me-5" href="">Summer Sale</a></div>
                <div><a className="span-yellow me-5" href="">Compute Accessories</a></div>
                <div><a className="span-yellow me-5" href="">More</a></div>
            </div>
            <div className='d-flex '>
                <div><a className="span-gray me-5" href="">Computer (17)</a></div>
                <div><FaHeart className='icon me-2' /><a className="span-yellow me-5" href="">Wishlist</a></div>
                <div><FaMessage className='icon me-2' /><a className="span-yellow " href="">Notification</a></div>
            </div>
        </div>

      </div>
    </nav>
  );
};

export default Header;
