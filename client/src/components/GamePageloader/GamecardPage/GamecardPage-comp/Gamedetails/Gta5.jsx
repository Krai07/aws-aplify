import React from "react";
import cardimage from '../../../game page/Card-images/gta.jpg';
import './Gamedetails.css';
import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const GtaV = () => {

    const [games, setgames] = useState(null);
    const [gamename, setgamename] = useState(null);
    const [Description, setDescription] = useState(null);
    const [price, setprice] = useState(null);
    const [gamelink, setgamelink] = useState(null);
    const [Totallikes, setTotallikes] = useState(null);
    const [mincpu, setmincpu] = useState(null);
    const [mingpu, setmingpu] = useState(null);
    const [minram, setminram] = useState(null);
    const [reccpu, setreccpu] = useState(null);
    const [recgpu, setrecgpu] = useState(null);
    const [recram, setrecram] = useState(null);

    // Getting data from json server
    useEffect(() => {
        const loadname = async () => {
            const response = await axios.get('http://localhost:8000/games');
            setgames(response.data);
        }
        loadname();
    }, []);

    // Assigning json object value to varibales
    useEffect(() => {
        
            games && games.filter((game) => game.gamename === 'GTA-V').map((game) => (
                <div className="game-details" key={game.id}>
                    {setgamename(game.gamename)}
                    {setDescription(game.Description)}
                    {setprice(game.price)}
                    {setgamelink(game.Gamelink)}
                    {setTotallikes(game.Totallikes)}
                    {setmincpu(game.requirements.mincpu)}
                    {setmingpu(game.requirements.mingpu)}
                    {setminram(game.requirements.minram)}
                    {setreccpu(game.requirements.reccpu)}
                    {setrecgpu(game.requirements.recgpu)}
                    {setrecram(game.requirements.recram)}
                </div>
            ))
        
    })
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className="mai-cont">
            <div className="gameimage">
            <a href={gamelink} className="download" target="_blank" rel="noreferrer">Download now</a>
                <img src={cardimage} className="image" alt="Gta5" />
                <h3 className="likes">
                <i className="fas fa-heart" id="heart"></i>
                    {Totallikes}
                <i class="fas fa-heart-broken" id="disheart"></i>43</h3>
            </div>

            {/* Game introduction */}
            <div className="intro">
                <h1 className="name">{gamename}</h1>
                <p className="description">{Description}</p>
                
                <h5 className="gameprice">{price}</h5>
               
                <hr />
                <div className="requirement">
                    <ul className="minreq">
                        <h2>Minimum Requirements</h2>
                        <li>Proccesor : {mincpu}</li>
                        <li>GPU : {mingpu}</li>
                        <li>RAM : {minram}</li>
                    </ul>
                    <ul className="recreq">
                        <h2>Recommended Requirements</h2>
                        <li>Proccesor :  {reccpu}</li>
                        <li>GPU : {recgpu}</li>
                        <li>RAM : {recram}</li>
                    </ul>

                </div>

                {/* Link for checking game requirements */}
                <div className="checkclick">
                    <Link className="check" to="/labpage">Can i run it?</Link>
                </div>
            </div>
        </div>
    )
}

export default GtaV