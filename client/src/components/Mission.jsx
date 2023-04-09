import React from "react";
// import { BsShieldFillCheck } from "react-icons/bs";
// import { BiSearchAlt } from "react-icons/bi";
// import { RiHeart2Fill } from "react-icons/ri";
import {  bigdogfull } from "../assets";


const connectToWallet = async () => {
  // Check if the browser has web3 (Mist/MetaMask) injected
  if (typeof window.ethereum !== 'undefined') {
    try {
      // Request account access if needed
      await window.ethereum.enable();

      // Create a new web3 instance
      const web3 = new Web3(window.ethereum);

      // Get the current account from the wallet
      const accounts = await web3.eth.getAccounts();
      const currentAccount = accounts[0];

      console.log('Connected to wallet:', currentAccount);

      // Return the current account
      return currentAccount;
    } catch (error) {
      // User denied account access
      console.error('User denied account access:', error);
    }
  } else {
    // No web3 provider detected
    console.error('No web3 provider detected');
  }
};

const Mission = () => (
  <div id="mission" className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
          Mission
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