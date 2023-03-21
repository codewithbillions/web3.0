
import React from 'react';

import { Testimonials, Accordion, Mission, Footer } from '../components';
import styles from "../style";


const Team = () => {
    return (
        <div className="bg-primary w-full overflow-hidden">
        <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        
        <Testimonials />
        <Mission />
        <Accordion/>
        <Footer />
        </div>
        </div>
        </div>
    );
}

export default Team;