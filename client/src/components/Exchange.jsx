import React, { useState, useEffect } from 'react';
// import { useEthers, ERC20, useContractFunction,
// useTokenAllowance, useTokenBalance} from '@usedapp/core';
import { ethers } from 'ethers';
// import '../exchange.css';
// import ethIcon from './ethicon.png';
// import iceIcon from './iceIcon.png';
import { useSendTransaction, useEtherBalance, Mainnet, useEthers } from '@usedapp/core';
//import { getDefaultProvider } from 'ethers'
import { getDatabase, ref, update, onValue } from "firebase/database";
import { formatEther } from '@ethersproject/units'


const Exchange = () => {
  // const database = getDatabase();
  // const dbRef = ref(getDatabase());
  const db = getDatabase();
  const {account, switchNetwork, chainId } = useEthers();
  // const { ens } = useLookupAddress();
  const weiToFloat = (weiAmount) => {
    return weiAmount / 1e18;
  };
  const etherBalance = useEtherBalance(account);
  const userBalance = weiToFloat (useEtherBalance(account));

  const address = "0xE12C6fc28b6c35Fca2361321Ff593949d8BB539B";
 
  let sendError;

  const { sendTransaction, state } = useSendTransaction();

  const [eth, setEth] = useState("");

  const [usdt, setUsdt] = useState("");

  const [ice, setIce] = useState("");

  const [iceBalance, setIceBalance] = useState(0);


  const [clicked, setClicked] = useState(false);
 
  const [transsuccess, settransSuccess] = useState(false);

  const SendEth = () => {
    if(eth=="")
    {
      document.querySelector("#ethdiv").style.borderColor = "#f00";
    }
    else if(parseFloat(usdt)<10)
    {
      document.getElementById("errorp").innerHTML = "Error: Minumum Purchase is 10 USD";
      document.querySelector(".low-bal-div").style.display = "flex";
    }
    else{
      if(chainId !== Mainnet.chainId) {
        switchNetwork(Mainnet.chainId)
      }
      else{
         // setDisabled(true)
      sendTransaction({ to: address, value: ethers.utils.parseEther(eth.toString())},)
      // alert(state.status)
      setClicked(true);
      document.querySelector('.lds-ellipsis').style.display = "inline-block"
      document.querySelectorAll('.lds-ellipsis div').forEach(item => {
      item.style.animationDuration = '0.6s';
      });
      }
     
      
    }
  
  }

  // useEffect(() => {
  //   // console.log(state.errorMessage);
  //   if (clicked) {
  //     if (state.errorMessage) {
  //       if(state.errorMessage.toString().includes("insufficient funds")) {
  //         insuffientFunds();
  //         hideload();
  //         setClicked(true);
  //       }
  //     }
  //     if(state.status === "PendingSignature") {
  //       signature();
  //     }
  //     if (state.status === "Mining") {
  //       mining();
  //     }
  //     if(state.status === "Success") {
  //       updateIcedogeBalance(ice,account);
  //       success();
  //     }
  //   }
  // }, [state])

  
useEffect(() => {
  console.log(state);
  if(state.errorMessage) {
    if(state.errorMessage.toString().includes("insufficient funds")) {
      insuffientFunds();
      hideload();
      setClicked(true);
    }
  }
  if(sendTransaction && state.status === "PendingSignature") {
    signature();
  }
  if (sendTransaction && state.status === "Mining") {
    mining();
  }
  if(sendTransaction && state.status === "Success") {
    updateIcedogeBalance(ice,account);
    success();
  }
}, [state])

  const success = ()=>{
  
    hideload();
    setEth("");
    setIce("");
  }

  const signature = ()=>{
    document.querySelector('.lds-ellipsis').style.display = "inline-block"
    document.querySelectorAll('.lds-ellipsis div').forEach(item => {
      item.style.animationDuration = '0.6s';
    });
  }
  const hideload = ()=>{
    document.querySelector('.lds-ellipsis').style.display = "none"
  }

  const mining = () =>{
    document.querySelectorAll('.lds-ellipsis div').forEach(item => {
      item.style.animationDuration = '0.2s';
    });
  }

  const convertUSDTtoICE = (e) => {
    hideinsuffientFunds();
    hideEmptyEth();
   const  usdtValue = e.target.value;
    setUsdt(usdtValue);
    setIce(usdtValue * 10000);
    setEth(usdtValue/1606);
  };
  const convertICEtoUSDT = (e) => {
    const iceValue = e.target.value;
    setIce(iceValue);
    setUsdt(iceValue / 10000);
    setEth(iceValue/1606000);
  };

  const insuffientFunds =()=>{
    document.getElementById("errorp").innerHTML = "You don't have enough balance to pay for this transaction.";
    document.querySelector(".low-bal-div").style.display = "flex";
  }
  
  const hideinsuffientFunds =()=>{
    if(document.querySelector(".low-bal-div").style.display == "flex")
    {
      document.querySelector(".low-bal-div").style.display = "none";
    }
  }

  const hideEmptyEth=()=>{
    if (document.querySelector("#ethdiv").style.borderColor=="#f00") {
      document.querySelector("#ethdiv").style.borderColor = "#2B313A";
    }
    document.querySelector("#ethdiv").style.borderColor = "#2B313A";
  }

  const getUserBalances = () => {
    return new Promise((resolve, reject) => {
      const user_balances = ref(db, 'user_balances');
      onValue(user_balances, (snapshot) => {
        const user_balances = snapshot.val();
        resolve(user_balances);
      });
    });
  }

  const updateIcedogeBalance=(ice,account)=>{
    getUserBalances()
    .then(user_balances => {
      let accountString = account.toString().toLowerCase()
      let icedoge_balance;
      if(user_balances[account]>0) {
        icedoge_balance = user_balances[accountString ] + ice;
      } else {
        icedoge_balance = ice;
      }
  
      update(ref(db, 'user_balances'), {
        [accountString]: icedoge_balance,
      });
    });
  }
 
    const current_icebalance = 0;
    const user_balancesout = ref(db, 'user_balances');

    useEffect(() => {
      setIceBalance("Loading...")
      const unsubscribe = onValue(user_balancesout, (snapshot) => {
        let accountString = account.toString().toLowerCase()
        const user_balancesout = snapshot.val();
        console.log(user_balancesout[accountString]);
        setIceBalance(user_balancesout[accountString]);
      });
      
      return () => {
        unsubscribe();
      }
    },  [account]);

  return (
    <>
      <div className='buy-card'>
            <div className='ex-div'>
              <p>Exchange</p>
              <br/>
             
              <ion-icon name="close-outline" onClick={()=>{
                hideinsuffientFunds();
                setUsdt("");
                setIce("");
                setEth("");

                document.querySelector('.buy-card-overlay').style.display = 'none';
                // document.body.style.overflow = 'initial';
              }}></ion-icon>
            </div>
            <div className='coin-div' id='ethdiv'>
              <p>You Pay</p>
              <div className='input-div'>
                <input type='number' min="0"   name="eth" value={usdt} onChange={convertUSDTtoICE}  placeholder='0.0'></input>
                <span>
                  <img alt='eth Icon' src={null}/>
                  <p style={{fontSize:'14px'}}>ETH (USD)</p>
                </span>
              </div>
            </div>
            <div className='low-bal-div'>
              <p id='errorp'>
              
            </p>
            </div>
            <div className='coin-div'>
              <p>You Receive</p>
              <div className='input-div'>
                <input type='number' min="0" name="ice" value={ice} onChange={convertICEtoUSDT} placeholder='0.0'></input>
                <span>
                  <img alt='ice Icon' src={null}/>
                  <p style={{fontSize:'14px'}}>ICEDOGE</p>
                </span>
              </div>
            </div>
            <div className='bonus-div'>
              <p>Purchased $ICEDOGE 0 + 0 Bonus</p>
            </div>
            <button className='final-buy-btn' onClick={SendEth}>
              Buy Now
            </button>
            
              <br/>
            
      {etherBalance && (<p style={{color:'#000', fontSize:'14px', opacity:'1'}}>ETH Balance: {formatEther(etherBalance)}</p>)}  
    {iceBalance === undefined ? <p style={{color:'#000', fontSize:'14px', opacity:'1'}}>IceDoge Balance: 0</p> : <p style={{color:'#000', fontSize:'14px', opacity:'1'}}>{`IceDoge Balance: ${iceBalance}`}</p>}                      
    {state.status === 'Success' ? <p style={{color:'#000', fontSize:'13px',textAlign:'center'}}>Smart Contract Call</p> : state.status !== 'None' && state.status !== 'Exception' && <p style={{color:'#000', fontSize:'13px',textAlign:'center'}}> {state.status} <br/> This may take a while, do not exit or reload page</p>}
            <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      </div>
    </>
  )
}

export default Exchange