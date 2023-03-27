import { useState } from "react";
import { Link } from 'react-router-dom';
import logo from './../assets/icedoge_logo.svg'
import { close, menu } from "../assets";
import { navLinks } from "../constants";
import whitepaper from './../../images/whitepaper.d2b3c95ad7a66debe360.pdf';
import { Modal } from "../components";
 

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const openPdf = () => {
        window.open(whitepaper, "_blank");
      }; 

   const [openConnect, setOpenConnect] = useState(false);
   const handleOnClose = () => setOpenConnect(false)

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <Link to="/">
        <img src={logo} alt="icedoge" className="w-[266px] h-[62px] " />
      </Link>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 ">
        <li className="font-poppins font-normal cursor-pointer text-[16px] text-dimWhite mr-0 mr-10"><a href="https://twitter.com/icedogetoken" target={"_blank"}>Community</a></li>

        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            src={nav.link}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}  
          >
            <a href={`#${nav.id}`} >{nav.title}</a>  
          </li>
        ))}
        <li  className="font-poppins font-normal cursor-pointer text-[16px] text-dimWhite mr-0 mr-10 ml-10 " href='#' onClick={openPdf}><a>Whitepaper</a></li>

        <li  className=" font-poppins font-normal cursor-pointer text-[16px] text-dimWhite mr-0 mr-10 "><a>NFT</a></li>
          <Link to="/team">
               <li  className="font-poppins font-normal cursor-pointer text-[16px] text-dimWhite mr-0 mr-10 "><a>Team</a></li>
            </Link>
         
          <button className="rounded-full gradient-bg-services text-white px-5 py-4 rounded hover:scale-95 transition text-xl" onClick={() => setOpenConnect(true)}>
            BUY NOW
          </button>
          <Modal onClose={handleOnClose} visible={openConnect} />
        </ul> 
      

      <div className="sm:hidden flex flex-1 justify-end items-center">

        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain ml-16"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          }  bg-black-gradient bg-gray-700 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col ml-4">
          <li  className=" font-poppins font-medium cursor-pointer text-[16px] text-dimWhite mb-0 mb-4"><a href="https://twitter.com/icedogetoken">Community</a></li>
           
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <li  className="font-poppins font-medium cursor-pointer text-[16px] text-dimWhite mb-0 mb-4 mt-5" href='#' onClick={openPdf}>Whitepaper </li>
        <li  className=" font-poppins font-medium cursor-pointer text-[16px] text-dimWhite mr-0 mr-10">NFT</li>
            <Link to="/team">
                <li  className="font-poppins font-medium cursor-pointer text-[16px] text-dimWhite mb-0 mb-4 mt-5">Team</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
