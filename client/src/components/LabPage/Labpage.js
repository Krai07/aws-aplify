import React from 'react'
import Result from './Result/Result';
import Defined from './Userdata/DefinedData/Defined';

import{ BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import './LabStyle.css';
const Labpage=()=>{
    return(
<>
<Router>
    
        <Switch>

            <Route exact path="/labpage" ><Defined/> </Route >
            <Route exact path="/labpage/Result"><Result/> </Route >
        </Switch>
    
</Router>
     
</>
    )
}
export default Labpage
