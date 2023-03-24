import { Navbar,Welcome, Transactions, TxUpdate,  Billing, Business, CardDeal, Clients, CTA, Footer, Stats, Mission, Hero, Accordion } from "../components";

import styles from "../style";

const Home = () => (
     <div>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                  
                </div>
            </div>
          
    <div className="bg-primary w-full overflow-hidden">
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <TxUpdate />
    <Stats />
        <Business />
        
    
    <div className="gradient-bg-welcome">
      <Welcome />
      <Transactions />
    </div>
    
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
        
        <Billing />
     
        <Mission/>
        <Clients />
        <CTA />
        <Accordion />
        <Footer />
      </div>
  </div>
  </div>
  </div>

);

export default Home;