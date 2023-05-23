import Image from "next/image";
import TitleIcon from "../public/titleIcon.png";

const Title = () => {
  return (
    <div className="flex flex-row relative mt-8">
      <Image
        src={TitleIcon}
        alt={"main logo"}
        object-fit="contain"
        className="absolute -top-8 -left-12 md:-top-9 md:-left-14 w-12 h-14 md:w-14 md:h-16"
      />

      <div className="font-bebasNeue text-4xl md:text-7xl text-center">
        Next Generation Get Your
        <br /> Desierd Rank Now
      </div>
    </div>
  );
};

export default Title;
