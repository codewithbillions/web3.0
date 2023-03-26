import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
import { TransactionsProvider } from "./context/TransactionContext";
import {  Web3Modal } from '@web3modal/react'
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'

import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { arbitrum, avalanche, bsc, fantom, gnosis, mainnet, optimism, polygon } from 'wagmi/chains'
import { BrowserRouter } from "react-router-dom";

// 1. Get projectID at https://cloud.walletconnect.com
const projectId = "080925ff734019202f8750b91ac5b373"
//import.meta.env.VITE_APP_PROJECT_ID

if (!projectId) {
  throw new Error('You need to provide REACT_APP_PROJECT_ID env variable')
}

// 2. Configure wagmi client
const chains = [mainnet, polygon, avalanche, arbitrum, gnosis, bsc, optimism, fantom]

const { provider } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ version: 1, chains, projectId }),
  provider
})
import SupportAdmin from './pages/SupportAdmin';

// 3. Configure modal ethereum client
const ethereumClient = new EthereumClient(wagmiClient, chains)

 const path = window.location.pathname

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(

    <BrowserRouter>
       <TransactionsProvider> 
          { path.indexOf('/support') === -1 ?  <App /> : <SupportAdmin /> }
        <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
       </TransactionsProvider>
      </BrowserRouter>
  
)



