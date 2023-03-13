import Header from "./Components/Header/Header";
import "./App.css";
import SignIn from "./pages/sign-in-page/sign-in-page";
import DoctorPage from "./pages/doctor-page/doctor-page"
import Footer from "./Components/Footer/Footer";
import ContactPage from "./pages/contact-page/contact-page"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/about-page/about-page";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
    
          <Routes>
            <Route path="signin" element={<SignIn/>}/>
            <Route path="doctor" element={<DoctorPage/>} />
            <Route path="contact" element={<ContactPage/>} />
            <Route path="about" element={<AboutUs/>} />
          </Routes>
      
        <Footer />
      </Router>
    </div>
  );
}

export default App;
