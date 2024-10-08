
import frame1 from "../../assets/images/icon/frame1.png";
import frame2 from "../../assets/images/icon/Frame.png";
import frame3 from "../../assets/images/icon/frame2.png";
import frame4 from "../../assets/images/icon/frame3.png";
import frame5 from "../../assets/images/icon/Group.png";
const HeroBottom = () => {
    return (
        <div className="bg-[#2B0D57] py-[70px] px-[170px]">
            <div className="flex items-center justify-center space-x-[120px]">
                <div className="flex flex-col">
                    <div className="">
                        <img src={frame2} alt=""width={90} className="bg-secondary rounded-full p-6"/>
                    </div>
                    <h1 className="text-5xl text-white mt-4 mb-2">360+</h1>
                    <span className="text-2xl text-gray-400">Teachers</span>

                </div>
                <div className="flex flex-col">
                    <div className="">
                        <img src={frame4} alt=""width={90} className="bg-[#FF8FDF] rounded-full p-6"/>
                    </div>
                    <h1 className="text-5xl text-white mt-4 mb-2">30k+</h1>
                    <span className="text-2xl text-gray-400">Students</span>

                </div>
                <div className="flex flex-col">
                    <div className="">
                        <img src={frame3} alt=""width={90} className="bg-[#FF5BB4] rounded-full p-6"/>
                    </div>
                    <h1 className="text-5xl text-white mt-4 mb-2">8k+</h1>
                    <span className="text-2xl text-gray-400">Lessons</span>

                </div>
                <div className="flex flex-col">
                    <div className="">
                        <img src={frame5} alt=""width={90} className="bg-[#FF8787] rounded-full p-6"/>
                    </div>
                    <h1 className="text-5xl text-white mt-4 mb-2">200</h1>
                    <span className="text-2xl text-gray-400">Partners</span>

                </div>
                <div className="flex flex-col">
                    <div className="">
                        <img src={frame1} alt=""width={90} className="bg-[#65FBD5] rounded-full p-6"/>
                    </div>
                    <h1 className="text-5xl text-white mt-4 mb-2">60%</h1>
                    <span className="text-2xl text-gray-400">Success</span>

                </div>
            </div>
        
        </div>
    );
};

export default HeroBottom;