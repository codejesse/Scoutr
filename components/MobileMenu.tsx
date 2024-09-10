"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
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

export function MobileMenu() {
  const [isToggled, setToggled] = useState(false);

  function handleClick() {
    setToggled(!isToggled);
  }

  function handleClose() {
    setToggled(false);
  }

  return (
    <>
      {isToggled ? (
        <Sheet>
          <SheetTrigger asChild>
            <Button className="bg-none border-none" variant="outline">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ) : (
        <div onClick={handleClick}>
          <Menu />
        </div>
      )}
    </>
  );
}
