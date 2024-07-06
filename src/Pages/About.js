import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import Hero from '../components/Hero.js';
import FullText from '../components/FullText.js';
import Gallery from '../components/Gallery.js';
import '../components/Hero.css';
import '../components/ServiceSection.css';
import UserPost from '../components/UserPost.js';
import img7 from '../Images/img7.jpeg';
import img18 from '../Images/img18.jpeg';

const About = () => {
    return (
    <div>
      <span id="pageTitle">ABOUT</span>
      <Hero 
      headerOne ="Hello! I am Ethan." 
      skillsOne="honest"
      skillsTwo="reliable"
      skillsThree="creative"
      skillsFour="sarcastic"
      headerTwo="Golf | Disc Golf | Basketball | Hiking" 
      img={img18}
      flippedContent="Let's play a round of golf!"
      />
      <FullText 
      title="Get to Know Me a Little Better"
      src={img7}
      descriptionOne="Hello! Thank you for stopping by my website and getting to know me a little better. Some of my hobbies are: golf, disc-golf, basketball, hiking, riding bikes, learning new stuff, photography, flying my drone, playing with my cat, Louie, and spending time with family and friends."
      descriptionTwo="If you are local to Raleigh, NC and want to maybe go play a round of golf, disc golf or shoot basketball, reach out! I'm usually always up to do some activity and enjoy being outdoors!"
      />
    </div>
    )
};


  export default About;