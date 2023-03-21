import React from "react";
// import { BsShieldFillCheck } from "react-icons/bs";
// import { BiSearchAlt } from "react-icons/bi";
// import { RiHeart2Fill } from "react-icons/ri";
import {  bigdogfull } from "../assets";

// const ServiceCard = ({ color, title, icon, subtitle }) => (
//   <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
//     <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
//       {icon}
//     </div>
//     <div className="ml-5 flex flex-col flex-1">
//       <h3 className="mt-2 text-white text-lg">{title}</h3>
//       <p className="mt-1 text-white text-sm md:w-9/12">
//         {subtitle}
//       </p>
//     </div>
//   </div>
// );

const Mission = () => (
  <div id="mission" className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
          Mission
          <br />
          <br/>
          <br/>
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          Our objective is to establish an accessible, sustainably managed environment in which new and experienced enthusiasts can access the global market while maintaining decentralization and privacy. Creating a 24-hour open marketplace that operates within legal boundaries
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
       
        <img src={bigdogfull} alt="blurdog" className="w-[80%] h-[80%] "/>
     
      
      </div>
    </div>
  </div>
);

export default Mission;