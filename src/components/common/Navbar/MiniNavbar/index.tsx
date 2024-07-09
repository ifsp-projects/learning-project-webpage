import Link from "next/link";
import React from "react";
import type { MiniNavbarProps } from "./types";
//import { Button } from "../../Buttons/Button";
import { signOut } from "next-auth/react";

export const MiniNavbar = ({ showMenu, setShowMenu, children }: MiniNavbarProps) => {
	return (
    <div className="animate__animated animate__fadeInDown z-20 fixed right-0 bg-[#fff] shadow-md h-[565px] sm:h-[560px] w-[325px] border border-[#f7f7f7] translate-y-2 transition-all rounded-lg sm:mt-[25px] drop-shadow-md mt-[25px] lg:left-[70%]">
      {children}
    </div>
  )
};

export default MiniNavbar;