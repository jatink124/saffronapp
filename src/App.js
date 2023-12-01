import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ResponsiceTable from "./components/ResponsiceTable";
import Card from "./components/Card";
import AboutUs from "./components/Aboutus";
import Contactus from "./components/Contactus";
import PaymentForm from "./components/PaymentForm";
import Footer from "./components/Footer";
import CardDetail from "./components/CardDetail";
import Home from "./components/Home";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/card" element={<Card/>} />
          <Route path="/card/:id" element={<CardDetail />} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/contactus" element={<Contactus/>} /> 
           <Route path="/buynow" element={<PaymentForm/>} />
          
        
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
