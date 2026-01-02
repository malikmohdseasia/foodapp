import { addReview, fourStarIcon, StarRating } from "../assets/Icons";
import IMG1 from "../assets/Reviews/image1.png";
import IMG2 from "../assets/Reviews/image2.png";

const Review = () => {
  const items = [
    {
      title: "Andia Jorida",
      img: IMG1,
      review:
        "My experience at your restaurant was truly excellent. The food was absolutely delicious - every dish was perfectly cooked and bursting with flavor. But what really impressed me was the service. Your staff was attentive, friendly which make me feel want to be there again.",
        rating:StarRating,
        totalStar:'5 stars'
    },
    {
      title: "William Henry",
      img: IMG2,
      review:
        `Living in Canada, I hadn't ventured much into Asian cuisine until recently. But wow, what a delicious world I've been missing! Khmer food, in particular, has captured my heart, and Bok Loh Hong holds a special place in my memory as the dish that first made me say, "Asian food is so yummy!"`,
        rating:fourStarIcon,
        totalStar:'4 stars'

    },
  ];

  return (
    <div className="w-container mx-auto">
      <div>
        <h1 className="font-inter font-semibold text-[40px] text-center mt-37">
          Review Form Our Customers Say
        </h1>
        <hr className="border-2 border-mainColor w-38 mx-auto" />
      </div>

      <div className="mt-26.75 flex gap-14">
        {items.map((item, index)=>(
            <div key={index} className="p-6 rounded-lg border border-[#C6C6C6]">
                <div className="flex gap-6.5 items-center">

                <img src={item.img} alt="" className="w-15 h-15 object-cover rounded-full" />
                <h1 className="font-inter font-medium text-[24px]">{item.title}</h1>
                </div>

                <div className="mt-6.75">
                    <p className="font-inter">{item.review}</p>
                </div>

                <div className="mt-4.5 flex gap-2 items-center ">
                    {item.rating}
                    <p>{item.totalStar}</p>
                </div>

            </div>
        ))}
      </div>


      <div className="flex gap-6.5 items-center mt-8.25 w-container">
        <p className="font-inter">Add A review</p>
        {addReview}
      </div>
    </div>
  );
};

export default Review;
