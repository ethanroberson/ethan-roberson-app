import React from 'react';
import Hero from '../components/Hero.js';
import ServiceSection from '../components/ServiceSection.js';
import BodyContentRight from '../components/BodyContentRight.js';
import BodyContentLeft from '../components/BodyContentLeft.js';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import FullText from '../components/FullText.js';
import '../components/Hero.css';
import '../components/ServiceSection.css';
import UserPost from '../components/UserPost.js';
import ImgSlider from '../components/ImgSlider.js';
import img7 from '../Images/img7.jpeg';
import img19 from '../Images/img19.jpeg';
import ethanImg from '../Images/ethan-computer.png';
import digibot from '../Videos/digibot.mp4';
import Arisglobal from '../Videos/arisglobal.mp4';
import roofTool from '../Videos/roof-visualizer.mp4';
import ContactForm from '../components/ContactForm.js';
import Divider from '../components/Divider.js';


const Projects = () => {
    return (
    <div>
      <span id="pageTitle">PROJECTS</span>
      <Hero 
      headerOne ="Check out some of my work."
      skillsOne="web development"
      skillsTwo="search engine optimization"
      skillsThree="website management"
      skillsFour="creative"
      headerTwo="I'll make a great addition to your team." 
      img={ethanImg}
      flippedContent="View more details on LinkedIn"
      returnHomeBtn="hideMe"
      />

      <BodyContentRight 
      title="My projects"
      serviceTitle="Digibot"
      serviceDes="I randomly thought to myself one evening 'I wonder if I can build a simple virtual bot' so I started to work on it and had a working model in a night and spent a couple of hours the next couple days to get it where it's at now."
      serviceDes2="It still has a lot of room for new features and it's no ChatGPT by any stretch, but it's simple and gets the job done. I even shared a demo with a web client of mine and they liked it so much they purchased it for their website."
      linkText = "That Digital Dude - Digibot"
      link="https://thatdigitaldude.com/services/digibot"
      video={digibot}
      />
      <BodyContentLeft
      serviceTitle="Custom Component - ArisGlobal"
      serviceDes="When I worked at ArisGlobal (B2B SaaS company in the pharmacovigilance industry), I managed their websites arisglobal.com and lifesphere.arisglobal.com. The website is built on WordPress CMS. I collaborated with several teams to fulfil their campaigns by creating stunning landing pages with custom functionality." 
      serviceDes2="This simple component is something I built to help add some functionality to the home page. I created it in HTML, CSS, and vanilla JavaScript. I believe it adds a nice touch to the web experience. "
      linkText = "ArisGlobal"
      link="https://arisglobal.com"
      video={Arisglobal}
      videoStyle={{width:"650px", height:"auto"}}
      />
      <BodyContentRight 
      serviceTitle="Metal Roof Visualizer"
      serviceDes="I had a website client react out to me (roofing contractor) and he wanted me to build a tool that would allow users to visually see the different types of colors through which he offers in metal roofing. I built this tool in HTML, CSS, and vanilla JavaScript. The client was happy with the result and still uses it today."
      linkText = "That Digital Dude - Metal Roof Visualizer"
      link="https://www.thatdigitaldude.com/metal-roof-visualizer-tool/"
      video={roofTool}
      videoStyle={{width:"700px", height:"auto"}}
      />
      <Divider />
      <ImgSlider />
      <div style={{ backgroundColor:"ghostwhite"}}>
      <FullText 
      title="A Little About Me"
      src={img7}
      descriptionOne="My name is Ethan Roberson and I am a self-taught web developer, web and SEO manager and I know a thing or two about PPC campaigns. I have been working professionaly in this field for several years now, my most recent position with ArisGlobal, a SaaS company in the Life Sciences field, is where I mainly use my Website and SEO management skills coupled with my web developer experience as well. We use the commonly used Wordpress CMS."
      descriptionTwo="If you want to know more about me, connect on a project, hire me for your company or just want to reach out, feel free to! If you are local to Raleigh, NC, we can grab a coffee!"
      />
      <UserPost />
      <ContactForm />
      </div>
    </div>
    )
};


  export default Projects;