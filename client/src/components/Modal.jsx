import React, { useContext } from "react";
import { TransactionContext } from "./../context/TransactionContext"
import { Loader } from "../components";
import {blurdog} from "./../assets"

import { Web3Button } from '@web3modal/react';


const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const MyModal = ({visible, onClose}) => {
  const { currentAccount, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);  
  const handleSubmit = (e) => {
    const { addressTo, amount, } = formData;
       e.preventDefault();

    if (!addressTo || !amount ) return;

    sendTransaction();
  };

    const handleOnClose = (e) => {
        if(e.target.id === 'container')
        onClose();
    };

    if (!visible) return null

  return (
    <div id="container" onClick={handleOnClose} className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center pb-28">
    <div>
      <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
        <h1 className=" text-center ">
          connect wallet
        </h1>
        <div className="text-center text-gray-700 mb-5">
            <Web3Button/>
        </div>
        <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            
            <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
            <div className="h-[1px] w-full bg-gray-400 my-2" />
            <div className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism flex ml-24"> 
            <img src={blurdog} alt="blurdog" className="w-[32px] h-[32px] ms-0" />
            <span className="p-2" > You Receive {formData.amount * 10000} $IceDodge</span>
            </div>
            <div className="h-[1px] w-full bg-gray-400" />

            {isLoading
              ? <Loader />
              : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer text-sm"
                >
                  Buy now
                </button>
              )}
          </div>
      </div>
      </div>
      
    </div>
  );
}

export default MyModal