import styles from "../style";
import Button from "./Button";
import { icegod } from "../assets";
import { Web3Button} from '@web3modal/react';

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
    
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Economic specialists forecast a global market of over 176.5 billion USD within the next decade Icedoge is driven to unite its token users globally to utilize it for accessing top products and services.
      </p>
      

        <h2 className={styles.heading2}>Become an ice god today</h2>
        <img className="w-[82px] h-[82px] animate-bounce w-6 h-6" src={icegod}/>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
       Connect your wallet
      </p>
      <Web3Button/>
      
    </div>
    

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
   
    </div>
  </section>

    
      
);

export default CTA;
