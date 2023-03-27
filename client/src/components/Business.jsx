import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={`${layout.sectionInfo} mx-5`} >
      <h2 className={`${styles.heading2} ml-10` }>
         Tokenomics
      </h2>
      <p className={`${styles.paragraph} max-w-[680px] `}>
      $ICEDOGE is a full-fledge community token designed specially to transfer income into the DeFi ecosystem. The token that users purchase will be split, and by design this will provide an upward price pressure for the token. This will allow us to keep developing the platform and provide a source of utility for tokens.
      </p>
       <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 mx-4 my-4"/>
          <p className="text-white text-sm w-11/12 text-center mx-4 my-4">Token Name: ICEDOGE</p>
     <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-4 mx-4 my-4"/>
    <p className="text-white text-sm w-11/12 text-center mx-4 my-4">Blockchain: Ethereum</p>
    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-4 mx-4 my-4"/>
    <p className="text-white text-sm w-11/12 text-center mx-4 my-4">Decimal: 18</p>
     <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-4 mx-4 my-4"/>
    <p className="text-white text-sm w-11/12 text-center ">Token Contract Address:
      0x6475a3628649f97t9f81259803802f2188770870</p>
    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-4 mx-4 my-4"/>
    <p className="text-white text-sm w-11/12 text-center ">Presale Contract Address: 
      0x6475a3628649f97t9f81259803802f2188770870</p>
    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 m-5 "/>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);



const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 mx-4 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

export default Business;


