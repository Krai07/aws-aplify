import React from "react";
import cardimage from '../../../game page/Card-images/valorant-point.jpg';
import './Gamedetails.css';
import { useEffect, useState } from "react";
import axios from 'axios';
import { NavLink } from "react-router-dom";

const Valorant = () => {

    const [games, setgames] = useState();
    const [gamename, setgamename] = useState();
    const [Description, setDescription] = useState();
    const [price, setprice] = useState();
    const [gamelink, setgamelink] = useState();
    const [Totallikes, setTotallikes] = useState();
    const [mincpu, setmincpu] = useState()
    const [mingpu, setmingpu] = useState();
    const [minram, setminram] = useState();
    const [reccpu, setreccpu] = useState();
    const [recgpu, setrecgpu] = useState();
    const [recram, setrecram] = useState();

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
        
            games && games.filter((game) => game.gamename === 'Valorant').map((game) => (
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
            <a href={gamelink} className="download" target="_blank" rel="noreferrer">DOWNLOAD</a>
                <img src={cardimage} className="image" alt="valorant" />
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
                
             <hr/>

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
                    <NavLink className="check" to="/labpage">Can i run it?</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Valorant