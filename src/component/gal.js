import Image from "next/image";

export default function Gallery() {

    return (
        <section className="flex flex-col bg-white items-center px-6 md:px-40 py-10">
            <div className="w-full max-w-[1120px]">
                <div className="mb-4 w-[80px] h-8  ">
                    <Image
                        src="/Gallery/GalleryLogo.png"
                        alt="Gallery icon"
                        width={80}
                        height={30}
                        className="object-cover"
                    />
                </div>
                <h2 className="text-2xl font-semibold text-[#0B2727] mb-6">
                    Visit our customers tour gallery
                </h2>

               
                <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                    <Image
                        src="/Gallery/G1.jpg"
                        alt="Gallery"
                        width={300}
                        height={400}
                        className="w-full h-[335px] rounded-lg object-cover transition-transform hover:scale-105"
                    />
                    <Image
                        src="/Gallery/G2.jpg"
                        alt="Gallery"
                        width={300}
                        height={350}
                        className="w-full h-[218px] rounded-lg object-cover transition-transform hover:scale-105"
                    />
                    <Image
                        src="/Gallery/G3.jpg"
                        alt="Gallery"
                        width={300}
                        height={250}
                        className="w-full h-[267px] rounded-lg object-cover transition-transform hover:scale-105"
                    />
                    <Image
                        src="/Gallery/G4.jpg"
                        alt="Gallery"
                        width={300}
                        height={300}
                        className="w-full h-[267px] rounded-lg object-cover transition-transform hover:scale-105"
                    />
                    <Image
                        src="/Gallery/G5.jpg"
                        alt="Gallery"
                        width={300}
                        height={250}
                        className="w-full h-[218px] rounded-lg object-cover transition-transform hover:scale-105"
                    />
                    <Image
                        src="/Gallery/G6.jpg"
                        alt="Gallery"
                        width={300}
                        height={350}
                        className="w-full h-[335px] rounded-lg object-cover transition-transform hover:scale-105"
                    />
                    <Image
                        src="/Gallery/G7.jpg"
                        alt="Gallery"
                        width={300}
                        height={400}
                        className="w-full h-[285px] rounded-lg object-cover transition-transform hover:scale-105"
                    />
                    <Image
                        src="/Gallery/G8.jpg"
                        alt="Gallery"
                        width={300}
                        height={300}
                        className="w-full h-[285px] rounded-lg object-cover transition-transform hover:scale-105"
                    />
                </div>
            </div>
        </section>

    );
}