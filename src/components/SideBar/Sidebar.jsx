import { useState } from "react";
import { Nav } from "react-bootstrap";
import { BiRadio, BiSolidWatch } from "react-icons/bi";
import { BsFillGridFill, BsHammer } from "react-icons/bs";
import { FaHome, FaLaptop, FaMobileAlt, FaTv, FaCamera, FaCouch, FaChevronRight } from "react-icons/fa";
import { GiConcreteBag, GiWashingMachine } from "react-icons/gi";
import { IoMdFitness } from "react-icons/io";
import { IoFemale, IoFootballOutline, IoMale } from "react-icons/io5";
import { LiaBabyCarriageSolid } from "react-icons/lia";
import { MdLaptopMac, MdOutlinePhoneAndroid } from "react-icons/md";
import { PiTShirtLight } from "react-icons/pi";
import { RiPrinterLine } from "react-icons/ri";
import './Sidebar.css';
import HoveredSidebar from "./HoveredSidebar";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHoverExpanded, setIsHoverExpanded] = useState(false);
  

  // Function to toggle the expanded state on click
  const toggleSidebar = () => {
    if (isExpanded) {
      setIsHoverExpanded(false); 
    }
    setIsExpanded(!isExpanded);
  };

  // Function to handle mouse hover over expanded sidebar
  const handleMouseEnter = () => {
    if (isExpanded) {
      setIsHoverExpanded(true); 
    }
  };

  const handleMouseLeave = () => {
    setIsHoverExpanded(false);
  };

  return (
    <div
      className={`d-flex flex-column bg-white border-end position-absolute`}
      style={{
        width: isExpanded ? "276px" : "64px", // Sidebar width
        transition: "width 0.000001s ease", // Smooth transition for width change
        zIndex: 1000, // Ensure it's on top of the header
      }}
      onMouseOver={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Nav className="flex-column">
        {/* Menu Toggle Icon */}
        <Nav.Item className="mt-3" onClick={toggleSidebar} style={{ cursor: "pointer" }}>
          <Nav.Link className="d-flex align-items-center">
            <div 
              className="d-flex justify-content-center align-items-center bg-yellow text-white rounded-circle me-3"
              style={{ width: '32px', height: '32px' }}
            >
              <BsFillGridFill />
            </div>
            {isExpanded && <span className="nav-text">Menu</span>}
          </Nav.Link>
        </Nav.Item>
        {/* // Menu Item 1 */}
        <Nav.Item className="ms-2">
        <Nav.Link href="#electronics" className="d-flex align-items-center">
            <IoFemale className="me-3 icon-color" />
            {isExpanded && (
            <div className="d-flex justify-content-between w-100">
                <span className="nav-text">Women’s Corner</span>
                <FaChevronRight className="icon-right ms-auto mt-1" />
            </div>
            )}
        </Nav.Link>
        </Nav.Item>

        {/* // Menu Item 2 */}
        <Nav.Item className="ms-2">
        <Nav.Link href="#mobiles" className="d-flex align-items-center">
            <IoMale className="me-3 icon-color" />
            {isExpanded && (
            <div className="d-flex justify-content-between w-100">
                <span className="nav-text">Men’s Corner</span>
                <FaChevronRight className="icon-right ms-auto mt-1" />
            </div>
            )}
        </Nav.Link>
        </Nav.Item>

        {/* // Menu Item 3 */}
        <Nav.Item className="ms-2">
        <Nav.Link href="#offers" className="d-flex align-items-center">
            <LiaBabyCarriageSolid className="me-3 icon-color" />
            {isExpanded && (
            <div className="d-flex justify-content-between w-100">
                <span className="nav-text">Baby Items</span>
                <FaChevronRight className="icon-right ms-auto mt-1" />
            </div>
            )}
        </Nav.Link>
    </Nav.Item>

    {/* // Menu Item 4 */}
    <Nav.Item className="ms-2">
    <Nav.Link href="#offers" className="d-flex align-items-center">
        <PiTShirtLight className="me-3 icon-color" />
        {isExpanded && (
        <div className="d-flex justify-content-between w-100">
            <span className="nav-text">Kid’s Zone</span>
            <FaChevronRight className="icon-right ms-auto mt-1" />
        </div>
        )}
    </Nav.Link>
    </Nav.Item>

    {/* // Menu Item 5 */}
    <Nav.Item className="ms-2">
    <Nav.Link href="#offers" className="d-flex align-items-center">
        <MdOutlinePhoneAndroid className="me-3 icon-color" />
        {isExpanded && (
        <div className="d-flex justify-content-between w-100">
            <span className="nav-text">Smartphones & Tablets</span>
            <FaChevronRight className="icon-right ms-auto mt-1" />
        </div>
        )}
    </Nav.Link>
    </Nav.Item>

    {/* // Menu Item 6 */}
    <Nav.Item className="ms-2">
    <Nav.Link href="#offers" className="d-flex align-items-center">
        <BiSolidWatch className="me-3 icon-color" />
        {isExpanded && (
        <div className="d-flex justify-content-between w-100">
            <span className="nav-text">Watches</span>
            <FaChevronRight className="icon-right ms-auto mt-1" />
        </div>
        )}
    </Nav.Link>
    </Nav.Item>

    {/* // Menu Item 7 */}
    <Nav.Item className="ms-2">
    <Nav.Link href="#offers" className="d-flex align-items-center">
        <MdLaptopMac className="me-3 icon-color" />
        {isExpanded && (
        <div className="d-flex justify-content-between w-100">
            <span className="nav-text">Laptops & PCs</span>
            <FaChevronRight className="icon-right ms-auto mt-1" />
        </div>
        )}
    </Nav.Link>
    </Nav.Item>

    {/* // Menu Item 8 */}
    <Nav.Item className="ms-2">
    <Nav.Link href="#offers" className="d-flex align-items-center">
        <RiPrinterLine className="me-3 icon-color" />
        {isExpanded && (
        <div className="d-flex justify-content-between w-100">
            <span className="nav-text">Computer Accessories</span>
            <FaChevronRight className="icon-right ms-auto mt-1" />
        </div>
        )}
    </Nav.Link>
    </Nav.Item>

    {/* // Menu Item 9 */}
    <Nav.Item className="ms-2">
    <Nav.Link href="#offers" className="d-flex align-items-center">
        <FaTv className="me-3 icon-color" />
        {isExpanded && (
        <div className="d-flex justify-content-between w-100">
            <span className="nav-text">TV & Entertainment</span>
            <FaChevronRight className="icon-right ms-auto mt-1" />
        </div>
        )}
    </Nav.Link>
    </Nav.Item>

    {/* // Menu Item 10 */}
    <Nav.Item className="ms-2">
    <Nav.Link href="#offers" className="d-flex align-items-center">
        <IoMdFitness className="me-3 icon-color" />
        {isExpanded && (
        <div className="d-flex justify-content-between w-100">
            <span className="nav-text">Body Fitness & Health</span>
            <FaChevronRight className="icon-right ms-auto mt-1" />
        </div>
        )}
    </Nav.Link>
    </Nav.Item>

    {/* // Menu Item 11 */}
    <Nav.Item className="ms-2">
    <Nav.Link href="#offers" className="d-flex align-items-center">
        <IoFootballOutline className="me-3 icon-color" />
        {isExpanded && (
        <div className="d-flex justify-content-between w-100">
            <span className="nav-text">Sports Item</span>
            <FaChevronRight className="icon-right ms-auto mt-1" />
        </div>
        )}
    </Nav.Link>
    </Nav.Item>

    {/* // Menu Item 12 */}
    <Nav.Item className="ms-2">
    <Nav.Link href="#offers" className="d-flex align-items-center">
        <FaCamera className="me-3 icon-color" />
        {isExpanded && (
        <div className="d-flex justify-content-between w-100">
            <span className="nav-text">Camera & Drones</span>
            <FaChevronRight className="icon-right ms-auto mt-1" />
        </div>
        )}
    </Nav.Link>
    </Nav.Item>

    {/* // Menu Item 13 */}
    <Nav.Item className="ms-2">
    <Nav.Link href="#offers" className="d-flex align-items-center">
        <BiRadio className="me-3 icon-color" />
        {isExpanded && (
        <div className="d-flex justify-content-between w-100">
            <span className="nav-text">Gamers Zone</span>
            <FaChevronRight className="icon-right ms-auto mt-1" />
        </div>
        )}
    </Nav.Link>
    </Nav.Item>

    {/* // Menu Item 14 */}
    <Nav.Item className="ms-2">
    <Nav.Link href="#offers" className="d-flex align-items-center">
        <GiWashingMachine className="me-3 icon-color" />
        {isExpanded && (
        <div className="d-flex justify-content-between w-100">
            <span className="nav-text">Home Appliances</span>
            <FaChevronRight className="icon-right ms-auto mt-1" />
        </div>
        )}
    </Nav.Link>
    </Nav.Item>

    {/* // Menu Item 15 */}
    <Nav.Item className="ms-2">
    <Nav.Link href="#offers" className="d-flex align-items-center">
        <FaCouch className="me-3 icon-color" />
        {isExpanded && (
        <div className="d-flex justify-content-between w-100">
            <span className="nav-text">Furniture & Home Decor’s</span>
            <FaChevronRight className="icon-right ms-auto mt-1" />
        </div>
        )}
    </Nav.Link>
    </Nav.Item>

    {/* // Menu Item 16 */}
    <Nav.Item className="ms-2">
    <Nav.Link href="#offers" className="d-flex align-items-center">
        <BsHammer className="me-3 icon-color" />
        {isExpanded && (
        <div className="d-flex justify-content-between w-100">
            <span className="nav-text">Hardware Store</span>
            <FaChevronRight className="icon-right ms-auto mt-1" />
        </div>
        )}
    </Nav.Link>
    </Nav.Item>

    {/* // Menu Item 17 */}
    <Nav.Item className="ms-2">
    <Nav.Link href="#offers" className="d-flex align-items-center">
        <GiConcreteBag className="me-3 icon-color" />
        {isExpanded && (
        <div className="d-flex justify-content-between w-100">
            <span className="nav-text">Building Materials</span>
            <FaChevronRight className="icon-right ms-auto mt-1" />
        </div>
        )}
    </Nav.Link>
    </Nav.Item>
    {
        isExpanded &&(
            <div style={{width:'220px', height:'220px', backgroundColor:'#E5E5E9', margin:'45px 0px 20px 24px'}}>

            </div>
        )
    }
    </Nav>
    
      
      

      {/* Secondary Expanded Sidebar */}
      {isHoverExpanded && 
        <HoveredSidebar></HoveredSidebar>
      }
    </div>
  );
};

export default Sidebar;
