import { useState } from "react";
import { ethers } from "ethers";
import WalletConnectProvider from '@walletconnect/web3-provider';
import ErrorMessage from "./ErrorMessage";
import TxList from "./TxList";
import { Web3Button } from '@web3modal/react';



const startPayment = async ({ setError, setTxs, ether, addr }) => {
  try {
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");

    await window.ethereum.send("eth_requestAccounts");
     const provider = new ethers.providers.Web3Provider(new WalletConnectProvider({
    infuraId: 'a347fa255b62416d88fb3365d634a7a6',
  })
);
    const signer = provider.getSigner();
    ethers.utils.getAddress(addr);
    const tx = await signer.sendTransaction({
      to: addr,
      value: ethers.utils.parseEther(ether)
    });
    console.log({ ether, addr });
    console.log("tx", tx);
    setTxs([tx]);
  } catch (err) {
    setError(err.message);
  }
};

export default function CryptoSend() {
  const [error, setError] = useState();
  const [txs, setTxs] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setError();
    await startPayment({
      setError,
      setTxs,
      ether: data.get("ether"),
      addr: data.get("addr")
    });
  };

  return (
    <form className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism" onSubmit={handleSubmit}>
      <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
        <main className="mt-4 p-4">
		 <div className="text-center text-gray-700 mb-5">
            <Web3Button icon="show" label="Connect Wallet" balance="show" background-color='white'/>
        </div>
          <h1 className="text-xl font-semibold text-gray-700 text-center">
            Send ETH payment
          </h1>
          <div  className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <div className="my-3">
              <input
                type="text"
                name="addr"
                className="input input-bordered block w-full focus:ring focus:outline-none"
                placeholder="Recipient Address"
              />
            </div>
            <div className="my-3">
              <input
                name="ether"
                type="text"
                className="input input-bordered block w-full focus:ring focus:outline-none"
                placeholder="Amount in ETH"
              />
            </div>
          </div>
        </main>
        <footer className="p-4">
          <button
            type="submit"
            className="btn btn-primary submit-button focus:ring focus:outline-none w-full"
          >
            Pay now
          </button>
          <ErrorMessage message={error} />
          <TxList txs={txs} />
        </footer>
      </div>
    </form>
  );
}