"use client"; // Required for useState in Next.js App Router

import Link from "next/link";
import React, { useState } from "react";
// If you don't have lucide-react, run: npm install lucide-react
import { MoreVertical, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#1A191F] flex justify-between items-center h-19 w-full top-0 fixed z-50 px-6 md:px-12 sm:h-20 xl:h-22 border-b border-gray-800">
      {/* Logo */}
      <h1 className="text-2xl font-bold tracking-wider text-white sm:text-3xl xl:text-5xl">
        <span className="text-[#ffb800]">BELL</span>FLIX
      </h1>

      {/* Desktop Menu - Hidden on Mobile (md and below) */}
      <nav className="hidden md:flex gap-6 text-white text-lg font-mono items-center">
        <Link href="/" className="hover:text-[#ffb800] transition-colors">
          Home
        </Link>
        <Link href="/signin" className="hover:text-[#ffb800] transition-colors">
          Sign-in
        </Link>
        <Link href="/signup" className="hover:text-[#ffb800] transition-colors">
          Sign-Up
        </Link>
        <Link
          href="/forgotpassword"
          className="hover:text-[#ffb800] transition-colors"
        >
          Forgot Password?
        </Link>
      </nav>

      {/* Mobile menu*/}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white p-2 focus:outline-none hover:bg-white/10 rounded-full transition-all"
        >
          {isOpen ? <X size={28} /> : <MoreVertical size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#1A191F] border-t border-gray-800 flex flex-col p-6 gap-4 text-white font-mono md:hidden shadow-2xl animate-in fade-in slide-in-from-top-2">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="py-2 border-b border-white/5 hover:text-[#ffb800]"
          >
            Home
          </Link>
          <Link
            href="/signin"
            onClick={() => setIsOpen(false)}
            className="py-2 border-b border-white/5 hover:text-[#ffb800]"
          >
            Sign-in
          </Link>
          <Link
            href="/signup"
            onClick={() => setIsOpen(false)}
            className="py-2 border-b border-white/5 hover:text-[#ffb800]"
          >
            Sign-Up
          </Link>
          <Link
            href="/forgotpassword"
            onClick={() => setIsOpen(false)}
            className="py-2 hover:text-[#ffb800]"
          >
            Forgot Password?
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
