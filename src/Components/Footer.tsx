import { BottomArrow } from "../assets/Icons";
import IMGLOGO from "../assets/Reviews/img.png";
import IMG1 from "../assets/footer/img1.png";
import IMG2 from "../assets/footer/img2.png";
import IMG3 from "../assets/footer/img3.png";
import IMG4 from "../assets/footer/img4.png";
import IMG5 from "../assets/footer/img5.png";
import IMG6 from "../assets/footer/img6.png";

const Footer = () => {
  const items = [IMG1, IMG2, IMG3];
  const items2 = [IMG4, IMG5, IMG6];

  return (
    <div className="mt-7.75 mx-auto bg-[#F1C74E40] border-t">
      <div className="flex items-center justify-between border pl-20 pr-29.5">
        <div className="border">
          <img src={IMGLOGO} alt="" className="w-44.75 h-10 object-contain" />
          <p className="font-inter font-medium mt-12.25">Accepted payment</p>
          <div className="mt-4 flex gap-6">
            {items.map((item, index) => (
              <div key={index}>
                <img src={item} alt="" />
              </div>
            ))}
          </div>
        </div>

        <div className="border">
          <h1 className="font-inter text-[32px] font-medium">Contact</h1>
          <div className="flex gap-6.5 mt-4">
            {items2.map((item, index) => (
              <div key={index} className="">
                <img src={item} alt="" className="w-9 h-9" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 border">
          <h1 className="font-inter font-medium text-[32px]">Support</h1>
          <h2 className="font-inter">FAQ</h2>
          <h2 className="font-inter">Contact</h2>
        </div>

        <div className="border">
          <h1 className="font-inter text-[32px] font-medium">Location</h1>
          <h2 className="font-inter mt-4">
            25°11'46.7"N 55°16'35.6"E <br /> (Burj Khalifa, Dubai)
          </h2>
        </div>
      </div>
      <div className="pt-10 ">
        <hr className="border border-[#C6C6C6]  w-[80%] mx-auto" />
      </div>

      <div className="flex justify-self-end pr-37">
        <div className="border border-[#666666] py-2.5 px-2 mt-6.75 w-27.75 rounded-lg flex items-center gap-2">
          <p className="font-inter">English</p>
          {BottomArrow}
        </div>
      </div>

      <h1 className="text-center font-inter">@Powered by Asianfood</h1>
    </div>
  );
};

export default Footer;
