"use client";

import Image from "next/image";

import GamePic2 from "../public/gamePic2.png";
import GamePic3 from "../public/gamePic3.png";
import GamePic4 from "../public/gamePic4.png";
import GamePic5 from "../public/gamePic5.png";
import GamePic2Mobile from "../public/gamePic2Mobile.png";
import GamePic3Mobile from "../public/gamePic3Mobile.png";
import GamePic4Mobile from "../public/gamePic4Mobile.png";
import GamePic5Mobile from "../public/gamePic5Mobile.png";
import Viewmore from "../public/viewmore.png";
import useWindowSize from "@/app/hooks/useWindowSize";

const ThirdContent = () => {
  const innerWidth = useWindowSize();

  return (
    <div className="flex flex-col p-10 md:px-32 md:py-0 w-full">
      <div className="uppercase font-bebasNeue text-3xl w-[80%] md:w-[450px] md:text-5xl">
        we’re the first gaming award winners the world
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-flow-row gap-4 mt-8">
        <Image
          src={innerWidth <= 460 ? GamePic2Mobile : GamePic2}
          alt={""}
          className="md:pt-20"
        />
        <Image
          src={innerWidth <= 460 ? GamePic3Mobile : GamePic3}
          alt={""}
          className=""
        />
        <Image
          src={innerWidth <= 460 ? GamePic4Mobile : GamePic4}
          alt={""}
          className=""
        />

        <div className="md:-mt-20 flex flex-col justify-between">
          <Image
            src={innerWidth <= 460 ? GamePic5Mobile : GamePic5}
            alt={""}
            className=""
          />

          <div className="flex flex-col py-10 md:py-0">
            <div className="font-nunito text-lg">We’ve have many more than</div>
            <div className="flex flex-row justify-between">
              <div className="font-bebasNeue text-5xl">100+</div>
              <Image
                src={Viewmore}
                alt={""}
                object-fit="contain"
                className="scale-75 md:scale-100"
              />
            </div>
            <div className="font-nunito text-lg">
              Gaming{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C1260F] to-[#EE642A]">
                Collections
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdContent;
