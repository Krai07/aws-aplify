import React from'react';
import './App.css'

import Home from './components/HomePage/Home';
import{ BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Footer from './components/HomePage/Footer'
import Navbar from './components/Navbar/Navbar';
import Labpage from './components/LabPage/Labpage';
import Gamepage from './components/GamePageloader/game page/Gamepage';
import Result from './components/LabPage/Result/Result';


const App=()=>{
    return(<>
    <Router>
        <Navbar/>
    
        <Switch>
            <Route exact path="/Home" render={()=><Home/>}/>
            <Route exact path="/game"  render={()=><Gamepage/>}/>
            <Route exact path="/labpage"  render={()=><Labpage/>}/>
            
            <Route exact path="/labpage/Result"><Result/> </Route >
        </Switch>
        <Footer/>
    </Router>
   
       
      
    </>);
}

export default App;