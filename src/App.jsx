import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import { BrowserRouter,Routes,Route,Router} from "react-router-dom"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart.jsx"
import Login from "./pages/Login"
import Product from "./pages/Product"
import Shopcategory from "./pages/Shopcategory"
import men_banner from "./assets/banner_mens.png"
import women_banner from "./assets/banner_women.png"
import kid_banner from "./assets/banner_kids.png"

function App() {
  return(
    <div>
      <BrowserRouter>
        <Header />
        <Body />
        <Routes>
          <Route path="/" element={<Shop />}/>
          <Route path="/men" element={<Shopcategory banner={men_banner} catergory="mens"/>}/>
          <Route path="/women" element={<Shopcategory banner={women_banner} catergory="womens"/>}/>
          <Route path="/kid" element={<Shopcategory banner={kid_banner} catergory="kids"/>}/>
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
