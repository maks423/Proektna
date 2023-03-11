import Header from "./Components/Header/Header";
import "./App.css";
import SignIn from "./pages/sign-in-page/sign-in-page";
import DoctorPage from "./pages/doctor-page/doctor-page"
import Footer from "./Components/Footer/Footer";
import ContactPage from "./pages/contact-page/contact-page"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        
        <Footer />
        <div className='app-container'>
          <Routes>
            <Route path="signin" element={<SignIn/>}/>
            <Route path="doctor" element={<DoctorPage/>} />
            <Route path="contact" element={<ContactPage/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
