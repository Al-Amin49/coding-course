import Categories from "../Components/UI/Categories";
import Code from "../Components/UI/Code";
import HeroSection from "../Components/UI/HeroSection";
import Navbar from "../Components/UI/Navbar";
import Skill from "../Components/UI/Skill";


const Home = () => {
    return (
        <div>
            <Navbar/>
            <HeroSection/>
            <Skill/>
            <Code/>
            <Categories/>
            
        </div>
    );
};

export default Home;