import Link from "next/link";
import Image from "next/image";
import logo from "../logo.png";
import Banner from "./Banner";

export const Navbar = () => {
  return (
    <>
      <Banner />
      <nav className="relative max-w-7xl w-full flex md:grid md:grid-cols-12 items-center px-4 md:px-8 mx-auto py-7">
        <div className="md:col-span-3">
          <Link href="/">
            <Image
              className="w-28"
              src={logo}
              width={150}
              height={150}
              alt="scoutr-logo"
            />
          </Link>
        </div>
      </nav>
    </>
  );
};
