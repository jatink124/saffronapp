import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ResponsiceTable from "./components/ResponsiceTable";
import Card from "./components/Card";
import AboutUs from "./components/Aboutus";
import Contactus from "./components/Contactus";
import PaymentForm from "./components/PaymentForm";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Card/>} />
          {/* <Route path="/buynow" element={<PaymentForm/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/contactus" element={<Contactus/>} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
