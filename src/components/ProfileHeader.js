import React from 'react'
import '../components/ProfileHeader.css';
import AvailabilityStatus from '../components/AvailabilityStatus.js';
import Spotify from '../components/Spotify.js';
import Skills from '../components/Skills.js';



function ProfileHeader(props) {
    return (
        <div>
            <div className="profiler-header-wrapper">
                <div className="profile-header-content animate__animated animate__fadeIn">
                  <div className="header-left">
                    <img src={props.profilepic} className="profile-header-img" />
                    <a href="tel:9197038475" id="email-ethan-btn">919-703-8475</a>
                  </div>
                  <div className="header-right">
                      <AvailabilityStatus />
                    <h1>{props.profileName}</h1>
                    <h2>{props.jobTitle}</h2>
                    <Skills 
                    skillsOne="HTML"
                    skillsTwo="CSS"
                    skillsThree="JavaScript"
                    skillsFour="React"
                    skillsFive="Jira"
                    skillsSix="Optimizations"
                    skillsSeven="SEO"
                    skillsEight="Wordpress"
                    skillsNine="Adobe"
                    skillsTen="SEMrush"
                    />
                <div class="job-info-container">
	                <div class="job-info">
    	                <div>
        	                <h3>Title</h3>
        	                <span class="job-item-title">Web Manager</span>
                        </div>
                        <div>
        	                <h3>Company</h3>
        	                <span class="job-item-title">ATD</span>
                        </div>
      	                <div>
        	                <h3>Size of Company</h3>
        	                <span class="job-item-title">2000+</span>
                        </div>
                        <div>
        	                <h3>Industry</h3>
        	                <span class="job-item-title">eCommerce</span>
                        </div>
                        <div>
        	                <h3>Tenure</h3>
        	                <span class="job-item-title">6 months+</span>
                        </div>
                    </div>
                </div>
                  </div>
                  <Spotify />
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader
