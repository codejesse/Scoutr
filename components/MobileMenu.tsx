"use client";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import logo from "../app/logo.png";
import Image from "next/image";
import { navbarLinks } from "./NavbarLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const location = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-none border-none" variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle>
            <Image src={logo} width={120} height={120} alt="scoutr-logo" />
          </SheetTitle>
          <SheetDescription className="flex flex-col gap-3 text-left">
            {navbarLinks.map((item) => (
              <Link
                href={item.href}
                key={item.id}
                className={cn(
                  location === item.href
                    ? "underline font-semibold text-xl"
                    : "hover:underline transition-all ease-in-out text-xl",
                  ""
                )}
              >
                {item.name}
              </Link>
            ))}
          </SheetDescription>
        </SheetHeader>
        {/* <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  );
}
