import React,{useEffect} from 'react'
import HeroSection from './HeroSection';
import{ BrowserRouter as Router,Switch ,Route} from 'react-router-dom';
import Cards from './Cards';
import './Home.css'

import Gamepage from '../GamePageloader/game page/Gamepage';

const Home=()=>{
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    return(
<>
<Router>
  <Switch>
  <Route exact path="/Home" >
        <HeroSection/>
        <Cards/>
        </Route>
        <Route exact path="/game" component ={Gamepage}/>
            
      
      </Switch>  
       
        
</Router>
     
</>
    )
}
export default Home