"use client";

import useWindowSize from "@/app/hooks/useWindowSize";
import Image from "next/image";
import Link from "next/link";
import MainLogo from "../public/mainlogo.png";
import Menu from "../public/menu.png";

const Footer = () => {
  const innerWidth = useWindowSize();
  console.log(innerWidth);
  return (
    <div className="p-6 md:px-24 md:py-16 flex flex-col justify-between items-center w-full">
      {innerWidth < 460 ? (
        <>
          <div className="flex flex-col items-center w-full border-b-2 border-[#1E293B]">
            <div className="flex flex-row justify-between items-center w-full">
              <Link href={"/"}>
                <Image src={MainLogo} alt={"main logo"} object-fit="contain" />
              </Link>
              <div>
                {" "}
                <Image src={Menu} alt={""} object-fit="contain" />
              </div>
            </div>
            <div className="flex flex-row justify-between space-x-4 w-full max-w-[350px] text-[0.6rem] py-10">
              <div>Marketplace</div>
              <div>Stats</div>
              <div>Collections</div>
              <div>Explore</div>
              <div>Community</div>
            </div>
          </div>
          <div className="pt-10 pb-20 text-[#CBD5E1] text-[10px] text-center">
            © Copyright 2023, All Rights Reserved by Play Games
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-row justify-between items-center w-full border-b-2 border-[#1E293B] py-16">
            <div>
              <Link href={"/"}>
                <Image src={MainLogo} alt={"main logo"} object-fit="contain" />
              </Link>
            </div>
            <div className="md:flex flex-row justify-between space-x-6 hidden max-w-md">
              <div>Marketplace</div>
              <div>Stats</div>
              <div>Collections</div>
              <div>Explore</div>
              <div>Community</div>
            </div>
            <div>
              {" "}
              <Image src={Menu} alt={""} object-fit="contain" />
            </div>
          </div>
          <div className="pt-10 pb-20 text-[#CBD5E1] text-sm text-center font-poppins">
            © Copyright 2023, All Rights Reserved by Play Games
          </div>
        </>
      )}
    </div>
  );
};

export default Footer;
