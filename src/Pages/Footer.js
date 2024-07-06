import React from 'react'
import topBtn from '../Images/top.png';

function Footer() {

    const toTopBtnStyle = {
        width: "50px",
        height: "50px",
    }
    const footerContents = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px"
    }
    

    return (
        <div>
            <div className="footer-container" style={{backgroundColor: "#ACECFF", padding:"0px", position:"relative", width:"100%", bottom: "0"}}>
                <div className="contents" style={footerContents}>
                    <a href="#"> <img id="toTopBtn" src={topBtn} alt="Top Button icon" style={toTopBtnStyle}/></a>
                    <h3 style={{margin: "0"}}>Web app created by <strong>Ethan Roberson</strong></h3>
                </div>
            </div>
        </div>
    )
}

export default Footer
