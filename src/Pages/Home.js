import React, { useState } from 'react';
import Hero from '../components/Hero.js';
import FullText from '../components/FullText.js';
import ServiceSection from '../components/ServiceSection.js';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import ImageSlider from '../components/ImageSlider.js';
import '../components/Hero.css';
import '../components/ServiceSection.css';
import UserPost from '../components/UserPost.js';
import img7 from '../Images/img7.jpeg';
import img15 from '../Images/img-15.svg';
import img19 from '../Images/img19.jpeg';
import ethanImg from '../Images/ethan-computer.png';
import 'animate.css';
import LogoSlider from '../components/LogoSlider.js';
import MyBackground from '../components/MyBackground.js';
import ImgSlider from '../components/ImgSlider.js';
import ContactForm from '../components/ContactForm.js';



//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


/*let getUserName = () => {
  let userName = document.getElementById('userInput').value;
  let modal = document.querySelector('.modal-container');
    if(userName.length > 0) {
    alert(`Welcome, ${userName}!`); 
    modal.style.display = "none";
    } else if (userName.length < 1) {
    alert('type something');
    }
  }

  //modal pop up for user input
  setTimeout(function() {
    let modal = document.querySelector('.modal-container');
    modal.style.display = "block";
  },2500)
*/

const Home = () => {
  const [input, inputUpdated] = useState("Welcome to my website")
    return (
    <div>
      <span id="pageTitle">HOME</span>
      <Hero 
      //headerOne={`Welcome to my website, ${userInput}!`}
      headerOne="Hi, I'm Ethan."
      skillsOne="web development"
      skillsTwo="search engine optimization"
      skillsThree="website management"
      skillsFour="online advertising"
      headerTwo="Created using React JS." 
      //img="https://media.licdn.com/dms/image/D5603AQHgKqKtk0i_Cw/profile-displayphoto-shrink_400_400/0/1677732964441?e=1683158400&v=beta&t=eh3eQZln0r_97Owat-LvCYf2eVTimoMm5zwpM6vsmIc"
      img={ethanImg}
      flippedContent="Check out my LinkedIn profile."
      returnHomeBtn="hideMe"
      />
      <MyBackground />

      {/*
      <ServiceSection 
      titleOne="Web Development"
      webSkillOne="wordpress"
      webSkillTwo="javascript"
      webSkillThree="website management"
      webSkillFour="react js"
      webSkillFive="html"
      webSkillSix="css"
      descriptionOne="Affordable, creative, modern and simple web development services."
      ctaOne="Learn more"
      titleTwo="Search Engine Optimization"
      seoSkillOne="keyword research"
      seoSkillTwo="technical seo"
      seoSkillThree="site audit"
      seoSkillFour="semrush"
      seoSkillFive="competitor analysis"
      descriptionTwo="Affordable search engine optimization services that provide results!"
      ctaTwo="Learn more"
      titleThree="Online Advertising"
      ppcSkillOne="google ads"
      ppcSkillTwo="search advertising"
      ppcSkillThree="display advertising"
      ppcSkillFour="social media ads"
      descriptionThree="Affordable results-driven online advertising services for your business."
      ctaThree="Learn more"
      titleFour="Website Optimization"
      optimizationSkillOne="site errors"
      optimizationSkillTwo="core web vitals"
      optimizationSkillThree="performance updates"
      optimizationSkillFour="site audit report"
      descriptionFour="I can enhance your performance and core web vitals score on your website."
      ctaFour="Learn more"
      />
      */}
      <ImgSlider />
      <AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true">
      <div style={{ backgroundColor: "ghostwhite"}}>
      <FullText
      title="A Little About Me"
      src={img7}
      descriptionOne="My name is Ethan Roberson and I am a self-taught web developer, web and SEO manager and I know a thing or two about PPC campaigns. I have been working professionaly in this field for several years now, my most recent position with ArisGlobal, a SaaS company in the Life Sciences field, is where I mainly use my Website and SEO management skills coupled with my web developer experience as well. We use Wordpress as our CMS, Google Analytics, Google Search Console, SEMrush, JIRA, Asana, Salesforece, Pardot for our contact forms and registration forms as well as drift chat."
      descriptionTwo="If you want to know more about me, connect on a project, hire me for your company or just want to reach out, feel free to! If you are local to Raleigh, NC, we can grab a coffee!"
      />
      </div>
      </AnimationOnScroll>
      <ContactForm />
    </div>
    )
};

/*
const highlightText = () => {
  let fwTxt = document.querySelector('.full-width p');
  if(fwTxt.innerHTML.includes('Ethan Roberson')) {
    fwTxt.classList.add('highlight');
  }
}
highlightText();
*/


  export default Home;