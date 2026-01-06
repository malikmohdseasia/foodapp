import { AddIcon, PopularFoodIcon } from "../assets/Icons";
import IMG1 from "../assets/popularfood/image1.png";
import IMG2 from "../assets/popularfood/image2.png";
import IMG3 from "../assets/popularfood/image3.png";
import IMG4 from "../assets/popularfood/image4.png";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { useState } from "react";
import { toast } from "react-toastify";
import { MdAddCircle } from "react-icons/md";
import { FaMinus } from "react-icons/fa";

const PopularFood = ({ cartArr, setCartArr }: any) => {
  const [liked, setLiked]: any = useState({});
  const [activeCategory, setActiveCategory] = useState("All");

  const items = ["All", "Soup", "Drink", "Spicy", "Tradition", "Sweet", "Cake"];

  const itemsFood = [
    {
      id: 1,
      title: "Shrimp Fried Rice",
      category: "Spicy",
      img: IMG1,
      description:
        "shrimp fried rice, such as diced carrots, peas, onions, and bell peppers.",
      price: "2.30 USD",
    },
    {
      id: 2,
      title: "Pork Satay, Grilled Pork",
      category: "Tradition",
      img: IMG2,
      description:
        "It consists of marinated and skewered pork pieces that are grilled to perfection.",
      price: "2.32 USD",
    },
    {
      id: 3,
      title: "Papaya Salad",
      category: "Soup",
      img: IMG3,
      description:
        "consists of a combination of lime juice, fish sauce, palm sugar, and chili peppers.",
      price: "2.32 USD",
    },
    {
      id: 4,
      title: "Pork Satay,Grilled Pork",
      category: "Drink",
      img: IMG4,
      description:
        "It consists of marinated and skewered pork pieces that are grilled to perfection, resulting in tender, juicy, and flavorful meat.",
      price: "2.32 USD",
    },
    {
      id: 5,
      title: "Shrimp Fried Rice",
      category: "Spicy",
      img: IMG1,
      description:
        "shrimp fried rice, such as diced carrots, peas, onions, and bell peppers.",
      price: "2.30 USD",
    },
    {
      id: 6,
      title: "pork satay,grilled pork",
      category: "Cake",
      img: IMG2,
      description:
        "It consists of marinated and skewered pork pieces that are grilled to perfection, resulting in tender, juicy, and flavorful meat.",
      price: "2.32 USD",
    },
    {
      id: 7,
      title: "Papaya Salad",
      category: "Sweet",
      img: IMG3,
      description:
        "consists of a combination of lime juice, fish sauce, palm sugar, and chili peppers.",
      price: "2.32 USD",
    },
    {
      id: 8,
      title: "Pork Satay,Grilled Pork",
      category: "Soup",
      img: IMG4,
      description:
        "It consists of marinated and skewered pork pieces that are grilled to perfection, resulting in tender, juicy, and flavorful meat.",
      price: "2.32 USD",
    },
  ];

  const filteredFood =
    activeCategory === "All"
      ? itemsFood
      : itemsFood.filter((food) => food.category === activeCategory);

  const handleAddToCart = (item: any) => {
    const totalQuantity = cartArr.reduce(
      (sum: number, i: any) => sum + i.quantity,
      0
    );
    if (totalQuantity >= 10) {
      toast.error("You can only add up to 10 items in total!");
      return;
    }

    setCartArr((prev: any) => {
      const existing = prev.find((i: any) => i.id === item.id);
      if (existing) {
        if (existing.quantity >= 5) {
          toast.error("You can only add up to 5 of this item!");
          return prev;
        }
        return prev.map((i: any) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const handleRemoveItem = (item: any) => {
    setCartArr((prev: any) =>
      prev
        .map((i: any) =>
          i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter((i: any) => i.quantity > 0)
    );
  };

  const getItemQuantity = (id: number) => {
    const item = cartArr.find((i: any) => i.id === id);
    return item ? item.quantity : 0;
  };

  console.log(cartArr);

  return (
    <div className="w-container mx-auto my-25">
      <div>
        <h1 className="font-inter font-semibold text-lg md:text-[40px] text-center">
          Popular Food
        </h1>
        <hr className="border-2 border-mainColor w-38 mx-auto" />
      </div>

      <div className="flex gap-12 items-center mt-15.75 flex-wrap">
        {/* <div className="w-[70%] md:hidden mx-auto">
          <select
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
            className="w-full border border-[#C6C6C6] rounded-lg px-4 py-3 text-[12px] font-inter outline-none"
          >
            {items.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div> */}

        <div className="flex gap-12 items-center flex-1">
          <div
            className="border border-[#C6C6C6] p-3 rounded-lg  flex-1
          grid grid-cols-3 justify-items-center md:justify-items-start lg:grid-cols-7  lg:gap-20 xl:gap-27
          "
          >
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(item)}
                className={`font-inter text-[12px] py-2.5 px-4 w-18.5 h-11 flex items-center justify-center transition-all cursor-pointer
                  ${
                    activeCategory === item
                      ? "border border-mainColor rounded-lg bg-mainColor text-white"
                      : "text-[#262626]"
                  }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="py-5.5 px-2.5 border border-[#C6C6C6] rounded-lg h-17 hidden md:flex">
            {PopularFoodIcon}
          </div>
        </div>
      </div>

      <div className="mt-21.5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredFood.map((item) => (
          <div
            key={item.id}
            className="border border-[#C6C6C6] rounded-lg p-6 relative flex items-center flex-col"
          >
            <img src={item.img} alt={item.title} />

            <div className="mt-6 text-center md:text-start w-full">
              <h1 className="font-inter text-lg md:text-[24px] font-medium truncate">
                {item.title}
              </h1>
              <p className="mt-1.5 font-inter line-clamp-2">
                {item.description}
              </p>
            </div>

            <div className="flex items-center justify-between mt-3 w-full">
              <p className="font-inter text-[20px] font-medium">{item.price}</p>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleRemoveItem(item)}
                  className="text-xl text-red-500"
                >
                  <FaMinus />
                </button>

                <span className="font-medium">{getItemQuantity(item.id)}</span>

                <button
                  onClick={() => handleAddToCart(item)}
                  className="text-xl text-green-500"
                >
                  <MdAddCircle />
                </button>
              </div>
            </div>

            <div className="absolute top-5 right-5">
              <button
                onClick={() =>
                  setLiked((prev: any) => ({
                    ...prev,
                    [item.id]: !prev[item.id],
                  }))
                }
              >
                {liked[item.id] ? (
                  <HiHeart className="text-red-500 text-2xl transition-all duration-200 cursor-pointer" />
                ) : (
                  <HiOutlineHeart className="text-red-500 text-2xl transition-all duration-200 cursor-pointer" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularFood;
