import React from "react";
import CountdownTimer from './CountdownTimer/CountdownTimer'
import { stats } from "../constants";
import styles from "../style";
// import {eth, metamusk} from '../assets'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import logo from "./../assets/icedoge_logo.svg";




const TxUpdate = () => {
  let presale_contact_address ="0xE12C6fc28b6c35Fca2361321Ff593949d8BB539B";
  return (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer my-5 ">
   <div className="flex justify-center items-center flex-col mt-5">
      <h1 className="text-white text-xlg text-center">Join The $ICEDOGE Presale Now</h1>
      <div className="text-sm text-center font-medium mt-2 mx-4 my-4"><CountdownTimer countdownTimestampMs={1682676257000} /></div>
    </div>
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
    
      <div className="flex flex-[0.5] justify-center items-center hover:animate-spin">
        <img src={logo} alt="logo" className="w-32" />
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
      
        <p className="text-white text-base text-center mx-2 cursor-pointer">Current Price: $0.0001</p>
      </div>
    
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-white text-base text-center mx-2 cursor-pointer">Presale address:</p> <br/>
        <p className="text-white text-sm w-11/12 text-center mx-2 cursor-pointer"> { 
          window.innerWidth < 1200 ?
           <p className='det-value'>
            <button onClick={() => {
             navigator.clipboard.writeText(presale_contact_address);
             toast('copied')
             }}
            >
              
            Copy<ion-icon name="clipboard-outline"></ion-icon>

            </button>
            </p> :
          <p className='det-value'>{presale_contact_address}</p>
          }
          </p>
            
      </div>

     
    </div>
        <div className=" w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-">
        <div className="h-2.5 rounded-full bg-gradient-to-r from-green-300 via-blue-500 to-purple-600  w-2/5"></div>
    </div>

    <p className="text-white text-base text-center mx-2 cursor-pointer"> </p>

     <div className="flex flex-[0.5] text-white text-base text-center">
        
      </div>
    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-sm w-11/12">Amount Raised: $3,913,836 / $10,000,000</p>
      <p className="text-white text-right text-sm w-11/12">40,000,000,000 tokens</p>
    </div>

    
     <button style={{marginTop:'50px'}}
             className="rounded-full bg-gradient-to-r from-green-300 via-blue-500 to-purple-600  text-white px-5 py-4 rounded hover:scale-95 transition text-white text-base text-center mx-2 cursor-pointer"
             onClick={()=>{
              window.open("https://etherscan.io/address/0xE12C6fc28b6c35Fca2361321Ff593949d8BB539B", "_blank")
             }}
             >
            <span style={{ display: "flex", justifyContent: "center", alignItems: "center", background: "none", fontSize: "16px" }}>
              View on Etherscan
            <ion-icon name="chevron-forward-outline" />
            </span>
            </button>
            <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 "/>
    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs"></p>
      <p className="text-white text-right text-xs"></p>
    </div>
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat) => (
      <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`} >
        <h4 className="font-poppins font-semibold xs:text-[32.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal xs:text-[18.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient ml-3">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
    
  </div>
            )};

export default TxUpdate;



  //  <p className="text-white text-xlg text-center">Powered By</p>
  //     <div className="flex flex-1 m-2">
  //   <img src={eth} alt="logo" className="w-32" />
  //   <img src={metamusk} alt="logo" className="w-32" />
  //   </div>
  //   <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 "/>