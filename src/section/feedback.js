import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { Star } from "lucide-react";

export default function Feedback() {


    const testimonials = [
        {
            name: "Ramesh Sharma",
            location: "Delhi",
            image: "/feedback/1.jpg",
            rating: 5,
            text: "Tirth Ghumo made our Char Dham Yatra truly divine. Everything was perfectly arranged — from travel to stay. Felt connected to faith without any stress!",
        },
        {
            name: "Neha Verma",
            location: "Bhopal",
            image: "/feedback/2.jpg",
            rating: 5,
            text: "Seamless booking, homely food, and peaceful darshan! Thanks to Tirth Ghumo, our Rishikesh-Haridwar trip was both spiritual and super convenient.",
        },
        {
            name: "Rohit Bajaj",
            location: "Jharkhand",
            image: "/feedback/3.jpg",
            rating: 5,
            text: "A perfect blend of devotion and comfort. Tirth Ghumo took care of every little detail. Highly recommend for family religious tours!",
        },
    ];


    return (
        
       
        <section className="relative w-full flex flex-col justify-center items-center py-16">
      
      
      <div className="text-start w-full px-30 mb-15">
        <p className="text-[40px] font-bold">
          What <span className="text-[#EF903F]">our Clients say</span> about{" "}
          <span className="text-[#EF903F]">us</span>
        </p>
      </div>

      
      
      <div className="relative w-[900px] h-[500px] bg-gradient-to-r from-[#FAA935] to-[#EF903F] shadow-xl shadow-amber-600/50 rounded-lg flex justify-center items-center">
       

        <div className="absolute flex flex-wrap justify-center items-center gap-x-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white  shadow-lg rounded-xl w-[200px] h-auto overflow-hidden transition-transform hover:scale-105 `}
            >
              
              
              <div className="relative w-auto h-[180px]">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>

              
              <div className="p-2">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <span className="text-xs text-gray-500">
                    {testimonial.location}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{testimonial.text}</p>

                
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-black text-black"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    );
}