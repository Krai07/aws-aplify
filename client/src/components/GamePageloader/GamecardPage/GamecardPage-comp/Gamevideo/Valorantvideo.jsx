import React from "react";
import video from '../../VideoPreview/Valo.mp4';
import './Gamevideo.css';

function Valorantvideo (){
    return(
        <div className="gamecontainer">
        <video autoPlay muted className="videox">
            <source src={video}/>
        </video>
        </div>
    );
}; 
export default Valorantvideo;