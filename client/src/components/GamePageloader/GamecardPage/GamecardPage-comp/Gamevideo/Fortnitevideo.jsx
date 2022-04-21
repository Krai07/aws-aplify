import React from "react";
import video from '../../VideoPreview/Fortnite.mp4';
import './Gamevideo.css';

function Fortnitevideo (){
    return(
        <div className="gamecontainer">
        <video autoPlay loop muted className="videox"  >
            <source src={video}/>
        </video>
        </div>
    );
};
export default Fortnitevideo; 