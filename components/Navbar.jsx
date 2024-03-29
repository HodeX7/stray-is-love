"use client";
import Image from "next/image";
import { useState } from "react";
import { CloseCircle, FolderOpen } from "iconsax-react";
import Link from "next/link";

const Navbar = () => {
  const ITEMS = [
    { title: "Home", url: "/" },
    { title: "Stories", url: "/stories" },
    { title: "Gallery", url: "/gallery" },
    { title: "Donate", url: "/donate" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="z-[10] w-full sm:w-[60%] flex items-center justify-center py-4 px-6 sm:px-10 rounded-b-[2rem] shadow-3xl fixed top-0 bg-opacity-50 bg-pink-300 text-black backdrop-blur-sm">
      <div
        className={`nav-items space-x-6 sm:flex ${
          menuOpen ? "flex" : "hidden"
        }`}
      >
        {ITEMS.map((item, idx) => (
          <a key={idx} href={item.url}>
            {item.title}
          </a>
        ))}
      </div>
      <div className="icons flex items-center justify-center space-x-4 sm:hidden">
        {menuOpen ? (
          <CloseCircle
            className="text-white text-2xl cursor-pointer"
            onClick={toggleMenu}
          />
        ) : (
          <FolderOpen
            className="text-white text-2xl cursor-pointer"
            onClick={toggleMenu}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
