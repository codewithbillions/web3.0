
import React from 'react';

import { GoBack, Testimonials, CardDeal, Accordion, Footer } from '../components';
import {Link} from "react-router-dom"
import styles from "../style";


const Team = () => {
    return (
            <div className="bg-primary w-full overflow-hidden">
                <div className={`bg-primary ${styles.flexStart}`}>
                    <div className={`${styles.boxWidth}`}>
                        <div className={` ${styles.flexCenter}`}>
                        <Link to="/">
                            <GoBack />
                        </Link>
                        
                        </div>
                        <Testimonials />
                        <CardDeal />
                        <Accordion/>
                        <Footer />
                    </div>
                </div>
            </div>
    );
}

export default Team;