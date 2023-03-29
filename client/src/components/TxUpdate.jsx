import React from "react";
import CountdownTimer from './CountdownTimer/CountdownTimer'
// import {eth, metamusk} from '../assets'

import logo from "./../assets/icedoge_logo.svg";



const TxUpdate = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer my-5 ">
   <div className="flex justify-center items-center flex-col mt-5">
      <h1 className="text-white text-xlg text-center">Join The $ICEDOGE Presale Now</h1>
      <div className=" text-sm text-center font-medium mt-2 mx-4 my-4" ><CountdownTimer countdownTimestampMs={1682676257000} /></div>
    </div>
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
    
      <div className="flex flex-[0.5] justify-center items-center hover:animate-spin">
        <img src={logo} alt="logo" className="w-32" />
      </div>
      <div id="roadmap"  className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
      
        <p className="text-white text-base text-center mx-2 cursor-pointer">Current Price: $0.0001</p>
      </div>
    
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-white text-base text-center mx-2 cursor-pointer">Presale address:</p> <br/>
        <p className="text-white text-sm w-11/12 text-center mx-2 cursor-pointer">0xE12C6fc28b6c35Fca2361321Ff593949d8BB539B</p>
      </div>

     
    </div>
        <div className=" w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-">
        <div class="h-2.5 rounded-full bg-gradient-to-r from-green-300 via-blue-500 to-purple-600  w-2/5"></div>
    </div>

    <p className="text-white text-base text-center mx-2 cursor-pointer"> </p>

     <div className="flex flex-[0.5] text-white text-base text-center">
        
      </div>
    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-sm w-11/12">Amount Raised: $3,913,836 / $10,000,000</p>
      <p className="text-white text-right text-sm w-11/12">40,000,000,000 tokens</p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 "/>

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs"></p>
      <p className="text-white text-right text-xs"></p>
    </div>
  </div>
);

export default TxUpdate;



  //  <p className="text-white text-xlg text-center">Powered By</p>
  //     <div className="flex flex-1 m-2">
  //   <img src={eth} alt="logo" className="w-32" />
  //   <img src={metamusk} alt="logo" className="w-32" />
  //   </div>
  //   <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 "/>