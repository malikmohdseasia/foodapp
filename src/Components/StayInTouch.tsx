import { CartIcon } from "../assets/Icons";
import IMGLOGO from "../assets/Reviews/img.png";

const StayInTouch = () => {
  return (
    <div className="w-container mx-auto mt-5">
      <div className="w-full md:w-120.25 mx-auto flex flex-col items-center md:items-start text-center md:text-start md:justify-start">
        <div>
          <h1 className="font-inter font-semibold text-[20px] md:text-[40px]">
            Get <span className="text-mainColor">50%</span> Off On Curry
          </h1>
          <p className="font-inter mt-5.25">
            We offer 50% of on this food, we want you all to try Khmer food
            which has a good taste that everyone should try
          </p>
        </div>

        <div className="mt-9 bg-mainColor py-4.5 px-6 w-40.5 flex gap-2 rounded-lg cursor-pointer">
          <button className="cursor-pointer">Order Now</button>
          {CartIcon}
        </div>
      </div>

      <div className="mt-10">
        <h1 className="text-center font-semibold font-inter text-lg md:text-[40px]">
          Stay In Touch
        </h1>
        <hr className="border-2 border-mainColor w-38 mx-auto" />
      </div>

      <div className="flex items-center justify-center text-center md:text-start">
        <div className="mt-25 p-6 md:w-1/2 rounded-lg border border-[#C6C6C6]">
          <h1 className="text-lg md:text-[32px] font-medium">Login To Our Channel </h1>

          <div className="mt-5 md:mt-12">
            <label htmlFor="" className="font-inter font-medium text-lg md:text-[32px]">
              Email
            </label>
            <input
              type="text"
              name=""
              id=""
              className="p-5 border border-[#C6C6C6] w-full h-16 mt-4 rounded-lg placeholder:text-[#000000] text-center md:text-start"
              placeholder="Enter your email"
            />

            <button className="bg-mainColor w-full h-15 mt-12 rounded-lg cursor-pointer">
              Login Now
            </button>
          </div>
        </div>
      </div>

      <div className="mt-17 flex justify-center ">

        <img src={IMGLOGO} alt="" />
      </div>
    </div>
  );
};

export default StayInTouch;
