import React from 'react'
import '../components/Gallery.css';
import img1 from '../Images/img1.jpeg';
import img2 from '../Images/img2.jpeg';
import img3 from '../Images/img3.jpeg';
import img4 from '../Images/img4.jpeg';
import img5 from '../Images/img5.jpeg';
import img6 from '../Images/img6.jpeg';
import img7 from '../Images/img7.jpeg';
import img8 from '../Images/img8.jpeg';
import img9 from '../Images/img9.jpeg';
import img10 from '../Images/img10.jpeg';
import img11 from '../Images/img11.jpeg';
import img13 from '../Images/img13.jpeg';
import droneClouds from '../Images/drone-shot-clouds.jpeg';
import gymPic from '../Images/gym-time.jpeg';
import droneBasketball from '../Images/drone-basketball.jpeg';
import miamiBeach from '../Images/miami-beach.jpeg';
import lidoBeach from '../Images/lido-beach-drone.jpeg';
import shellyLake from '../Images/shelly-lake.jpeg';
import flyingFL from '../Images/flying-florida.jpeg';


function Gallery() {
  /*
    const images = document.querySelectorAll('.gallery-container img');
    const imageLargeContainer = document.getElementById('imageLarge');
    const closeImgModal = document.getElementById('closeImgModal');
    const lgImg = document.querySelector('.lg-img');

  images.forEach((image) => {
  	image.addEventListener('click', function() {
    imageLargeContainer.style.display = "block";
    imageLargeContainer.classList.add('animate-scale-fade');
    lgImg.src = image.src;
    });
  });
  closeImgModal.addEventListener('click', function(){
    imageLargeContainer.style.display = "none";
    });
*/
    return (
        
        <div>
            
            <h2 id="galleryTitle">Some Photos From My Life</h2>
            <div className="buttons">
                {/*}hidden<button id="btnOne" onClick={showGallery}>Show Gallery</button>-*/}
            </div>
            <div className="gallery-container">
            <h2 className="sectionTitle"></h2>
        <section id="gallery1">
          <div className="img-title-container">
            <h3 className="img-title">Took this beautiful picture when I went to Miami.</h3>
            <img src={miamiBeach} />
            </div>
            <div className="img-title-container">
            <h3 className="img-title">Cool looking photo taken with my drone.</h3>
            <img src={droneBasketball} />
            </div>
            <div className="img-title-container">
            <h3 className="img-title">My favorite picture taken with my drone. Lido Beach, FL.</h3>
            <img src={lidoBeach} />
            </div>
        </section>

        <section id="gallery2">
        <div className="img-title-container">
            <h3 className="img-title">This is one of my favorite pictures I have taken of Louie.</h3>
            <img src={img8} />
            </div>
            <div className="img-title-container">
            <h3 className="img-title">This is Shelly Lake Park, located in Raleigh, NC.</h3>
            <img src={shellyLake} />
            </div>
            <div className="img-title-container">
            <h3 className="img-title">This is my favorite hobby. If you are local, let's play.</h3>
            <img src={img10}/>
            </div>
        </section>
        <section id="gallery3">
        <div className="img-title-container">
            <h3 className="img-title">Flying amazes me. Just look at this majestic view!</h3>
            <img src={flyingFL} />
            </div>
            <div className="img-title-container">
            <h3 className="img-title">Took this with my drone! Super fun way to get footage.</h3>
            <img src={droneClouds} />
            </div>
            <div className="img-title-container">
            <h3 className="img-title">A daily reminder to get active! Our bodies need it.</h3>
            <img src={gymPic}/>
            </div>
        </section>
      </div>
      <div id="imageLarge">
    <button id="closeImgModal">X</button>
	<img className="lg-img"/>
  </div> 
</div>
      
    )
}







export default Gallery
