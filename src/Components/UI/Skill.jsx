import Container from "./Container";
import skills from "../../assets/images/skill.png";

const Skill = () => {
    return (
        <div className="pt-[70px]">
            <Container>
                <div>
                    <h5 className="text-[#4B28B5] text-[34px]">Lets Learn Together to</h5>
                    <h1 className="text-[54px]">Grow Your Skills</h1>
                </div>
                <div className="flex mt-10">
                    <div className="w-1/2">
                        <img src={skills} alt="Skills" />
                    </div>

                    <div className="w-1/2 flex flex-col justify-center space-y-8 relative">
                        {/* Timeline Step 1 */}
                        <div className="flex items-start">
                            <div className="bg-[#4B44BB] text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold">
                                1
                            </div>
                            <div className="ml-4">
                                <h3 className="text-xl font-semibold">Describe Your Learning Skills</h3>
                                <p className="text-gray-600">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some</p>
                            </div>
                        </div>

                       
                        <div className="absolute left-[20px] top-[80px] h-[80px] border-l-2 border-[#4B28B5]"></div>

                        <div className="flex items-start">
                            <div className=" text-[#918CD5] rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold border-2 border-gray">
                                2
                            </div>
                            <div className="ml-4">
                                <h3 className="text-xl font-semibold">Select Course</h3>
                            
                            </div>
                        </div>

                        {/* Line connecting Step 2 and Step 3 */}
                        <div className="absolute left-[20px] top-[158px] h-[80px] border-l-2 border-gray-400"></div>

                        {/* Timeline Step 3 */}
                        <div className="flex items-start">
                            <div className=" text-[#918CD5] rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold border-2 border-gray">
                                3
                            </div>
                            <div className="ml-4">
                                <h3 className="text-xl font-semibold">Keep track of your experts</h3>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Skill;
