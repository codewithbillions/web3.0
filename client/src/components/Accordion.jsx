import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
const Accordion1 = () => {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <Fragment className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <Accordion className="text-white text-3xl sm:text-5xl py-2 text-gradient "  open={open === 0} disabled>
        <AccordionHeader>
         FAQ
        </AccordionHeader>
        <AccordionBody className="text-white text-left my-2 font-light md:w-9/12 w-11/12 text-base">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion className="text-left my-2 text-white font-light md:w-9/12 w-11/12 " open={open === 1}>
        <AccordionHeader className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base" onClick={() => handleOpen(1)}>
          What are the Objectives of Icedoge Token?
        </AccordionHeader>
        <AccordionBody className="text-white">
          As clearly stated in our Whitepaper, we aim to effortlessly introduce well-known cryptocurrency principles to the general public.

            Furthermore, we have a dream to become a worldwide brand with many use cases. We hope to achieve this by giving back to the public through charity and also collaborating with top businesses in various sectors.
        </AccordionBody>
      </Accordion>
      <Accordion className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base" open={open === 2}>
        <AccordionHeader className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base" onClick={() => handleOpen(2)}>
          Does $ICD have any reward system?
        </AccordionHeader>
        <AccordionBody className="text-white">
         Yes. There is a reward system. For all active transactions, we will reward you with 2% $ICD, which will be sent to your decentralized wallet. This means that the more the $ICEDOGE token is used, the more the reward.


        </AccordionBody>
      </Accordion>
      <Accordion className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base" open={open === 3}>
        <AccordionHeader className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base" onClick={() => handleOpen(3)}>
          Does Investing in Icedoge worth it?
        </AccordionHeader>
        <AccordionBody className="text-white">
         Although Icedoge as with other cryptocurrencies is a speculative investment, with the strength the community has, it is worth investing. You can purchase the $ICD token using fractions of a penny, and it has a total supply of 700,000,000,000.
        </AccordionBody>
        </Accordion>
        <Accordion className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base" open={open === 4}>
        <AccordionHeader className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base" onClick={() => handleOpen(4)}>
          What is Ice Doge?
        </AccordionHeader>
        <AccordionBody className="text-white">
         Icedoge is a digital currency with a purpose. And that is going to the moon. The icedoge ecosystem consists of a decentralized exchange, and an NFT marketplace
        </AccordionBody>
        </Accordion>
        <Accordion className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base" open={open === 5}>
        <AccordionHeader className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base" onClick={() => handleOpen(5)}>
          Icedoge($ICD) is built on which cryptocurrency Blockchain?
        </AccordionHeader>
        <AccordionBody className="text-white">
        Icedoge is a digital currency with a purpose. And that is going to the moon. The icedoge ecosystem consists of a decentralized exchange, and an NFT marketplace.
        </AccordionBody>
        </Accordion>
        <Accordion className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base" open={open === 6}>
        <AccordionHeader className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base" onClick={() => handleOpen(6)}>
          Where will the $Icedoge token presale hold?
        </AccordionHeader>
        <AccordionBody className="text-white">
        You can access the Icedoge presale on the Icedoge official website.
        </AccordionBody>
        </Accordion>
        <Accordion className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base" open={open === 7}>
        <AccordionHeader className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base" onClick={() => handleOpen(7)}>
          How many $ ICDs will be available during the Presale?
        </AccordionHeader>
        <AccordionBody className="text-white">
        A total of 100 Billion $ICD, Icedoge tokens will be available during the token presale.
        </AccordionBody>
        </Accordion>
        <Accordion className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base" open={open === 8}>
        <AccordionHeader className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base" onClick={() => handleOpen(8)}>
          On which exchange platform will $Icedoge be listed after the token presale?
        </AccordionHeader>
        <AccordionBody className="text-white">
        The Icedoge token will be available on platforms such as Uniswap, CEX, etc.
        </AccordionBody>
        </Accordion>
        <Accordion className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base" open={open === 9}>
        <AccordionHeader className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base" onClick={() => handleOpen(9)}>
          Can I request assistance when purchasing $Icedoge tokens?
        </AccordionHeader>
        <AccordionBody className="text-white">
        You can make use of any of the available helplines on the official website. Also, you can contact an admin in the community or on our social media platforms.
        </AccordionBody>
        </Accordion>
    </Fragment>
  );
}


export default Accordion1;