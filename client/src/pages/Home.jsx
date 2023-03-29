import { Navbar,Welcome, TxUpdate,  Billing, Business, CardDeal, Clients, CTA, Footer, Stats, Mission, Hero, Accordion, NFThero } from "../components";


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
    <div className="gradient-bg-welcome">
      <Welcome />
    </div>
    <Stats />
    <Business />
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}> 
      <Billing />
      <CardDeal />
      <NFThero/>
      <Mission />
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