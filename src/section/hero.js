"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Thumbs, Controller, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";

import { useState } from "react";

export default function Hero() {
    const templeThumbnails = [
        "/temples/hero.jpg",
        "/temples/t2.jpg",
        "/temples/t3.jpg",
        "/temples/t4.jpg",
    ];

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <section className="relative w-full flex flex-col h-237">

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                thumbs={{ swiper: thumbsSwiper }}
                pagination={{clickable:true}}
                modules={[Autoplay, Thumbs, Controller, Pagination]}
                className="w-[350px] md:w-full inset-0 h-237"
            >
                {templeThumbnails.map((src, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full h-full bg-cover bg-center">
                            <Image
                                src={src}
                                alt={`Hero ${index + 1}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="absolute inset-0 w-full z-10 h-237 bg-black/50 "></div>


            <div className="w-full sm:w-[1172px] absolute h-53 top-[420px] right-[344px] left-[-76px] text-white z-20 ">
                <h1 className="absolute text-5xl font-bold mb-9 left-[129px] ">
                    Aastha Bhi<br /> Aur Suvidha Bhi
                </h1>
            </div>


            <div className="absolute top-[641px] left-[79px] z-20">
                <button className="bg-[hsl(37,87%,48%)] w-[210px] h-[81px] px-6 py-3 hover:bg-[hsl(37,87%,38%)] cursor-pointer font-bold text-2xl text-white rounded-xl gap-[10px] ">
                    Explore Now
                </button>
            </div>


            <div className="absolute z-20 md:left-[810px] top-[354px] items-center md:justify-end px-12 hidden md:flex">
                <div className="relative w-full flex justify-center items-center">
                    <div className="w-[500px] h-[300px]">
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={15}
                            slidesPerView={2}
                            centeredSlides={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            modules={[Autoplay, Thumbs]}
                            className="w-full h-full"
                        >
                            {templeThumbnails.map((src, index) => (
                                <SwiperSlide key={index}>
                                    <div className="w-48 h-64 rounded-xl overflow-hidden shadow-lg">
                                        <Image
                                            src={src}
                                            alt={`Temple Thumbnail ${index + 1}`}
                                            width={192}
                                            height={256}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}
