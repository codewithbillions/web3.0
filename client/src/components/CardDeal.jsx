import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <Button styles={`mt-10`} />
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Decentralised Exchange <br className="sm:block hidden" /> IceDoge Swap
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        There are over 1,500 different types of cryptocurrencies. $ICEDOGE provides an adaptive swap interface that allows users to exchange their tokens quickly using the website. For every active transaction, a $ICEDOGE reward is granted to holders’ decentralized wallets to foster a healthy community usage
      </p>

      
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
