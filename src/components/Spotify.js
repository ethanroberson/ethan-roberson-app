import React from 'react'
import '../components/Spotify.css';


function Spotify() {
    return (
        <div className="spotify-container animate__animated animate-pop-fade">
            <h3>Have a Listen to Some of My Favorite Music!</h3>
           <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/playlist/2LviyxCXq47jUb3FiDOfFz?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>


        </div>
    )
}

export default Spotify
