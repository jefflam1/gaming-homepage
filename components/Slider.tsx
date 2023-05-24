"use client";

import { Carousel, Rate } from "antd";

import Image from "next/image";
import Slide1 from "../public/slide1.png";
import Slide2 from "../public/slide2.png";
import Slide3 from "../public/slide3.png";

const Slider = () => {
  return (
    <div className="w-full mt-12">
      <Carousel arrows={true} dots={{ className: "abc" }}>
        <div className="w-full  flex justify-center items-center">
          <Image
            src={Slide1}
            alt={""}
            object-fit="contain"
            className="m-auto"
          />
        </div>
        <div className="w-full flex justify-center items-center">
          <Image
            src={Slide2}
            alt={""}
            object-fit="contain"
            className="m-auto"
          />
        </div>
        <div className="w-full flex justify-center items-center">
          <Image
            src={Slide3}
            alt={""}
            object-fit="contain"
            className="m-auto mb-16"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
