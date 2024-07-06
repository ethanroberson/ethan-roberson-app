import React from 'react'
import ServiceSection from './ServiceSection.js';
import '../components/Timeline.css';
import SingleService from './SingleService.js';
import { AnimationOnScroll } from 'react-animation-on-scroll';


function MyBackground() {
    return (
    <div style={{paddingTop: "50px", paddingBottom: "50px", marginTop: "50px", marginBottom: "50px", backgroundColor: "#474e5d", borderRadius: "7px"}}>
        <h2 style={{fontSize: "33px", paddingBottom: "50px", color: "#fff"}}>My background</h2>
    <div class="timeline">
    <AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true">
    <div class="timeline-container left">
        <div class="content">
        <h2>Web Development</h2>
        <div className="skills-container">
            <span style={{background: "#ACECFF"}}>wordpress</span>
            <span style={{background: "#ACECFF"}}>html</span>
            <span style={{background: "#ACECFF"}}>css</span>
            <span style={{background: "#ACECFF"}}>javascript</span>
            <span style={{background: "#ACECFF"}}>react js</span>
            <span style={{background: "#ACECFF"}}>npm</span>
            <span style={{background: "#ACECFF"}}>vs code</span>
            <span style={{background: "#ACECFF"}}>front-end development</span>
            <span style={{background: "#ACECFF"}}>landing page development</span>
            <span style={{background: "#ACECFF"}}>website management</span>
        <p>I can create websites using WordPress, from scracth using HTML, CSS, and JavaScript as well as creating react js apps (this website is built using react js). I also optimize website performance and manage websites.</p>
        </div>
        </div>
    </div>
    </AnimationOnScroll>
    <AnimationOnScroll animateIn="animate__fadeIn animate__delay-1s" animateOnce="true">
    <div class="timeline-container right">
        <div class="content">
        <h2>Website Optimization</h2>
        <div className="skills-container">
            <span style={{background: "#ACECFF"}}>site audit</span>
            <span style={{background: "#ACECFF"}}>core web vitals</span>
            <span style={{background: "#ACECFF"}}>error fixes</span>
            <span style={{background: "#ACECFF"}}>content optimization</span>
            <span style={{background: "#ACECFF"}}>performance updates</span>
            <span style={{background: "#ACECFF"}}>updating wordpress</span>
            <span style={{background: "#ACECFF"}}>updating plugins</span>
        <p>I optimize websites from simple 404 errors, redirects, removing redirect chain loops, creating backups, website migrations, optimizing how third party scripts are loaded and more.</p>
        </div>
        </div>
    </div>
    </AnimationOnScroll>
    <AnimationOnScroll animateIn="animate__fadeIn animate__delay-1s" animateOnce="true">
    <div class="timeline-container left">
        <div class="content">
        <h2>SEO (Search Engine Optimization)</h2>
        <div className="skills-container">
            <span style={{background: "#ACECFF"}}>keyword research</span>
            <span style={{background: "#ACECFF"}}>technical seo</span>
            <span style={{background: "#ACECFF"}}>on-page seo</span>
            <span style={{background: "#ACECFF"}}>off-page seo</span>
            <span style={{background: "#ACECFF"}}>semrush</span>
            <span style={{background: "#ACECFF"}}>google search console</span>
            <span style={{background: "#ACECFF"}}>competitor analysis</span>
        <p>I create SEO campaigns that yield results. From keyword research, creating content, competitor analysis, GAP analysis, technical SEO, backlink audits and more.</p>
        </div>
        </div>
    </div>
    </AnimationOnScroll>
    <AnimationOnScroll animateIn="animate__fadeIn animate__delay-1s" animateOnce="true">
    <div class="timeline-container right">
        <div class="content">
        <h2>PPC (Pay Per Click)</h2>
        <div className="skills-container">
            <span style={{background: "#ACECFF"}}>google ads</span>
            <span style={{background: "#ACECFF"}}>facebook ads</span>
            <span style={{background: "#ACECFF"}}>instagram ads</span>
            <span style={{background: "#ACECFF"}}>search advertising</span>
            <span style={{background: "#ACECFF"}}>display advertising</span>
            <span style={{background: "#ACECFF"}}>campaign managment</span>
            <span style={{background: "#ACECFF"}}>google ads consultation</span>
        <p>Most of my paid advertising experience comes from search advertising on Google. This is where I have seen the most ROI. Though, other avenues, such as display and social media advertising are effective, too. It comes down to what you are selling and who your target audience is.</p>
        </div>
        </div>
    </div>
    </AnimationOnScroll>

    </div>
    </div>
    )
}

export default MyBackground
