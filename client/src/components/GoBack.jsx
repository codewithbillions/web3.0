import styles from "../style";
import { smalldog } from "../assets";

const GoBack = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[23px] leading-[23.4px]">
          <span className="text-gradient">Go</span>
        </p>
        <img src={smalldog} alt="arrow-up" className="w-[40px] h-[40px] object-contain animate-bounce w-6 h-6" />
      </div>
      
      <p className="font-poppins font-medium text-[30px] leading-[23.4px]">
        <span className="text-gradient">Back</span>
      </p>
    </div>
  </div>
);

export default GoBack;
