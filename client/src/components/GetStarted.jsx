import styles from "../style";
import { smalldog } from "../assets";


const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Get</span>
        </p>
        <img src={smalldog} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
      </div>
      
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient" >Started</span>
      </p>
      <button style={{marginTop:'0px'}}
             className=" bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-white px-2 py-2 rounded hover:scale-95 transition text-xl cursor-pointer"
             onClick={()=>{
              window.open("https://etherscan.io/address/0xE12C6fc28b6c35Fca2361321Ff593949d8BB539B", "_blank")
             }}
             >
            <span style={{ display: "flex", justifyContent: "center", alignItems: "center", background: "none", fontSize: "16px" }}>
              Etherscan
            <ion-icon name="chevron-forward-outline" />
            </span>
            </button>
    </div>
  </div>
);

export default GetStarted;
