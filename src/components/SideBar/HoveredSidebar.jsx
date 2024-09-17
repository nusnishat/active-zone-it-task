import React from 'react';
import { Nav } from 'react-bootstrap';

const HoveredSidebar = () => {
    return (
        <div
          className="bg-white border-end position-absolute"
          style={{
            color: '#06072C',
            width: "276px",
            left: "276px", // Positioned next to the expanded sidebar
            top: 0,
            transition: "left 0.3s ease",
            zIndex: 999,
          }}
        >
          <Nav className="ps-4 flex-column">
            <Nav.Item className=" mt-4 fw-bold">
              
                <span>Best Seller in Women’s Corner</span>
             
            </Nav.Item>
            <Nav.Item className=" mt-3 fw-bold">
              
                <span>New in Women’s Corner</span>
             
            </Nav.Item>
            <Nav.Item className=" mt-3 fw-bold">
              
                <span>Hot Categories</span>
             
            </Nav.Item>
            <Nav.Item className=" mt-3 fw-bold">
              
                <span>Party Dress</span>
             
            </Nav.Item>
            <Nav.Item className=" mt-3 fw-bold">
              
                <span>Beauty & Health</span>
             
            </Nav.Item>
            <Nav.Item className=" mt-3 fw-bold">
              
                <span>Women shoe</span>
             
            </Nav.Item>
            <Nav.Item className=" mt-3 fw-bold">
              
                <span>Sleeping Dress</span>
             
            </Nav.Item>
            <Nav.Item className=" mt-3 fw-bold">
              
                <span>New in Women’s Corner</span>
             
            </Nav.Item>
            <Nav.Item className=" mt-3 fw-bold">
              
                <span>Casual Dress</span>
             
            </Nav.Item>
            <Nav.Item className=" mt-3 fw-bold">
              
                <span>Hoodies & Sweatshirts</span>
             
            </Nav.Item>
            <Nav.Item className=" mt-3 fw-bold">
              
                <span>Jackets</span>
             
            </Nav.Item>
            <Nav.Item className=" mt-3 fw-bold">
              
                <span>T-shirts</span>
             
            </Nav.Item>
            <Nav.Item className=" mt-3 fw-bold">
              
                <span>Socks</span>
             
            </Nav.Item>
            <Nav.Item className=" mt-3 fw-bold">
              
                <span>Wedding & Events</span>
             
            </Nav.Item>
            <Nav.Item className=" mt-3 fw-bold">
              
                <span>Wedding Dresses</span>
             
            </Nav.Item>
            <Nav.Item className=" mt-3 fw-bold">
              
                <span>Evening Dresses</span>
             
            </Nav.Item>
            <Nav.Item className=" mt-3 fw-bold">
              
                <span>Prom Dresses</span>
             
            </Nav.Item>
            <Nav.Item className=" mt-3 fw-bold">
              
                <span>Bridesmaid Dresses</span>
             
            </Nav.Item>
            <Nav.Item className=" mt-3 fw-bold">
              
                <span>Tops & Suits</span>
             
            </Nav.Item>
            <Nav.Item className=" mt-3 fw-bold">
              
                <span>Tank tops</span>
             
            </Nav.Item>
            <Nav.Item className=" mt-3 fw-bold">
              
                <span>Formal Tops</span>
             
            </Nav.Item>
            <Nav.Item className=" mt-3 fw-bold">
              
                <span>Women Suits</span>
             
            </Nav.Item>
            <Nav.Item className=" mt-3 fw-bold">
              
                <span>Formal Wears</span>
             
            </Nav.Item>
            <Nav.Item className=" mt-3 fw-bold">
              
                <span>Accessories</span>
             
            </Nav.Item>
            <Nav.Item className=" mt-3 fw-bold">
              
                <span>Eyewear & accessories</span>
             
            </Nav.Item>
            <Nav.Item className=" mt-3 fw-bold">
              
                <span>Hats & Caps</span>
             
            </Nav.Item>
            <Nav.Item className=" mt-3 fw-bold">
              
                <span>Gloves</span>
             
            </Nav.Item>
            <Nav.Item className=" mt-3 fw-bold">
              
                <span>Watcj</span>
             
            </Nav.Item>
            <Nav.Item className=" mt-3 fw-bold">
              
                <span>Wallet</span>
             
            </Nav.Item>
          </Nav>
          
        </div>
    );
};

export default HoveredSidebar;