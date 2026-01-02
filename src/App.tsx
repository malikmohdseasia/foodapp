import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Order from "./Components/Order"
import PopularFood from "./Components/PopularFood"
import Review from "./Components/Review"
import SpecialOffer from "./Components/SpecialOffer"
import StayInTouch from "./Components/StayInTouch"

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Order/>
    <PopularFood/>
    <SpecialOffer/>
    <Review/>
    <StayInTouch/>
    <Footer/>
    </>
  )
}

export default App