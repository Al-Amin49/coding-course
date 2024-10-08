import logo from "../../assets/images/CodeSandbox.png";


const Navbar = () => {
    return (
        <div className="p-4  bg-primary" >
         <nav className="md:flex justify-between items-center hidden ">
            <div className="flex items-center ">
              <a href="/" className="flex items-center">
              <img src={logo} alt="" width={54} height={54} />
              <span className=" font-bold ml-2 text-[34px] text-white">CodeLearn</span>
              </a>
            </div>
            <ul className="flex items-center space-x-[30px] text-white text-[18px]">
                <li><a href="/"
                className="font-medium "
                >Home</a></li>
                <li><a href="/"
                className="font-medium"
                >Course</a></li>
                <li><a href="/"
                className="font-medium"
                >About Us</a></li>
                <li><a href="/"
                className="font-medium"
                >Pricing Contact</a></li>
            
            </ul>
       <div className="flex items-center justify-center space-x-4">
       <button className="btn-lg bg-secondary">Login</button>
       <button className="bg-[#37266F] btn-lg text-white">Sign Up</button>
       </div>

            
         </nav>
        </div>
    );
};

export default Navbar;