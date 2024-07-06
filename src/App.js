import './App.css';
import { FaLinkedin } from 'react-icons/fa';
import { FaMoon, FaSun} from 'react-icons/fa';
import 'animate.css';
import Navbar from './components/Navbar.js';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Services from './Pages/Services.js';
import Projects from './Pages/Projects.js';
import Contact from './Pages/Contact.js';
import ThankYou from './Pages/ThankYou.js';
import Profile from './Pages/Profile.js';
import UserPost from './components/UserPost.js';
import './components/Navbar.css';
import Footer from './Pages/Footer.js';
import './components/ContactForm.css';
import ErrorPage from './Pages/ErrorPage.js';

/*
const DarkMode = () => {
  return(
    <div id="darkLightBtnContainer">
      <button id="darkModeBtn" onClick={showDarkMode}><FaMoon /></button>
      <button id="lightModeBtn" className="hidden" onClick={showLightMode}><FaSun /></button>
    </div>
  )
}
*/
 
/*const styles = {
  darkLightBtnContainer: {
    position: "fixed",
    textAlign: "right",
    right: "15px",
    bottom: "15px",
    width: "100%"
  }
}
*/
/*
let darkBtn = document.getElementById('darkModeBtn');
let lightBtn = document.getElementById('lightModeBtn');


//show dark mode function
let showDarkMode = () => {
  let darkBtn = document.getElementById('darkModeBtn');
  let lightBtn = document.getElementById('lightModeBtn');
  //let heroContainer = document.querySelector('.hero-container');
  let allElements = document.querySelector('*');
  let allHeaders = document.querySelectorAll('h1, h2, h3, h4, h5');
  document.body.style.backgroundColor = "#111827";
  //heroContainer.style.backgroundColor = "#111827";
  lightBtn.className="visible";
  darkBtn.className="hidden";
  for(let i=0; i < allHeaders.length; i++) {
    allHeaders.classList.add('white-text');
  }
}

//show light mode function
let showLightMode = () => {
  let darkBtn = document.getElementById('darkModeBtn');
  let lightBtn = document.getElementById('lightModeBtn');
  darkBtn.className="visible";
  lightBtn.className="hidden";
  //let heroContainer = document.querySelector('.hero-container');
  let allElements = document.querySelector('*');
  document.body.style.backgroundColor = "#fff";
  //heroContainer.style.backgroundColor = "ghostwhite";
  allElements.classList.add('dark-text');
}
*/
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}


export default App;
