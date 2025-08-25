import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Header() {

    return (
        <header className="md:flex md:justify-between md:items-center hidden px-6 py-1 md:px-12 md:py-4 text- w-full bg-gradient-to-r from-[#F49E4C] via-[#EFCC6A] to-[#F4904E]">

            <div className="flex flex-row  space-x-4 justify-evenly w-xm h-4 gap-6 ">
                <p className="text-white  "><FontAwesomeIcon icon={faEnvelope} className="text-white w-4 h-4 mr-1.5" />
                    tirthghumo@gmail.com</p>
                <p className="text-white"><FontAwesomeIcon icon={faPhone} className="text-white w-4 h-4 mr-1.5" />
                    605-646-9241</p>
            </div>
            <div>
                <p className="text-white">LATEST INFORMATION SLIDER</p>
            </div>
        </header>
    );
}