import "./App.css";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import CartPage from "./Pages/Cart/CartPage";
import Hero from "./Pages/Hero/Hero";
import Product from "./Pages/Product/Product";
import {BrowserRouter as Router, Route, Routes, Outlet} from "react-router-dom";
import Contact from "./Pages/Contact/Contact";
import Navbar1 from "./Components/NavBar/Navbar1";
import Navbar2 from "./Components/NavBar/Navbar2";

function App() {
  
  return (
    <>
      <Router>
        {/* <NavBar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/productpage" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<CartPage />} /> 
        </Routes>
        <Footer /> */}

        <Routes>
        <Route path="/" element={<Navbar1/>}>
           <Route path="/" element={<Hero />} />
           <Route path="/productpage" element={<Product />} />
        </Route>
          
          <Route path="*" >
            <Route path="cart" element={<CartPage />} /> 
          </Route>
          
          <Route path="*" element={<Navbar2/>}>
            <Route path="contact" element={<Contact />} />    
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
