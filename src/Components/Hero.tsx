import Food from "../assets/food.png";
import { CartIcon } from "../assets/Icons";

const Hero = () => {
  return (
    <div className="w-container mx-auto flex flex-col md:flex-row  items-center justify-between mt-10 md:mt-0">
      <div className="w-full md:w-1/2  md:p-5 ">
        <img src={Food} alt="" />
      </div>

      <div className=" w-full md:w-1/2 p-0 md:p-15 flex flex-col gap-9 text-center md:text-start">
        <h1 className="font-inter font-bold text-[22px] md: md:text-20 lg:text-[48px]">
          Happy With <span className="text-mainColor">Delicious Food</span> And
          Get New Experiences With Asian Food
        </h1>
        <p className="font-inter font-normal text-sm">
          Exploring new food with different transition form all Asian country
          especially from Cambodia that you can try at this place and get a good
          price from us as well we will make a good impact to our customers
        </p>

        <div className="flex items-center  gap-2 justify-center md:justify-start md:gap-2 lg:gap-7.75">
            <div className="px-2 py-4 md:px-2 md:py-4 lg:py-4.5 lg:px-6  bg-mainColor rounded-lg border border-mainColor flex gap-2 items-center">
                <button className="font-inter font-normal cursor-pointer ">Order Food</button>
                {CartIcon}
            </div>

             <div className="px-2 py-4 md:px-2 md:py-4 lg:py-4.5 lg:px-6  rounded-lgb border rounded-lg border-mainColor">
                <button className="font-inter font-normal cursor-pointer">Learn More</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
