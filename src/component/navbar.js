"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <nav className=" bg-[#FFF9EE] flex items-center justify-between w-full h-[60px] px-6 py-5 md:px-12 relative">
            <Image
                src="/logo.png"
                alt="Tirth Ghumo"
                width={200}
                height={200}
                className="cursor-pointer"
            />

            
            <div className="hidden md:flex gap-12 ">
                <Link href="/" className="text-[#462406]">Home</Link>
                <Link href="/" className="text-[#462406]">About</Link>
                <Link href="/" className="text-[#462406]">Upcoming Trips</Link>
                <Link href="/" className="text-[#462406]">Explore</Link>
            </div>

            <div className=" flex items-center justify-center">
                

                <button onClick={() => setOpen(!open)} className="text-white cursor-pointer h-10 font-bold  bg-[#E79310] items-center rounded-xl w-15 md:w-35 p-1.5 md:p-2.5 md:gap-2.5">
                    <FontAwesomeIcon icon={faBars} className="text-white w-auto md:w-4  " />
                   <p className="hidden md:inline"> Menu</p>
                </button>
            </div>

       {/* Navigation For Mobile */}
        {open && (
        <div className="absolute top-[60px] z-20 right-2 md:right-14 bg-white shadow-lg rounded-xl flex flex-col p-4 space-y-4 ">
          <Link href="/" className="text-[#462406]">Payment</Link>
          <Link href="/" className="text-[#462406]">Travel Blogs</Link>
          <Link href="/" className="text-[#462406]">About Us</Link>
          <Link href="/" className="text-[#462406]">Contact Us</Link>
        </div>
      )}
        </nav>
    );
}