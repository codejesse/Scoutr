"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";

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
        <div className="bg-white h-200px w-8/12">
          <X onClick={handleClose} />
          drawer eyy
        </div>
      ) : (
        <div onClick={handleClick}>
          <Menu />
        </div>
      )}
    </>
  );
}
