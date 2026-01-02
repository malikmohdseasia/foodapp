
import { BellIcon, CartIcon, SearchIcon } from "../assets/Icons";
import Logo from "../assets/logo.svg";

const Navbar = () => {

    const items = ['Home', 'About', 'Blog', 'Service', 'Contact us'];
    const svgItems = [{svg:SearchIcon}, {svg:CartIcon}, {svg:BellIcon}, {svg:"Login"}];

  return (
    <div className="w-container mx-auto flex justify-between items-center my-14">
        <div><img src={Logo} alt=""/></div>

        <div className="flex gap-6 items-center ">
            {items.map((item, index)=>(
                <p className="font-inter font-medium cursor-pointer" key={index}>{item}</p>
            ))}
        </div>

        <div className="flex gap-6 items-center">
            {
                svgItems.map((item, index)=>(
                    <p className={`${item.svg==='Login' ? 'font-normal font-inter border border-mainColor py-2 px-2.5':""}  rounded-lg cursor-pointer`} key={index}>{item.svg}</p>
                ))
            }
        </div>


    </div>
  )
}

export default Navbar