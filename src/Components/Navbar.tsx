import { NavLink } from "react-router-dom";
import { BellIcon, CartIcon, SearchIcon } from "../assets/Icons";
import Logo from "../assets/logo.svg";
import SearchModal from "./SearchModal";
import { useState } from "react";

const Navbar = ({ showModal, setShowModal, cartArr }: any) => {
  const [open, setOpen] = useState(false);

  const items = [
    { title: "Home", route: "/home" },
    { title: "About", route: "/about" },
    { title: "Blog", route: "/blog" },
    { title: "Service", route: "/service" },
    { title: "Contact us", route: "/contact-us" },
  ];

  const svgItems = [
    { svg: SearchIcon, title: "search" },
    { svg: CartIcon, title:'cart' },
    { svg: BellIcon },
    { svg: "Login" },
  ];

   const totalQuantity = cartArr.reduce((sum: number, i: any) => sum + i.quantity, 0);

  return (
    <div className="w-container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center my-2 md:my-14 ">

      <div
        className="md:hidden text-2xl cursor-pointer mb-2"
        onClick={() => setOpen((pre) => !pre)}
      >
        {open ? "✕" : "☰"}
      </div>

      <div className="mx-auto -mt-10 md:m-0">
        <img src={Logo} alt="logo" />
      </div>

      <div
        className={`flex flex-col gap-3 items-start mt-5 md:mt-0
        md:flex-row md:gap-6 md:items-center
        overflow-hidden transition-all duration-300 ease-in-out
        ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}
        md:max-h-full md:opacity-100`}
      >
        {items.map((item, index) => (
          <NavLink key={index} to={item.route}
          className={({isActive})=>`font-inter font-medium ${isActive ? 'text-blue-500 font-bold': ""}`}
          >
            {item.title}
          </NavLink>
        ))}
      </div>

     <div className={`flex md:flex-row gap-3 md:gap-6 items-center mt-2 md:mt-0
     overflow-hidden transition-all duration-300 ease-in-out
        ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}
        md:max-h-full md:opacity-100
        ${showModal ? 'flex-col items-start':'flex-row'}
        `
    
    }
     >
        {showModal && <SearchModal />}
        <div className="flex gap-6 items-center relative">

        {svgItems.map((item, index) => (
          <p
            key={index}
            className={`rounded-lg cursor-pointer ${
              item.svg === "Login"
                ? "font-normal font-inter border border-mainColor py-2 px-2.5"
                : ""
            }`}
            onClick={()=>{
                item.title==='search' && setShowModal((pre:any)=>!pre)
            }}
            

            
          >
            {
                item.title==='cart' && <div className="bg-red-500 w-4 h-4 top-0 right-33 rounded-full absolute
                flex items-center justify-center
                ">
                    <p className="text-[10px] font-inter text-white font-black">{
                        totalQuantity
                        }</p>
            </div>
            }
              
            {item.svg}
          </p>
        ))}
        </div>

      </div>
     
    </div>
  );
};

export default Navbar;
