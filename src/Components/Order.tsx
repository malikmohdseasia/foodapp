import IMG1 from "../assets/order/image1.svg";
import IMG2 from "../assets/order/image2.svg";
import IMG3 from "../assets/order/image3.svg";
import IMG4 from "../assets/order/image4.png";

const Order = () => {
  const items = [
    {
      title: "Select Food",
      img: IMG1,
      details: " selecting the type of food you want to order",
    },
    {
      title: "Customization",
      img: IMG2,
      details:
        "specify additional ingredients, modifications, or any specific preferences you may have",
    },
    {
      title: "Placement",
      img: IMG3,
      details:
        "you can either order online by adding items to your virtual cart and providing your contact",
    },
    {
      title: "Delivery/Pickup",
      img: IMG4,
      details:
        "You will typically receive a confirmation message or email that includes the details of your order, such as the estimated delivery or pickup time.",
    },
  ];

  return (
    <div className="w-container mx-auto">
      <div className="my-25">
        <h1 className="font-inter font-semibold text-[40px] text-center">
          How You Can order
        </h1>
        <hr className="border-2 border-mainColor w-38 mx-auto" />
      </div>

      <div className="grid grid-cols-4 gap-4">
        {items.map((item, index) => (
          <div className="border border-[#C6C6C6] justify-items-center rounded-lg" key={index}>
            <img src={item.img} alt="" className="" />

            <div className="p-5 text-center">

            <h1 className="font-inter text-[32px] pt-6 font-medium">{item.title}</h1>
            <p className="font-inter font-normal ">{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
