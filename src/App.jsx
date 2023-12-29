import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import FixedSide from "./components/FixedSide/FixedSide"
import ContactUs from "./pages/ContactUs/ContactUs"
import SmoothScroll from "./components/SmoothScroll"
import AboutUs from "./pages/AboutUs/AboutUs"
import WhyChooseUs from "./pages/WhyChooseUs/WhyChooseUs"

function App() {
  return (
    <>

      <BrowserRouter>
        <SmoothScroll>
          <Header />
          <FixedSide />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
          <Footer />
        </SmoothScroll>
      </BrowserRouter>

    </>
  )
}

export default App
