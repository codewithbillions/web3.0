import {useState, useContext } from "react";
import { TransactionContext } from "./../context/TransactionContext"
import { shortenAddress } from "../utils/shortenAddress";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
  const { currentAccount, handleChange, sendTransaction, formData, isLoading, error } = useContext(TransactionContext);
  const [disable, setDisable] = useState(true);

  const handleSubmit = (e) => {
    const {  amount } = formData;
       e.preventDefault();

    if (!amount ) {
      toast("please enter amount (ETH)") 
      return}
    
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
        <h1 className=" text-center text-white text-base">
          CONNECT
        </h1>
        <div className="text-center text-gray-700 mb-5">
            <Web3Button icon="show" label="Connect Wallet" balance="show" background-color='white'/>
        </div>
        <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">

            <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />

            <div className="h-[1px] w-full bg-gray-400 my-2" />

             <Input  src={blurdog} alt="blurdog" className="w-[32px] h-[32px] ms-0 cursor-not-allowed" placeholder={`$ICD ${formData.amount * 17857142.857}`} type="number" disabled={disable} onClick={() => setDisable(true)} />

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
              <div className="h-[1px] w-full bg-gray-400 mt-2 " />
               <div className="text-white font-light text-sm pt-2">
                  {shortenAddress(currentAccount)}
                </div>
              

          </div>
      </div>
  
      </div>
     
      
    </div>
  );
}

export default MyModal