import Image from "next/image";
import Background from "../public/background.png";
import Image1 from "../public/image1.png";
import MiddleIcon from "../public/middleIcon.png";

const MainContent = () => {
  return (
    <div className="flex justify-center w-full  md:mt-32 bg-[url('../public/background.png')] bg-center bg-no-repeat bg-contain h-full">
      <div className="relative flex justify-center">
        <Image
          src={MiddleIcon}
          alt={""}
          object-fit="contain"
          className="absolute scale-50 md:scale-100 -right-3 -top-6 md:-top-36 md:-right-6"
        />

        <Image
          src={Image1}
          alt={""}
          object-fit="contain"
          className="scale-90 md:scale-100"
        />
      </div>
    </div>
  );
};

export default MainContent;
