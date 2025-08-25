import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft, faChevronCircleRight, faCheck, faHistory, faHeart, faStar, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function UpcomingDestination() {
    const Data = [
        {
            title: "White heaven Beach",
            description: "White sand | Stock on Beach House",
            price: "$957.00",
            image: "/destinations/D1.png"
        },
        {
            title: "White heaven Beach",
            description: "White sand | Stock on Tent Camp",
            price: "$1095.00",
            image: "/destinations/D2.png"
        },

    ];
    function Card({ title, description, price, image }) {

        return (
            <div className="md:bg-white rounded-2xl flex  md:flex-col justify-center items-center w-full w-max-[400px] h-auto p-1 md:p-4 ">
                <div>
                    <Image
                        src={image}
                        alt={title}
                        width={368}
                        height={350}
                        className="rounded-xl object-cover  "
                    />
                </div>
                <div className="flex  justify-between bg-white rounded-2xl p-2 w-auto w-max-[400px] md:w-full">
                    <div className=" flex flex-col  gap-4 mt-4 w-full w-max-[300px] md:px-5">
                        <span>
                            <p className="font-Poppins w-[167px] h-[24px] font-semibold text-[14px] md:text-[16px]">{title}</p>
                            <p className="font-Poppins text-[#00000099] text-[10px] md:text-[12px]">{description}</p>
                        </span>
                        <span>
                            <p className="font-Poppins text-[#00000099] text-[10px] md:text-[12px]">From</p>
                            <p className="font-bold md:text-[18px]">{price}</p>
                            <p className="font-Poppins text-[#00000099] text-[10px] md:text-[12px]">*Price Value</p>
                        </span>
                        <span>
                            <p className="font-bold"><FontAwesomeIcon icon={faHistory} className="text-green-600" /> 10 days</p>
                            <p className="font-Poppins text-[#00000099] text-[10px] md:text-[12px]"><FontAwesomeIcon icon={faCheck} className="text-green-600 " /> Free Cancellation <FontAwesomeIcon icon={faCheck} className="text-green-600" /> Australia</p>
                        </span>

                    </div>
                    <div className="flex flex-col items-center mt-5 gap-8">
                        <div className="text-[30px] bg-[#EFEAD3] w-[40px] h-[40px] rounded-full flex items-center justify-center">
                            <FontAwesomeIcon icon={faHeart} className="text-red-600 text-[20px]  " />
                        </div>
                        <div className="flex justify-start">
                            <FontAwesomeIcon icon={faStar} className="text-[#edbe00] text-[11px]" />
                            <FontAwesomeIcon icon={faStar} className="text-[#edbe00] text-[11px]" />
                            <FontAwesomeIcon icon={faStar} className="text-[#edbe00] text-[11px]" />
                            <FontAwesomeIcon icon={faStar} className="text-[#edbe00] text-[11px]" />
                            <FontAwesomeIcon icon={faStar} className="text-[#edbe00] text-[11px]" />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
    return (
        <section className=" w-auto  md:w-[1560px]  flex flex-col items-center justify-center p-5 ">
            <div className=" w-[1350px] text-start flex flex-row items-center justify-between">
                <p className="font-bold text-xl md:text-5xl w-auto md:w-[575px]  h-auto md:h-14"><span className="text-[#F49E4C]">Upcoming</span> <span className="">Destinations</span></p>
                <div className="px-2  w-auto md:w-[120px] md:h-[46px] mt-3">
                    <FontAwesomeIcon icon={faChevronCircleLeft} className="  text-[#F49E4C] text-2xl md:text-4xl md:w-12 md:h-12" />
                    <FontAwesomeIcon icon={faChevronCircleRight} className="  text-[#F49E4C] text-2xl md:text-4xl md:w-12 md:h-12" />
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-x-50 m-20">
                <Card {...Data[0]} />
                <Card {...Data[1]} />
                <Card {...Data[1]} />
            </div>
            <div className=" cursor-pointer flex items-center justify-center bg-gradient-to-r from-[hsl(29,88%,63%)] hover:from-[hsl(29,88%,55%)] via-[hsl(44,81%,68%)] hover:via-[hsl(44,81%,60%)] to-[hsl(24,88%,63%)] hover:to-[hsl(24,88%,55%)] w-[256px] h-[69.5px] py-[10px] px-4 rounded-2xl gap-2.5">
                <button className=" text-white font-poppins text-4xl cursor-pointer font-semibold ">Book Now</button>
                <FontAwesomeIcon icon={faCircleArrowRight} className="  text-[#FFFFFF] text-2xl" />
            </div>

        </section>
    );
}
