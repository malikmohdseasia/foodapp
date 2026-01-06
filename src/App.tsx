import { BrowserRouter, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Order from "./Components/Order";
import PopularFood from "./Components/PopularFood";
import Review from "./Components/Review";
import SpecialOffer from "./Components/SpecialOffer";
import StayInTouch from "./Components/StayInTouch";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [cartArr, setCartArr] = useState([]);

  return (
    <BrowserRouter>
      <ToastContainer
        position="top-center"
        className="flex justify-center items-center"
        toastClassName="m-auto"
      />

      <Navbar
        showModal={showModal}
        setShowModal={setShowModal}
        cartArr={cartArr}
      />
      <Hero />
      <Order />
      <PopularFood cartArr={cartArr} setCartArr={setCartArr} />
      <SpecialOffer />
      <Review />
      <StayInTouch />
      <Footer />
      <Routes>
        {/* <Route path="/home" element={<Hero/>}/>
       <Route path="/about" element={<Footer/>}/>
        <Route path="/blog" element={<UnderDevelopment/>}/>
         <Route path="/service" element={<UnderDevelopment/>}/>
          <Route path="/contact-us" element={<UnderDevelopment/>}/> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
