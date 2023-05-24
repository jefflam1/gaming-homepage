import Image from "next/image";
import TitleIcon from "../public/titleIcon.png";

const Title = () => {
  return (
    <div className="flex flex-row justify-center relative mt-16">
      <Image
        src={TitleIcon}
        alt={"main logo"}
        object-fit="contain"
        className="absolute -top-16 -left-12 md:-top-12 md:left-32 scale-[0.6] md:scale-100"
      />

      <div className="break-words w-72 md:w-3/5 font-bebasNeue text-4xl md:text-7xl text-center">
        Next Generation Get Your Desierd Rank Now
      </div>
    </div>
  );
};

export default Title;
