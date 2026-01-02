import IMG1 from "../assets/specialOffer/image1.png";
import IMG2 from "../assets/specialOffer/image2.png"

const SpecialOffer = () => {
  return (
    <div className="w-container mx-auto">
        <div>
            <h1 className="font-inter font-semibold text-center text-[40px]">Special offer</h1>
            <hr className="border-2 border-mainColor w-38 mx-auto" />
        </div>

        <div className="w-[80%] mx-auto mt-22 ">
  <div className="w-1/2 bg-[#707B6A] h-97.25 flex items-center justify-center shadow-[36px_35px_4px_0px_#00000040]">
    <img src={IMG1} alt="" />
  </div>
</div>

<div className="mt-41.75">
    <h1 className="font-inter font-semibold text-[40px] text-center">Place Of Our Restaurant</h1>
       <hr className="border-2 border-mainColor w-38 mx-auto" />
</div>

<div className="mt-27.75 w-[80%] mx-auto flex justify-between">
    <div className="w-[45%]">
    <h1 className="font-inter font-semibold text-[40px]">Clean and comfortable</h1>
    <p className="font-inter ">We provide the best service and good food for our lovely customers</p>
    </div>

    <div>
        <img src={IMG2} alt="" />
    </div>

</div>


    </div>
  )
}

export default SpecialOffer