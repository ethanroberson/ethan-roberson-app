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
import ethanImg from '../Images/ethan-computer.png';
import ImgSlider from '../components/ImgSlider.js';
import img7 from '../Images/img7.jpeg';
import img19 from '../Images/img19.jpeg';
import ContactForm from '../components/ContactForm.js';


const Services = () => {
    return (
    <div>
      <span id="pageTitle">SERVICES</span>
      <Hero 
      headerOne ="Stuff that I can do."
      skillsOne="web development"
      skillsTwo="search engine optimization"
      skillsThree="website management"
      skillsFour="online advertising"
      headerTwo="Great addition to your team." 
      img={ethanImg}
      flippedContent="View more details on LinkedIn"
      returnHomeBtn="hideMe"
      />

      <BodyContentRight 
      title="My background"
      serviceTitle="Web Development"
      serviceDes="I have been learning web development for the past several years. It all started when I accidentally clicked 'view source' on my computer while on a web page and I saw all of the source code. I was both lost and intrigued at the same time. I went home and started learning about HTML and CSS through codecademy. From there, I started to self-learn web development. I truly do enjoy it! It's fun having an idea and being able to write it out on the computer and create it."
      img="https://www.thatdigitaldude.com/wp-content/uploads/2022/10/undraw_design_process_re_0dhf.svg"
      videoStyle={{display: "none"}}
      link="https://linkedin.com/in/ethanroberson"
      linkText="LinkedIn"

      />
      <BodyContentLeft
      serviceTitle="Search Engine Optimization (SEO)"
      serviceDes="I have been learning SEO for the past several years as well. As we all know, SEO is a never-ending process and is very important for any business to increase their reach and traffic organically. In my most recent role as Web & SEO Manager at ArisGlobal, I have increased their traffic as well as increased their position rankings for several competitive keywords. From the time I started 2 years ago until today, the progress of their SEO as inclined (as seen in SEMrush graph chart)."
      img="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_1024/https://www.thatdigitaldude.com/wp-content/uploads/2023/02/%E2%80%94Pngtree%E2%80%94modern-flat-design-concept-of_5332900-1024x1024.png"
      videoStyle={{display: "none"}}
      link="https://linkedin.com/in/ethanroberson"
      linkText="LinkedIn"

      />
      <BodyContentRight 
      serviceTitle="Google Ads (PPC)"
      serviceDes="In a couple of my past roles, I have worked with creating and managing Google Ads campaigns. In my role at ArisGlobal, we have a big event each year called Breakthrough. I was in charge of creating a new search and display campaign for the event on Google Ads. I reviewed the previous campaign done by someone else a year prior and created my own campaign from scratch. My campaign outperformed the prevous campaign conversion wise, which was recognized by my manager and overall helped my team reach our goal of registrations for the event."
      img="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://www.thatdigitaldude.com/wp-content/uploads/2021/10/session-acquisition.png"
      videoStyle={{display: "none"}}
      link="https://linkedin.com/in/ethanroberson"
      linkText="LinkedIn"

      />
      <BodyContentLeft
      serviceTitle="Website Optimization"
      serviceDes="At my role at ArisGlobal, I am in charge of optimizing our website performance. When you pull up Google Page Speed Insights and audit your website, you will get back a report with errors to fix along with a mobile and desktop score. The mobile score is more important, as Google weighs more on mobile for SEO. I fixed a bunch of errors and brough our mobile score up from 25 to 89, which is a huge improvement. I noticed by doing this, over the next month and thereafter, our SEO started to improve as well. Google seemed to reward us since our website performance was much better."
      img="https://www.thatdigitaldude.com/wp-content/uploads/2023/03/undraw_pair_programming_re_or4x.svg"
      videoStyle={{display: "none"}}
      link="https://linkedin.com/in/ethanroberson"
      linkText="LinkedIn"

      />
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


  export default Services;