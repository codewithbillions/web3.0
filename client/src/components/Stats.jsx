
import styles from "../style";
import {smalldog} from '../assets'

const Stats = () => { 
  
  return (
    <div className="mt-0">
   <section id='roadmap'   className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">Roadmap</h1>
      <p className=" mt-5 mb-5 text-white font-light text-base w-100%">
        AT ICEDOGE we have laid the foundation and our team is working assiduously atbuilding the platform and ecosystem
      </p>
      <div className='ml-8'>

        {/* ITEM ONE */}
        <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism text-white mt-5 mb-5" >
            <div  >
              <img src={smalldog} alt="blurdog" className="w-[18px] h-[18px] animate-bounce w-6 ml-60 " />
            </div>
              <span className='vertical-line'>
              </span>
            <div className='roadmap-details active-road'>
              <h1 className="font-hero">Phase 1 - Walk</h1>
              <ul className="font-timer p-4">
                <li className='list-done'>
                  <p style={{display:'flex',alignItems:'center'}}>
                    <p className='dot' style={{fontSize:'7px'}}>⚪</p>   <p className='phase-item'>Website Development</p></p>
                  <ion-icon name="checkmark-circle"></ion-icon>
                </li>
                <li className=''>
                  <p style={{display:'flex',alignItems:'center'}}>
                    <p className='dot' style={{fontSize:'7px'}}>⚪</p>   <p className='phase-item'>Social Media Setup</p></p>
                  <ion-icon name="checkmark-circle"></ion-icon>
                </li>
                <li className=''>
                  <p style={{display:'flex',alignItems:'center'}}>
                    <p className='dot' style={{fontSize:'7px'}}>⚪</p>   <p className='phase-item'>Whitepaper</p></p>
                  <ion-icon name="checkmark-circle"></ion-icon>
                </li>
                <li className=''>
                  <p style={{display:'flex',alignItems:'center'}}>
                    <p className='dot' style={{fontSize:'5px'}}>⚪</p>   <p className='phase-item'>$ICEDOGE TOKEN Presale launch</p></p>
                  <ion-icon name="checkmark-circle"></ion-icon>
                </li>
                <li className=''>
                  <p style={{display:'flex',alignItems:'center'}}>
                    <p className='dot' style={{fontSize:'7px'}}>⚪</p>   <p className='phase-item'>Influencers and promoters</p></p>
                  <ion-icon name="checkmark-circle"></ion-icon>
                </li>
                <li className=''>
                  <p style={{display:'flex',alignItems:'center'}}>
                    <p className='dot' style={{fontSize:'7px'}}>⚪</p>   <p className='phase-item'>Security Audit</p></p>
                  <ion-icon name="checkmark-circle"></ion-icon>
                </li>
                <li className=''>
                  <p style={{display:'flex',alignItems:'center'}}>
                    <p className='dot' style={{fontSize:'7px'}}>⚪</p>   <p className='phase-item'>Icedrops</p></p>
                  <ion-icon name="checkmark-circle"></ion-icon>
                </li>
              </ul>
            </div>
          </div>
       {/* ITEM ONE */}

        {/* ITEM TWO */}
       <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism text-white mt-5 mb-5" data-aos="fade-right" >
            <div >
              <img src={smalldog} alt="blurdog" className="w-[18px] h-[18px] animate-bounce w-6 ml-60 " />
            </div>
              <span className='vertical-line'>
              </span>
            <div className='roadmap-details second'>
              <h1 className="font-hero">Phase 2 - Trot</h1>
              <ul className="font-timer p-4">
                <li className=''>
                  <p style={{display:'flex',alignItems:'center'}}>
                    <p className='dot' style={{fontSize:'7px'}}>⚪</p>   <p className='phase-item'>Listing on CMX and/or Binance</p></p>
                  <ion-icon name="checkmark-circle"></ion-icon>
                </li>
                <li className=''>
                  <p style={{display:'flex',alignItems:'center'}}>
                    <p className='dot' style={{fontSize:'7px'}}>⚪</p>   <p className='phase-item'>NFT Launch</p></p>
                  <ion-icon name="checkmark-circle"></ion-icon>
                </li>
                <li className=''>
                  <p style={{display:'flex',alignItems:'center'}}>
                    <p className='dot' style={{fontSize:'7px'}}>⚪</p>   <p className='phase-item'> More Social Media Setups</p></p>
                  <ion-icon name="checkmark-circle"></ion-icon>
                </li>
                <li className=''>
                  <p style={{display:'flex',alignItems:'center'}}>
                    <p className='dot' style={{fontSize:'7px'}}>⚪</p>   <p className='phase-item'>Foreign Marketing</p></p>
                  <ion-icon name="checkmark-circle"></ion-icon>
                </li>
                <li className=''>
                  <p style={{display:'flex',alignItems:'center'}}>
                    <p className='dot' style={{fontSize:'7px'}}>⚪</p>   <p className='phase-item'>Trust Wallet Logo</p></p>
                  <ion-icon name="checkmark-circle"></ion-icon>
                </li>
             

      
              </ul>
            </div>
        </div>
        {/* ITEM TWO */}

         {/* ITEM THREE */}
         <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism text-white" data-aos="fade-right " >
            <div>
              <img src={smalldog} alt="blurdog" className="w-[18px] h-[18px] animate-bounce w-6 ml-60 " />
            </div>
              <span className='vertical-line'>
              </span>
            <div className='roadmap-details third'>
              <h1 className="font-hero">Phase 3 - Gallop</h1>
              <ul className="font-timer p-4">
                <li className=''>
                  <p style={{display:'flex',alignItems:'center'}}>
                    <p className='dot' style={{fontSize:'7px'}}>⚪</p>   <p className='phase-item'>CEX Listing</p></p>
                  <ion-icon name="checkmark-circle"></ion-icon>
                </li>
                <li className=''>
                  <p style={{display:'flex',alignItems:'center'}}>
                    <p className='dot' style={{fontSize:'7px'}}>⚪</p>   <p className='phase-item'>NFT Staking</p></p>
                  <ion-icon name="checkmark-circle"></ion-icon>
                </li>
                <li className=''>
                  <p style={{display:'flex',alignItems:'center'}}>
                    <p className='dot' style={{fontSize:'7px'}}>⚪</p>   <p className='phase-item'>Partner with NFT Market Place</p></p>
                  <ion-icon name="checkmark-circle"></ion-icon>
                </li>
                <li className=''>
                  <p style={{display:'flex',alignItems:'center'}}>
                    <p className='dot' style={{fontSize:'7px'}}>⚪</p>   <p className='phase-item'>Add Classic Validator</p></p>
                  <ion-icon name="checkmark-circle"></ion-icon>
                </li>
            

      
              </ul>
            </div>
        </div>
         {/* ITEM THREE */}
      </div>
    </section>
  </div>
  )
};

export default Stats;
