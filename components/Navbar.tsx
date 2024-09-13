import Link from "next/link";
import Image from "next/image";
import logo from "../app/logo.png";
import { NavbarLinks } from "./NavbarLinks";
import Banner from "./Banner";
import { MobileMenu } from "./MobileMenu";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "./ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { UserNav } from "./UserNav";

export async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

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
        <NavbarLinks />

        <div className="hidden md:flex xl:flex lg:flex items-center gap-x-2 ms-auto md:col-span-3">
          {user ? (
            <UserNav
              email={user.email as string}
              name={user.given_name as string}
              userImage={
                user.picture ?? `https://avatar.vercel.sh/${user.given_name}`
              }
            />
          ) : (
            <>
              <Button
                asChild
                className="bg-white px-5 py-3 text-black hover:bg-white"
              >
                <LoginLink>Login</LoginLink>
              </Button>
              <Button
                asChild
                className="bg-[#fafafa] hover:bg-[#fafafa] text-black"
              >
                <RegisterLink>Register</RegisterLink>
              </Button>
            </>
          )}
        </div>
        <div className="flex lg:hidden md:hidden xl:hidden items-center gap-x-2 ms-auto md:col-span-3">
          <MobileMenu />
        </div>
      </nav>
    </>
  );
}
