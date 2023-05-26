"use client";

import useWindowSize from "@/app/hooks/useWindowSize";
import { Carousel } from "antd";

import Image from "next/image";
import Slide1 from "../public/slide1.png";
import Slide2 from "../public/slide2.png";
import Slide3 from "../public/slide3.png";

const Slider = () => {
  const innerWidth = useWindowSize();

  return (
    <div className="w-full mt-12 md:mt-20 justify-center items-center">
      {innerWidth < 460 ? (
        <Carousel arrows={false} dots={{ className: "customDots" }}>
          <div className="w-full  flex justify-center items-center">
            <Image
              src={Slide1}
              alt={""}
              object-fit="contain"
              className="m-auto scale-90"
            />
          </div>
          <div className="w-full flex justify-center items-center">
            <Image
              src={Slide2}
              alt={""}
              object-fit="contain"
              className="m-auto scale-90"
            />
          </div>
          <div className="w-full flex justify-center items-center">
            <Image
              src={Slide3}
              alt={""}
              object-fit="contain"
              className="m-auto scale-90 mb-16"
            />
          </div>
        </Carousel>
      ) : (
        <div className="flex flex-row justify-center space-x-8 items-center">
          <div>
            <Image
              src={Slide1}
              alt={""}
              object-fit="contain"
              className="m-auto"
            />
          </div>
          <div>
            <Image
              src={Slide2}
              alt={""}
              object-fit="contain"
              className="m-auto"
            />
          </div>
          <div>
            <Image
              src={Slide3}
              alt={""}
              object-fit="contain"
              className="m-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Slider;
