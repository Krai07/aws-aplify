import React from "react";
import video from '../../VideoPreview/Gta5.mp4';
import './Gamevideo.css';

function Gta5video (){
    return(
        <div className="gamecontainer">
        <video autoPlay muted className="videox">
            <source src={video}/>
        </video>
        </div>
    );
}; 
export default Gta5video;