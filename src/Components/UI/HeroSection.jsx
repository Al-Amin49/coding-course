import { FaCheck, FaStar } from "react-icons/fa";
import playIcon from "../../assets/images/icon/Play.png";
import crowd from "../../assets/images/icon/1.png";
import capterra from "../../assets/images/icon/2.png";
import getApp from "../../assets/images/icon/3.png";
import profile1 from "../../assets/images/1.png";
import profile2 from "../../assets/images/2.png";
import profile3 from "../../assets/images/3.png";
import HeroBottom from "./HeroBottom";
const HeroSection = () => {
    return (
        <>
        <div className="bg-custom-gradient p-10 flex justify-between space-x-5">
            {/* text */}
            <div className="text-white">
                <span className="bg-gradient-to-r from-[#241457] to-[#4F2BBD] flex items-center rounded-md text-center w-fit px-4 ">
                    <FaCheck className="mr-1 bg-green-400 rounded-full text-white w-[24px]"/>Verified by coursera</span>
                <h1 className=" text-[50px] font-bold">Learn Code From Top <span className="text-secondary underline">Coder</span>
                </h1>
                <p className="text-xl my-8">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</p>
                <div className=" flex items-center space-x-3 mb-5">
                <button className="bg-secondary rounded-[4px] py-3 px-4 text-xl text-black">Get Started</button> 
                <button className="bg-[#291B52] rounded-[4px] py-3 px-4 text-xl text-white flex items-center">
                    <img src={playIcon} alt="" className="mr-[10px]" />
                    How it works
                    </button>
                </div>
                <div className=" flex items-center space-x-2">
                    <span className=" flex text-[#F7B933]">
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                    </span>
                    <p className="text-sm">Based on 10,000+ reviews on</p>
                </div>

                <div className="flex items-center space-x-3 mt-4">
                <div className="flex items-center">
                    <img src={crowd} alt="" className="mr-1" />
                    <p>CROWD</p>
                </div>
                <div className="flex items-center">
                    <img src={capterra} alt="" className="mr-1"/>
                    <p>Capterra</p>
                </div>
                <div className="flex items-center">
                    <img src={getApp} alt="" className="mr-1" />
                    <p>GetApp</p>
                </div>
            </div>
              
            </div>
            {/* image section */}

            <div className="flex space-x-5">
    {/* Profile Card 1 */}
    <div className="bg-gradient-to-b from-[#98FDE3] to-[#3E3761] p-5 w-52 h-[400px] rounded-t-full rounded-b-full flex flex-col items-center text-black shadow-lg mt-2">
        <h2 className="text-lg font-semibold mt-4">Zillio Moniel</h2>
        <p>Data Engineer</p>
        <img src={profile2} alt="Zillio Moniel" className=" h-full" />
    </div>

    {/* Profile Card 2 */}
    <div className="bg-gradient-to-b from-purple-400 to-pink-500 p-5 w-52 h-[400px] rounded-t-full flex flex-col items-center text-black shadow-lg rounded-b-full mt-10">
        <h2 className="text-lg font-semibold mt-4">Lissa Kie</h2>
        <p>React Engineer</p>
        <img src={profile1} alt="Lissa Kie" className="h-full" />
    </div>

    {/* Profile Card 3 */}
    <div className="bg-gradient-to-b from-blue-400 to-teal-500 p-5 w-52 h-[400px] rounded-t-full flex flex-col items-center text-black shadow-lg ">
        <h2 className="text-lg font-semibold mt-4">Killan James</h2>
        <p>Laravel Engineer</p>
        <img src={profile3} alt="Killan James" className="h-full" />
    </div>
</div>


      
        </div>
        <HeroBottom/>
        </>
    );
};

export default HeroSection;