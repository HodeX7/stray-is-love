import { Facebook, Instagram, Whatsapp } from "iconsax-react";
import Image from "next/image";

const Info = ({ title, data }) => {
  return (
    <div className="mb-6">
      <h1 className="font-bold text-xl mb-4">{title}</h1>
      <ul>
        {data.map((item, idx) => (
          <li
            className="text-muted text-md mb-[.5rem] cursor-pointer"
            key={idx}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="w-full flex flex-col sm:flex-row justify-around items-start py-8 bg-white text-black">
      <div className="logo flex flex-col items-center justify-center mb-6 sm:mb-0">
        <Image src={"/logo.webp"} alt="StrayLove logo" width={80} height={80} />
        <h1 className="font-black text-[3rem] tracking-[5px] my-4">
          STRAY IS LOVE
        </h1>
        <span className="text-muted text-md">
          @ 2024 | Stray Is Love | All Rights Reserved.
        </span>
      </div>
      <div className="flex flex-col sm:flex-row gap-10">
        <Info
          title="HELP"
          data={["Submit a query", "Returns & Exchanges", "FAQs"]}
        />
        <Info
          title="CONTACT"
          data={["support@strayslove.com", "+91 81691 44517"]}
        />
      </div>
      <div className="flex flex-col sm:ml-12">
        <div className="socials mb-8">
          <h1 className="font-bold text-xl mb-2">FOLLOW OUR SOCIALS</h1>
          <div className="flex items-center justify-start space-x-8">
            <Whatsapp variant="Bold" />
            <Instagram variant="Bold" />
            <Facebook variant="Bold" />
          </div>
        </div>
        <Info title="POLICIES" data={["Privacy Policy", "Terms of Services"]} />
      </div>
    </footer>
  );
};

export default Footer;
