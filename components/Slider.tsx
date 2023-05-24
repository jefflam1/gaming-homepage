"use client";

import { Carousel, Rate } from "antd";

import Image from "next/image";
import { useEffect, useState } from "react";
import Slide1 from "../public/slide1.png";
import Slide2 from "../public/slide2.png";
import Slide3 from "../public/slide3.png";

const Slider = () => {
  const useWindowSize = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      if (typeof window !== "undefined") {
        const handleResize = () => {
          setWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
      }
    }, []);

    return width;
  };

  const innerWidth = useWindowSize();
  console.log(innerWidth);
  return (
    <div className="w-full mt-12 md:mt-20 justify-center items-center">
      {innerWidth < 460 ? (
        <Carousel arrows={false} dots={{ className: "abc" }}>
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
        <div className="flex flex-row justify-center space-x-4 items-center">
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
