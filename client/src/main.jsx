import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";


// const alchemy = new Alchemy(settings);

// async function main() {
//   const blocknumber = await alchemy.core.getBlockNumber()
//   console.log(blocknumber)
//   const block = await alchemy.core.getBalance('vitalik.eth')
//   consosle.log(ether.utils.formatEther(balance))
// }

import {  Web3Modal } from '@web3modal/react'
import { configureChains, createClient, WagmiConfig } from 'wagmi';

import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'

import { arbitrum, avalanche, bsc, fantom, gnosis, mainnet, optimism, polygon } from 'wagmi/chains'
import { BrowserRouter } from "react-router-dom";
import { TransactionsProvider } from "./context/TransactionContext";



// 2. Configure wagmi client
const chains = [mainnet, polygon, avalanche, arbitrum, gnosis, bsc, optimism, fantom]
// 1. Get projectID at https://cloud.walletconnect.com
const projectId = "080925ff734019202f8750b91ac5b373"
// const projectId = import.meta.env.VITE_APP_PROJECT_ID;






if (!projectId) {
  throw new Error('You need to provide REACT_APP_PROJECT_ID env variable')
}

const { provider } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ version: 1, chains, projectId }),
  provider
})
// import SupportAdmin from './pages/SupportAdmin';

// 3. Configure modal ethereum client
const ethereumClient = new EthereumClient(wagmiClient, chains)

//  const path = window.location.pathname

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(

    <BrowserRouter>
      <WagmiConfig client={wagmiClient}>
       <TransactionsProvider>
             <App /> 
        </TransactionsProvider>
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient}/>
    </BrowserRouter>
  
)



 // { path.indexOf('/support') === -1 ?  <App /> : <SupportAdmin /> }
