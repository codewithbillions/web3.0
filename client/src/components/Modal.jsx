
import { Web3Button } from '@web3modal/react';

import React from "react";

export default function MyModal({visible, onClose}) {
    const handleOnClose = () => {
        // if(e.target.id === 'container')
        onClose()
    };

    if (!visible) return null

  return (
    <div id='container' onClick={handleOnClose} className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="gradient-bg-services p-2 rounded w-72">
        <h1 className="font-semibold text-center text-xl text-gray-700">
          connect wallet
        </h1>
        <div className="text-center text-gray-700 mb-5">
            <Web3Button/>
        </div>
        
      </div>
    </div>
  );
}