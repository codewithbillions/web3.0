import {  Navbar, Welcome, Services, Transactions, TxUpdate,  Billing, Business, CardDeal, Clients, CTA, Footer, Stats, Mission, Hero, Accordion, Testimonials,  } from "./components";
import styles from "./style";
import {Routes, Route,} from 'react-router-dom'
import Team from './pages/Team'




const App = () => (
   <div className="min-h-screen">
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
     
    </div>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className="gradient-bg-welcome">
     
      <Welcome />
    </div>
    
    <Services />
    <Transactions />
    <TxUpdate />
    
  
  <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
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

export default App;

// const Team = () => {
        
//     return (
       
//         <div>
//         <Navbar />
//         <Accordion/>
//         <Testimonials />
//         <Footer /> 
//         </div>
//     );
// }

