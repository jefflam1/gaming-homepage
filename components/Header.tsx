import Image from "next/image";
import Link from "next/link";
import MainLogo from "../public/mainlogo.png";
import Register from "../public/register.png";

const Header = () => {
  return (
    <div className="p-6 md:px-24 md:py-16 flex flex-row justify-between items-center w-full">
      <div>
        <Link href={"/"}>
          <Image src={MainLogo} alt={"main logo"} object-fit="contain" />
        </Link>
      </div>
      <div className="md:flex flex-row justify-between space-x-6 hidden ">
        <div className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#C1260F] to-[#EE642A]">
          Marketplace
        </div>
        <div>Stats</div>
        <div>Collections</div>
        <div>Explore</div>
        <div>Community</div>
      </div>
      <div>
        {" "}
        <Image src={Register} alt={""} object-fit="contain" />
      </div>
    </div>
  );
};

export default Header;
