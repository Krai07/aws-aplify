import React,{useState,useEffect} from 'react'
import './Style.css'
import axios from 'axios';
import { NavLink } from 'react-router-dom';


const Defined=()=>{

/* left side */
const [names, setNames] = useState([]);
const [text,setText]=useState('');
const [suggestions, setSuggestions] = useState([]);
const[ram,setRam] = useState('');
const[os,setOS] = useState('');
const[GC,setGC] = useState('');
const[cpu,setCPU] = useState('');

/* right side */
const [userOS, setUserOS] = useState([]);
const [usertext1, setUsertext1] = useState('');

const [userCPU, setUserCPU] = useState([]);
const [usertext2, setUsertext2] = useState('');

const [userRAM, setUserRAM] = useState([]);
const [usertext3, setUsertext3] = useState('');

const [userGPU, setUserGPU] = useState([]);
const [usertext4, setUsertext4] = useState('');
var input={
    text,
    'system':{
        
        ram,
        os,
        GC,
        cpu
    },
    'user':{
        usertext1,
        usertext2,
        usertext3,
        usertext4
    }

}




/* *********************************************************************************************************************************************** */
useEffect(() => {
   const loadName=async()=>{
       const response =await axios.get('http://localhost:8000/game')
       setNames(response.data)  
    }
    const loadOS=async()=>{
        const response =await axios.get('http://localhost:8000/OS')
        setUserOS(response.data)
        
    }
    const loadCPU=async()=>{
        const response =await axios.get('http://localhost:8000/CPU')
        setUserCPU(response.data)  
    }
    const loadRAM=async()=>{
        const response =await axios.get('http://localhost:8000/RAM')
        setUserRAM(response.data)  
    }
    const loadGC=async()=>{
        const response =await axios.get('http://localhost:8000/GPU')
        setUserGPU(response.data)  
    }  
    
   loadName();
   loadOS();
   loadCPU();
   loadRAM();
   loadGC();
  
   
}, [])
/* extracting index of searched name */
const indexof=names.findIndex((name,index)=>{  
    return name.Name===text 
     })

const indexos=userOS.findIndex((osvalue,index)=>{
    return osvalue.name===usertext1
})
const indexram=userRAM.findIndex((ramvalue,index)=>{
    return ramvalue.name===usertext3
})
const indexcpu=userCPU.findIndex((cpuvalue,index)=>{
    return cpuvalue.name===usertext2
})
const indexGC=userGPU.findIndex((GCvalue,index)=>{
    return GCvalue.name===usertext4
})
     
/* Search data after entering text  */
const onChaneHandler =(text)=>{
    let matches=[]
    if(text.length>0){
        var letterNumber = /^[0-9a-zA-Z]+$/;
        if(text.match(letterNumber)){
            matches=names.filter(name=>{
                const regex=new RegExp(`${text}`,"gi");
                return name.Name.match(regex)
            })
        } 
    }

    /* suggestion list will be feild with matches  */
    setSuggestions(matches)
    setText(text)
}

const onSuggestHandler=(text)=>{
    setText(text);
    setSuggestions([]);   
}

const onpoplateHandler=()=>{
    if(text){
        setCPU(names[indexof].Specs.CPU[0].name);
        setOS(names[indexof].Specs.OS[0].name);
        setRam(names[indexof].Specs.RAM[0].name);
        setGC(names[indexof].Specs.GraphicCard[0].name)
    }    
}

const clear=()=>{
    setText('');
    setSuggestions([]);
    setCPU('');
    setGC('');
    setOS('');
    setRam('');    
}


/* *************************************************************************************************************************************8 */



const addValue=()=>{
    const[cpuscore, ramscore, GCscore, osscore]=[names[indexof].Specs.CPU[0].Score, names[indexof].Specs.RAM[0].Score, names[indexof].Specs.GraphicCard[0].Score, names[indexof].Specs.OS[0].Score]
    const [usercpuscore, userramscore, userGCscore, userosscore]=[userCPU[indexcpu].Score , userRAM[indexram].Score, userGPU[indexGC].Score, userOS[indexos].Score]
    
    var resultChecker={
        'system':{
            os,
            ram,
            cpu,
            GC
        },
        'user':{
            usertext1,
            usertext2,
            usertext3,
            usertext4
        }
    }
    var score={
        'system':{
           cpuscore,
           ramscore,
           GCscore,
           osscore
        },
        'user':{
            usercpuscore, 
            userramscore, 
            userGCscore, 
            userosscore
        }
    }
   
    sessionStorage.setItem("valuetobeChecked",JSON.stringify(resultChecker))
    sessionStorage.setItem("valuetoget",JSON.stringify(score))
    console.log(resultChecker)
    console.log(score)
}




    return(
        <><div className="containF">
       <div className="containD">
           <div className="left-handle">
               <h4>MINIMUM REQUIREMENT</h4>
               <div className="inputget">
                   
                   <div className="searchid">
                        <input type="text"  className="searchdata" placeholder="Enter the game name" onChange={e=>onChaneHandler(e.target.value)} value={text}  />
                        <button className="searchbu" onClick={onpoplateHandler} >Search</button>
                        <button className="clearbu"onClick={clear}>Clear</button>
                        <div className="position-absolute">
                            {suggestions && suggestions.map((suggestion,i)=>
                        <div className="dataSeto" key={i} onClick={()=>onSuggestHandler(suggestion.Name)}>{suggestion.Name}</div>                                
                        )}
                        </div>
                       
                        
                   </div>
                   
                   <div className="inputo">
                        <input className="read-only-section" type="text" id="os"  value={os} placeholder="Operating System" readOnly />
                        <input className="read-only-section" type="text" id="cpu" value={cpu} placeholder="Processor" readOnly />
                        <input className="read-only-section" type="text" id="ram" value={ram} placeholder="RAM" readOnly />
                        <input className="read-only-section" type="text" id="gc" value={GC} placeholder="Graphic Card" readOnly />
                   </div>
                  
               </div>
           </div>

           <div className="right-handle">
            <h4>YOUR PREFERENCE</h4>
            
            <div className="input-area-right">
            <div className="userOS">
                    <select  id="select0" className="select" onChange={(e)=>{setUsertext1(e.target.value)}}>
                    {userOS.map((data1,i)=><option key={i} className="option">{data1.name}</option>)}
                    </select>
            </div>
            
             <div className="userCPU">
                    <select  id="select1" className="select" onChange={(e)=>{setUsertext2(e.target.value)}}>
                    {userCPU.map((data2,i)=><option key={i} className="option">{data2.name}</option>)}
                    </select>
                   
            </div>
            
            <div className="userRAM">
                    <select  id="select2" className="select" onChange={(e)=>{setUsertext3(e.target.value)}}>
                    {userRAM.map((data3,i)=><option key={i} className="option">{data3.name}</option>)}
                    </select>
            </div>
            <div className="userGC">
                    <select  id="select3" className="select" onChange={(e)=>{setUsertext4(e.target.value)}}>
                    {userGPU.map((data4,i)=><option key={i} className="option">{data4.name}</option>)}
                    </select>
            </div>
            
            </div>
           </div>
          
       </div>
       <div className="next-go">
       <NavLink className="linkto"  to="/labpage/Result"  onClick={addValue}>check ability</NavLink>
       </div>
       </div>
       
        </>
    );
}
export default Defined;