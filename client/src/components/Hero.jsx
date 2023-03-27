import styles from "../style";
import { useState } from 'react';
import { smalldog, dog3 } from "../assets";
import {socialMedia } from "../constants";
import GetStarted from "./GetStarted";
import { Modal } from "../components";

const Hero = () => {

   const [openConnect, setOpenConnect] = useState(false);
   const handleOnClose = () => setOpenConnect(false)

  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={smalldog} alt="blurdog" className="w-[32px] h-[32px] animate-bounce w-6 h-6" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Join </span> The $ICEDOGE {" "}
            <span className="text-white"></span> Presale Now
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] ">
           <span className="font-hero">ICEDOGE</span>  <br className="sm:block hidden" />{" "}
            <span className="text-gradient">PRESALE</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0 w-6">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          IS LIVE NOW
        </h1>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          <div className=" bg-opacity-30">
      <div className="max-w-3xl mx-auto ">
        <span className="text-center py-2">
          <img src={smalldog} alt="blurdog" className="w-[18px] h-[18px] animate-bounce w-6 ml-60 " />
          <button  className="rounded-full gradient-bg-services text-white px-5 py-4 rounded hover:scale-95 transition text-xl  ml-48" onClick={() => setOpenConnect(true)}>
            BUY NOW
          </button>
        </span>
   
          <Modal onClose={handleOnClose} visible={openConnect} />  
      </div>
      </div>
        </h1>
        
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          A Decentralised meme token built for the community to transfer income into the DeFi ecosystem and safeguard a crucial component of the ecosystem.
        </p>
        

        <div className="flex flex-row md:mt-4 mt-6 animate-bounce w-6 h-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
      </div>

      

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        
        <img src={dog3} alt="billing" className="w-[50%] h-[50%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
