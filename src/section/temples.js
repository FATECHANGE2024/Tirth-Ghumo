"use client";
import Image from 'next/image';
import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

const templeImages = [
  '/view/arc2.png',
  '/view/arc1.png',
  '/view/arc2.png',
];

const carouselSettings = {
//   dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function HeroSection() {
  return (
    <section className="w-full bg-[#FFF7F0] py-16">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center px-4">
        <div className="mb-10 text-center">
          <p className="text-3xl md:text-4xl font-bold px-50 ">
            <span className="text-[#F99D3E]">Tirth Ghumo</span>: Your gateway to India’s sacred serenity and timeless temples.
          </p>
        </div>

        <div className="relative w-full flex justify-center items-end">
          <div className="overflow-hidden w-[800px] h-[500px] rounded-[30px]">
            <Image
              src="/view/scene1.jpg"
              alt="Mountain View"
              width={800}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="absolute bottom-[-70px] z-20">
            <Image
              src="/view/arc1.png"
              alt="Main Temple"
              width={600}
              height={550}
              className="object-contain"
            />
          </div>

          <div className="absolute right-[-40px] bottom-0 z-10 hidden lg:block w-[250px] h-[300px]">
            <Slider {...carouselSettings}>
              {templeImages.map((src, index) => (
                <div key={index} className="rounded-[20px] overflow-hidden shadow-lg">
                  <Image
                    src={src}
                    alt={`arc ${index + 1}`}
                    width={250}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
