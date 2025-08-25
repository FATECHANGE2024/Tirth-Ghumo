import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {

    return (
        <footer className=" w-full  bg-[#FFFFFF] pt-10 ">
            <div className="flex flex-row  items-center justify-around ">
                <div className="w-[22rem]  h-[303px]  top-[72px] flex flex-col gap-5 ">
                    <Image
                        src="/logo.png"
                        alt="Footer Image"
                        width={200}
                        height={200}
                        className=" object-cover w-[246px] h-[76px] "
                    />
                    <div className="text-[#6E7074]  text-start text-sm my-3 ">
                        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut

                    </div>
                    <div className=" flex flex-row gap-6  w-full my-3 ">
                        <FontAwesomeIcon icon={faYoutube} className="text-[#FAA935] text-2xl " />
                        <FontAwesomeIcon icon={faTwitter} className="text-[#FAA935] text-2xl " />
                        <FontAwesomeIcon icon={faFacebook} className="text-[#FAA935] text-2xl " />
                        <FontAwesomeIcon icon={faInstagram} className="text-[#FAA935] text-2xl " />

                    </div>
                    <div className="text-[#6E7074]  text-start text-sm ">
                        <p>© 2024. All rights reserved.</p>
                    </div>
                </div>

                <div className=" w-[113px] h-[216px] ">
                    <ul className="flex flex-col gap-9 ">
                        <li className="text-xl"> Discover</li>
                        <li className="text-[#6E7074] font-bold"><Link href="/">Home</Link></li>
                        <li className="text-[#6E7074] font-bold"><Link href="/">About Us</Link></li>
                        <li className="text-[#6E7074] font-bold"><Link href="/">Tour</Link></li>
                    </ul>
                </div>
                <div className=" w-[151px] h-[216px]">
                    <ul className="flex flex-col gap-9 ">
                        <li className="text-xl">Quick Contact</li>
                        <li className="text-[#6E7074] font-bold"> <Link href="/">Gallery</Link></li>
                        <li className="text-[#6E7074] font-bold"><Link href="/">Login</Link></li>
                        <li className="text-[#6E7074] font-bold"><Link href="/">Register</Link></li>
                    </ul>
                </div>
                 <div className=" w-[238px] h-[216px]">
                <ul className="flex flex-col gap-9 ">
                    <li className="text-xl">Contact</li>
                    <li className="flex gap-1 items-center"><p className="text-sm font-bold text-black ">Address:</p> <span className="text-[#6E7074] font-bold"> Lorem</span></li>
                    <li className="flex gap-1 items-center"><p className="text-sm font-bold text-black ">Email:</p> <span className="text-[#6E7074] font-bold"> xyz@mail.com</span></li>
                    <li className="flex gap-1 items-center"><p className="text-sm font-bold text-black ">Phone:</p> <span className="text-[#6E7074] font-bold"> 00022200222</span></li>
                </ul>
            </div>

            </div>
        </footer>
    );
}

