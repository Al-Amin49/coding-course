
import { FaAngleRight } from "react-icons/fa";
import skills from "../../assets/images/code.png";

import Container from "./Container";
import { IoIosCall } from "react-icons/io";

const Code = () => {
    return (
        <div className="pt-[70px]">
            <Container>
               
                <div className="flex mt-10 justify-between items-center ">
                    <div>
                    <h1 className="text-[54px] font-bold w-[90%] mx-auto">Welcome to Code Learning Center</h1>
                    <p className="text-[18px] mt-[29px] mb-[55px]">Here we guide you to the best online courses, e-learning advice, and technology and resources for education and training. </p>

                    <div className="w-1/2 flex flex-col justify-center space-y-8 relative">
                        {/* Timeline Step 1 */}
                        <div className="flex items-start">
                            <div className="bg-[#4B44BB]  rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold">
                            <FaAngleRight className="bg-white rounded-full "/> 
                            </div>
                            <div className="ml-4">
                            <h3 className="font-bold">Safe & Secured</h3>
                            <p>Safe and Secured our services and every step of process.</p>
                            </div>
                        </div>

                       
                        <div className="absolute left-[20px] top-[5px] h-[80px] border-l-2 border-[#4B28B5]"></div>

                        <div className="flex items-start">
                            <div className="  rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold border-2 border-gray">
                            <IoIosCall className="bg-white rounded-full" />
                            </div>
                            <div className="ml-4">
                              
                              <h1 className="font-bold">Highly Expert Instructors</h1>
                              <p>There are coffee shops, sports, restaurants and a multitude of great study.</p>
                            </div>
                        </div>

                        

                       
                       
                    </div>
                    </div>
                    <div className="w-1/2">
                        <img src={skills} alt="Skills" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Code;
