import React, { Component } from "react";
import './Searchbar.css';
import { Link } from 'react-router-dom';

class Searchbar extends Component {
    render() {
        return (
            <div id="searchbar-cont">

                {/* Searching of games, taken game name from user input */}
                {/* <section id="searchbar">
                    <form action="">
                        <input type="text" className="search" placeholder="Enter Game name" />
                        <button className="search">Search</button>
                    </form>
                </section> */}

                {/* Game categories  */}
                <div className="category">
                    <ul>
                        <Link to="">
                            <li>Sandbox</li>
                        </Link>
                        <Link to="">
                            <li>Platformer</li>
                        </Link>
                        <Link to="">
                            <li>Shooters (FPS and TPS)</li>
                        </Link>
                        <Link to="">
                            <li>Survival and horror</li>
                        </Link>
                        <Link to="">
                            <li>Action-adventure</li>
                        </Link>

                        <Link to="">
                            <li>Simulation and sports</li>
                        </Link>
                        <Link to="">
                            <li>Puzzlers and party games</li>
                        </Link>
                        <Link to="">
                            <li>Real-time strategy (RTS)</li>
                        </Link>
                        <Link to="">
                            <li>Multiplayer online battle arena (MOBA)</li>
                        </Link>
                        <Link to="">
                            <li>Role-playing (RPG, ARPG, and More)</li>
                        </Link>
                    </ul>
                </div>
            </div>
        )
    }

}

export default Searchbar;