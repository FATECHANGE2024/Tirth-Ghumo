import Image from "next/image";
import { Island_Moments } from 'next/font/google'

const island = Island_Moments({
    weight: '400', 
    subsets: ['latin'],
})

function ServiceCard({ icon, title, description }) {
    return (
        <div className="w-[262px] h-[182px] bg-white rounded-xl border-r border-b border-[#FAA935] p-6 flex flex-col items-start justify-center">
          
            <div className="w-[50px] h-[50px] bg-[#FAA935] rounded-full flex items-center justify-center mb-4">
                <Image
                    src={icon}
                    width={28}
                    height={28}
                    alt={title}
                />
            </div>

            
            <h3 className="text-lg font-semibold text-black">{title}</h3>

            
            <p className="text-sm text-gray-500">{description}</p>
        </div>
    );
}



export default function Services() {

    return (
        <section className="w-auto md:w-full h-[306px] flex items-center justify-center bg-[#FFFFFF]">
            <div className="flex flex-row gap-3 "> 
                <div className="w-[281px] h-[78px]">
                <p className={`${island.className} text-3xl text-[#EE6E6E] `}>What we serve</p>
                <p className="text-3xl text-[#0B2727]">We offer our best services</p>
            </div><br />
            <ServiceCard
                icon="/icons/i2.png"
                title="Calculate Weather"
                description="Lorem ipsum dolor sit amet, adipisicing elit."
            />
            <ServiceCard
                icon="/icons/i3.png"
                title="Calculate Weather"
                description="Lorem ipsum dolor sit amet, adipisicing elit."
            />
            <ServiceCard
                icon="/icons/i4.png"
                title="Calculate Weather"
                description="Lorem ipsum dolor sit amet, adipisicing elit."
            />

            </div>


        </section>
    );

}
