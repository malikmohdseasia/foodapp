import Food from "../assets/food.png";
import { CartIcon } from "../assets/Icons";

const Hero = () => {
  return (
    <div className="w-container mx-auto flex items-center justify-between">
      <div className="w-1/2 p-5">
        <img src={Food} alt="" />
      </div>

      <div className="w-1/2 p-15 flex flex-col gap-9">
        <h1 className="font-inter font-bold text-[48px]">
          Happy With <span className="text-mainColor">Delicious Food</span> And
          Get New Experiences With Asian Food
        </h1>
        <p className="font-inter font-normal">
          Exploring new food with different transition form all Asian country
          especially from Cambodia that you can try at this place and get a good
          price from us as well we will make a good impact to our customers
        </p>

        <div className="flex gap-7.75">
            <div className="py-4.5 px-6 bg-mainColor rounded-lg border border-mainColor flex gap-2 items-center">
                <button className="font-inter font-normal ">Order Food</button>
                {CartIcon}
            </div>

             <div className="py-4.5 px-6 rounded-lgb border rounded-lg border-mainColor">
                <button className="font-inter font-normal ">Learn More</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
