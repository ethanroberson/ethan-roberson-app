import React, { useState } from 'react';
import '../components/WebProjects.css';

function WebProjects() {
    const [activeBtn, setActiveBtn] = useState("Bryan's Construction");
    const [clientImg, setClientImg] = useState("https://www.thatdigitaldude.com/wp-content/uploads/2022/10/bryan-construction-screenshot-small.png");

    const handleButtonClick = (image, buttonText) => {
        setClientImg(image);
        setActiveBtn(buttonText);
    };

    return (
        <div>
            <div id="projects" style={{ paddingTop: '50px' }} ></div>
            <div className="full-width" data-aos="fade-in"  data-aos-easing="ease-in-out" data-aos-delay="100">
                <section className="full-width">
                    <div className="section-title">
                        <h3>Website Projects</h3>
                        <p className="web-project-text">You can click through each button and view the client website home page by scrolling vertically on the laptop screen below. Give it a try!</p>
                    </div>
                    <div className="button-container">
                        <button className={`button ${activeBtn === "Bryan's Construction" ? 'active-btn' : ''}`} onClick={() => handleButtonClick("https://www.thatdigitaldude.com/wp-content/uploads/2022/10/bryan-construction-screenshot-small.png", "Bryan's Construction")}>Bryan's Construction</button>
                        <button className={`button ${activeBtn === "Port City Roofing" ? 'active-btn' : ''}`} onClick={() => handleButtonClick("https://www.thatdigitaldude.com/wp-content/uploads/2022/10/Port-City-Roofing-Screenshot-Resized.png", "Port City Roofing")}>Port City Roofing</button>
                        <button className={`button ${activeBtn === "NC Deck Waterproofing" ? 'active-btn' : ''}`} onClick={() => handleButtonClick("https://www.thatdigitaldude.com/wp-content/uploads/2022/10/NC-Deck-Waterproofing-Screenshot-Resized.png", "NC Deck Waterproofing")}>NC Deck Waterproofing</button>
                        <button className={`button ${activeBtn === "Oakala Law Firm" ? 'active-btn' : ''}`} onClick={() => handleButtonClick("https://www.thatdigitaldude.com/wp-content/uploads/2022/11/Oakala-Law-Screenshot.png", "Oakala Law Firm")}>Oakala Law Firm</button>
                    </div>
                    <div className="computer-wrapper">
                        <div className="computer-container">
                            <div className="computer-border">
                                <img id="clientImg" src={clientImg} alt="Client's Screenshot" />
                            </div>
                        </div>
                        <div className="bottom-bar"><div className="top-bar"></div></div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default WebProjects;
