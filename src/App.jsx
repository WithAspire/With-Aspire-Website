import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"

function App() {
  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
