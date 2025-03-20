import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SkillSet from "./components/SkillSet/SkillSet";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";


export default function App(){  

  return (
    <div >
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">    
          <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skillset" element={<SkillSet />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          <Footer/>
      </div>
    </div>
  );
};

