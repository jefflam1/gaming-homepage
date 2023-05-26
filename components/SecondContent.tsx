"use client";

import Image from "next/image";
import MiddleIcon from "../public/middleIcon.png";
import DownArrow from "../public/downArrow.png";
import Playnow from "../public/playnow.png";
import Watchtrailor from "../public/watchtrailor.png";
import PlaynowMobile from "../public/playnowMobile.png";
import WatchtrailorMobile from "../public/watchtrailorMobile.png";

import Gamepic1 from "../public/gamePic1.png";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import { useState } from "react";
import useWindowSize from "@/app/hooks/useWindowSize";

const content = [
  {
    title: "Staff Picks With Erin This Week's Top Picks",
    body: "For the Consuming Campaign discharge, I remained up the entire evening playing and wound up leaving school 'cos I was nodding off all over. Most certainly utilized being debilitated a ton in school to mess around. Presently I simply use excursion when games I'm energized for emerge.",
  },
  {
    title: "Compelling Games Is 20 Years of age!",
    body: "For the Consuming Campaign discharge, I remained up the entire evening playing and wound up leaving school 'cos I was nodding off all over. Most certainly utilized being debilitated a ton in school to mess around. Presently I simply use excursion when games I'm energized for emerge.",
  },
  {
    title: "Irresistible Games Merchandise Is Here",
    body: "For the Consuming Campaign discharge, I remained up the entire evening playing and wound up leaving school 'cos I was nodding off all over. Most certainly utilized being debilitated a ton in school to mess around. Presently I simply use excursion when games I'm energized for emerge.",
  },
];

const SecondContent = () => {
  const [open, setOpen] = useState<number>(1);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  const innerWidth = useWindowSize();

  return (
    <div className="p-6 md:px-24 md:py-16 flex flex-col justify-center">
      <div className="flex flex-col justify-center items-center">
        <Image
          src={MiddleIcon}
          alt={""}
          object-fit="contain"
          className="scale-[0.6] md:scale-100 "
        />

        <div className="break-words w-72 md:w-4/5 font-bebasNeue text-4xl md:text-7xl text-center">
          THE Most recent Patterns, Conveyed Directly TO YOUR INBOX.
        </div>
      </div>
      <div className="flex flex-col  sm:flex-row w-full justify-between">
        <Image
          src={Gamepic1}
          alt={""}
          object-fit="contain"
          className="flex-1"
        />
        <div className="flex flex-col px-6 sm:p-0 sm:flex-1 w-full justify-center">
          <>
            {content.map((c, index) => (
              <Accordion
                onClick={() => handleOpen(index + 1)}
                open={open === index + 1}
                className="border-none bg-transparent my-2"
              >
                <AccordionHeader
                  className={`${
                    open === index + 1
                      ? `bg-gradient-to-r from-[#a1a1a1] to-[#EE642A] rounded-md`
                      : `bg-black border-b-[1px] border-white`
                  }  text-[12px] md:text-[16px] flex text-white font-nunito p-0.5`}
                >
                  <span
                    className={`${
                      open === index + 1
                        ? `bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#4e4e4e]  to-[#171616] rounded-md p-5`
                        : `bg-black`
                    } flex flex-row w-full h-16 items-center`}
                  >
                    <Image
                      src={DownArrow}
                      alt={""}
                      object-fit="contain"
                      className={`mr-4  ${
                        open === index + 1 ? "null" : "rotate-180"
                      }`}
                    />{" "}
                    {c.title}
                  </span>
                </AccordionHeader>
                <AccordionBody className="bg-black text text-white sm:text-xl leading-5 font-nunito">
                  {c.body}
                </AccordionBody>
              </Accordion>
            ))}
          </>
          <div className="flex flex-row mt-6 relative">
            <Image
              src={innerWidth <= 460 ? PlaynowMobile : Playnow}
              alt={""}
              object-fit="contain"
              className=""
            />
            <Image
              src={innerWidth <= 460 ? WatchtrailorMobile : Watchtrailor}
              alt={""}
              object-fit="contain"
              className="absolute left-20 sm:left-[104px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondContent;
