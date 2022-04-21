import React from 'react';
import CardItems from './CardItems';
import './Cards.css';
import valo from '../../images/valo.jpg'
import MineCraft from '../../images/minecraft.jpeg'
import gta from '../../images/gta.jpg'
import codw from '../../images/codw.jpg'
import battlefield5 from '../../images/battlefield5.jpg'
import RE7 from '../../images/RE7.jpg'
import AL1 from '../../images/AL1.jpg'
import rdr2 from '../../images/rdr2.jpg'
import Fortnite from '../../images/fortnite.jpg'

function Cards() {
    return (
  <div id="section1" className='cards'>
      <h1>Top Trending Games</h1>
      <div className='cards__container'>
          <div className='cards__wrapper'>
              <ul className='cards__items'>
                  <CardItems 
                    src={valo}
                    text='Riot Games presents VALORANT: a 5v5 character-based tactical FPS where precise gunplay meets unique agent abilities' 
                    label='VALORANT'
                    path='/game'                
                  />
                  <CardItems 
                    src={MineCraft}
                    text='Prepare for an adventure of limitless possibilities as you build, mine, battle mobs, and explore the ever-changing Minecraft landscape.' 
                    label='MINECRAFT'
                    path='/game'                
                  />
                  <CardItems
                    src={codw}
                    text='Call of Duty: Warzone is a free-to-play battle royale video game ' 
                    label='COD-WARZONE'
                    path='/game'                
                  />
              </ul>
              <ul className='cards__items'>
                  <CardItems 
                    src={gta}
                    text=' Grand Theft Auto V is an action-adventure game. Players complete missions linear scenarios with set objectives to progress through the story.' 
                    label='GTA-5'
                    path='/game'                
                  />
                  <CardItems 
                    src={RE7}
                    text='Resident Evil 7 biohazard is the next major entry in the renowned Resident Evil series  and opens the door to a truly terrifying horror experience ' 
                    label='RESIDENT EVIL 7: BIOHAZARD'
                    path='/game'                
                  />
                   <CardItems
                    src={AL1}
                    text='Apex Legends is a free-to-play hero shooter game where legendary competitors battle for glory, fame, and fortune on the fringes of the Frontier. ' 
                    label='APEX LEGEND'
                    path='/game'                
                  />
              </ul>
              <ul className='cards__items'>
                  <CardItems 
                    src={battlefield5}
                    text=' Battlefield 5 is the concept of the squad, a small group of players that can cooperate and coordinate together to achieve goals in-game' 
                    label='BATTLEFIELD 5'
                    path='/game'                
                  />
                  <CardItems 
                    src={rdr2}
                    text='Red Dead Redemption 2 is a western-themed action-adventure video game' 
                    label='RED DEAD REDEMPTION 2'
                    path='/game'                
                  />
                  <CardItems
                    src={Fortnite}
                    text='Fortnite is a free-to-play Battle Royale game with numerous game modes for every type of game player. Watch a concert, build an island or fight. ' 
                    label='FORTNITE'
                    path='/game'                
                  />
              </ul>
          </div>
      </div>
  </div>
    )
}

export default Cards;