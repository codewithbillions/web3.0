import React, { useEffect } from 'react';
import {bigdogfull} from './../assets';


const NotFound = () => {

  // This will run only once after the component is mounted
  useEffect(() => {
    document.title = "Page Not Found";
  }, []);

  return (
    <div
    className='div404'
      style={{
        height: '90vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1 className=" font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] ">404 Not Found!</h1>
      <img src={bigdogfull} alt="bigicedoge" />
    </div>
  );
};

export default NotFound;