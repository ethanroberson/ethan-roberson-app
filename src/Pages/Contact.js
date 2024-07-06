import React from 'react';
import Hero from '../components/Hero.js';
import img7 from '../Images/img7.jpeg';
import img19 from '../Images/img19.jpeg';
import FullText from '../components/FullText.js';
import UserPost from '../components/UserPost.js';
import ImgSlider from '../components/ImgSlider.js';
import ContactForm from '../components/ContactForm.js';
import ethanonphone from '../Images/ethan-on-phone.JPG';



const Contact = () => {
    return (
    <div>
      <span id="pageTitle">CONTACT</span>
      <Hero 
      headerOne="Want to connect?"
      skillsOne="will respond asap"
      skillsTwo="easy to work with"
      skillsThree="enjoys learning"
      skillsFour="teachable"
      headerTwo="Looking forward to connecting!"
      img={ethanonphone}
      flippedContent="View more details on LinkedIn"
      returnHomeBtn="hideMe"
      />
    <FullText
      title="A Little About Me"
      src={img7}
      descriptionOne="My name is Ethan Roberson and I am a self-taught web developer, web and SEO manager and I know a thing or two about PPC campaigns. I have been working professionaly in this field for several years now, my most recent position with ArisGlobal, a SaaS company in the Life Sciences field, is where I mainly use my Website and SEO management skills coupled with my web developer experience as well. We use the commonly used Wordpress CMS."
      descriptionTwo="If you want to know more about me, connect on a project, hire me for your company or just want to reach out, feel free to! If you are local to Raleigh, NC, we can grab a coffee!"
      />
      <ImgSlider />
      <ContactForm />
          </div>

    )
};


  export default Contact;