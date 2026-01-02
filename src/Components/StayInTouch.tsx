import { CartIcon } from "../assets/Icons";
import IMGLOGO from "../assets/Reviews/img.png";

const StayInTouch = () => {
  return (
    <div className="w-container mx-auto mt-5">
      <div className="w-120.25 mx-auto">
        <div>
          <h1 className="font-inter font-semibold text-[40px]">
            Get <span className="text-mainColor">50%</span> Off On Curry
          </h1>
          <p className="font-inter mt-5.25">
            We offer 50% of on this food, we want you all to try Khmer food
            which has a good taste that everyone should try{" "}
          </p>
        </div>

        <div className="mt-9 bg-mainColor py-4.5 px-6 w-40.5 flex gap-2 rounded-lg">
          <button>Order Now</button>
          {CartIcon}
        </div>
      </div>

      <div className="mt-10">
        <h1 className="text-center font-semibold font-inter text-[40px]">
          Stay In Touch
        </h1>
        <hr className="border-2 border-mainColor w-38 mx-auto" />
      </div>

      <div className="flex items-center justify-center">
        <div className="mt-25 p-6 w-1/2 rounded-lg border border-[#C6C6C6]">
          <h1 className="text-[32px] font-medium">Login To Our Channel </h1>

          <div className=" mt-12">
            <label htmlFor="" className="font-inter font-medium text-[32px]">
              Email
            </label>
            <input
              type="text"
              name=""
              id=""
              className="p-5 border border-[#C6C6C6] w-full h-16 mt-4 rounded-lg placeholder:text-[#000000]"
              placeholder="Enter your email"
            />

            <button className="bg-mainColor w-full h-15 mt-12 rounded-lg">
              Login Now
            </button>
          </div>
        </div>
      </div>

      <div className="mt-17  flex items-center justify-center">
      <div className="w-1/2">

        <img src={IMGLOGO} alt="" />
      </div>
      </div>
    </div>
  );
};

export default StayInTouch;
