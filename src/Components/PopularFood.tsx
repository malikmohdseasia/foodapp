import { AddIcon, HeartIcon, PopularFoodIcon } from "../assets/Icons";
import IMG1 from "../assets/popularfood/image1.png";
import IMG2 from "../assets/popularfood/image2.png";
import IMG3 from "../assets/popularfood/image3.png";
import IMG4 from "../assets/popularfood/image4.png";

const PopularFood = () => {
  const items = ["All", "Soup", "Drink", "Spicy", "Tradition", "Sweet", "Cake"];
  const itemsFood = [
    {
      title: "Shrimp Fried Rice",
      img: IMG1,
      description:
        "shrimp fried rice, such as diced carrots, peas, onions, and bell peppers.",
      price: "2.30 USD",
      addBtn: AddIcon,
      heartBtn: HeartIcon,
    },
    
    {
      title: "Pork Satay,Grilled Pork",
      img: IMG2,
      description:
        "It consists of marinated and skewered pork pieces that are grilled to perfection, resulting in tender, juicy, and flavorful meat.",
      price: "2.32 USD",
      addBtn: AddIcon,
      heartBtn: HeartIcon,
    },
    {
      title: "Papaya Salad",
      img: IMG3,
      description:
        "consists of a combination of lime juice, fish sauce, palm sugar, and chili peppers.",
      price: "2.32 USD",
      addBtn: AddIcon,
      heartBtn: HeartIcon,
    },
    {
      title: "Pork Satay,Grilled Pork",
      img: IMG4,
      description:
        "It consists of marinated and skewered pork pieces that are grilled to perfection, resulting in tender, juicy, and flavorful meat.",
      price: "2.32 USD",
      addBtn: AddIcon,
      heartBtn: HeartIcon,
    },
      {
      title: "Shrimp Fried Rice",
      img: IMG1,
      description:
        "shrimp fried rice, such as diced carrots, peas, onions, and bell peppers.",
      price: "2.30 USD",
      addBtn: AddIcon,
      heartBtn: HeartIcon,
    },
    
    {
      title: "Pork Satay,Grilled Pork",
      img: IMG2,
      description:
        "It consists of marinated and skewered pork pieces that are grilled to perfection, resulting in tender, juicy, and flavorful meat.",
      price: "2.32 USD",
      addBtn: AddIcon,
      heartBtn: HeartIcon,
    },
    {
      title: "Papaya Salad",
      img: IMG3,
      description:
        "consists of a combination of lime juice, fish sauce, palm sugar, and chili peppers.",
      price: "2.32 USD",
      addBtn: AddIcon,
      heartBtn: HeartIcon,
    },
    {
      title: "Pork Satay,Grilled Pork",
      img: IMG4,
      description:
        "It consists of marinated and skewered pork pieces that are grilled to perfection, resulting in tender, juicy, and flavorful meat.",
      price: "2.32 USD",
      addBtn: AddIcon,
      heartBtn: HeartIcon,
    },
  ];

  return (
    <div className="w-container mx-auto my-25">
      <div className="">
        <h1 className="font-inter font-semibold text-[40px] text-center">
          PopularFood
        </h1>
        <hr className="border-2 border-mainColor w-38 mx-auto" />
      </div>

      <div className="flex  gap-12 items-center mt-15.75">
        <div className="border border-[#C6C6C6] p-3 rounded-lg flex justify-between  flex-1">
          {items.map((item, index) => (
            <p
              key={index}
              className={`font-inter text-[12px] py-2.5 px-4 w-18.5 h-11 text-[#262626] flex items-center justify-center ${
                item === "All"
                  ? "border border-mainColor rounded-lg bg-mainColor"
                  : ""
              }`}
            >
              {item}
            </p>
          ))}
        </div>

        <div className="py-5.5 px-2.5 border border-[#C6C6C6] rounded-lg h-17">
          {PopularFoodIcon}
        </div>
      </div>

      <div className="mt-21.5 grid grid-cols-4 gap-4">
        {
            itemsFood.map((item, index)=>(
                <div className="border border-[#C6C6C6] rounded-lg p-6 relative">
                    <img src={item.img} alt="" />
                    <div key={index}>
                        <div className="mt-6">
                             <h1 className="font-inter text-[24px] font-medium truncate">{item.title}</h1>
                        <p className="mt-1.5 font-inter line-clamp-2 ">{item.description}</p>
                        </div>

                        <div className="flex items-center justify-between mt-3">
                            <p className="font-inter text-[20px] font-medium">{item.price}</p>
                            <button>{item.addBtn}</button>
                        </div>
                       
                    <div className="absolute top-5 right-5">
                        {item.heartBtn}
                    </div>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default PopularFood;
