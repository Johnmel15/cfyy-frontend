import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import About from "./pages/About";
// import Services from "./pages/Services";
// import Team from "./pages/Team";
// import Contact from "./pages/Contact";
import Navbar from "./layouts/Navbar";
import { HomePage } from "./pages/home";
import { AboutPage } from "./pages/about";
import { ServicesPage } from "./pages/services";
import { TeamPage } from "./pages/team";
import { ContactPage } from "./pages/contact";
import Footer from "./layouts/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-light">
        <Navbar />
        <div className="pt-16">
          {/* Add padding to account for fixed navbar */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/contact-us" element={<ContactPage />} />

            {/* <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
