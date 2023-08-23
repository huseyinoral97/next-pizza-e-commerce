import React from "react";
import Menu from "./Menu";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "./CartIcon";
import UserLinks from "./UserLinks";

const Navbar = () => {
  const user = false;
  return (
    <div className="h-28 text-red-500 p-4 flex items-center justify-between border-b-2 border-red-500 lg:px-20 xl:px-20">
      {/* LOGO */}
      <Link href="/">
        <Image src="/logo.jpg" alt="logo" width={200} height={200} />
      </Link>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* LEFT LINKS */}
      <div className="hidden md:flex gap-4 font-semibold text-xl">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4 font-semibold items-center text-xl">
        <UserLinks />
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
