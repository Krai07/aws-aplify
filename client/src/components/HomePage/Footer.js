import React from 'react';
import { Button } from './Button';
import './Footer.css';
import $ from 'jquery'
function Footer() {
  
     
     
      const showdata=()=>{
            $(".title1").mouseover(function(){
                $("#k").show();
                setTimeout(() => {
                    $("#k").hide();
                }, 1000);
                $("#a").hide();
                $("#v").hide()
            });
           
                
               
               
               
      }
      const showdata1=()=>{
        $("#at").mouseover(function(){
            $("#a").show();
            setTimeout(() => {
                $("#a").hide();
            }, 1000);
            $("#v").hide();
            $("#k").hide()
        })  
  }
  const showdata2=()=>{
    $("#vc").mouseover(function(){
        $("#v").show();
        setTimeout(() => {
            $("#v").hide();
        }, 1000);
        $("#a").hide();
        $("#k").hide()
    })  
}
 
    return (
        <div className='footer-container'>
            
            <section className="icon">
                <p>
                    Collaborate with us!!!
                </p>
            <a href="https://github.com/Tripathiaman2511/KAV-GameLab" rel="noreferrer" target="_blank"><i className="fab fa-github-alt"></i></a>
            </section>

            <span className="block"></span>

            <section className="footer-subscription">
              <p className="footer-subscription-heading">
                  FOR ANY QUERY CONTACT US...
              </p>
               <div className="input-areas">
                   <form>
                       <input type="email" name="email" placeholder="Your Email" className="footer-input"/>
                       <Button buttonStyle='btn--outline'>Subscribe</Button>
                   </form>
               </div>
            </section>

            <span className="block"></span>

            <section className="icon2">
                    <div className="title1">
                        <p id="kr" onMouseOver={showdata} className="capital" style={{cursor:"pointer",marginRight:"50px",padding:"10px"}}>K</p>  
                        <p  id="k" className="evaluate" style={{ display:"none", position:"absolute",marginLeft:"-30px"}} ><a href="">KSHITIJ RAI</a> </p>
                    </div>
                    <div className="title2">
                        <p id="at" onMouseOver={showdata1} className="capital" style={{marginRight:"50px",padding:"10px"}}>A</p> 
                        <p id="a" className="evaluate" style={{display:"none",position:"absolute" ,marginLeft:"-40px"}}><a href="">AMAN TRIPATHI</a></p>
                    </div>
                    <div className="title3">
                        <p id="vc" onMouseOver={showdata2} className="capital" style={{padding:"10px"}}>V</p>  
                        <p id="v" className="evaluate" style={{display:"none",position:"absolute",marginLeft:"-70px"}}><a href="">VIJESH CHAUDHARI</a></p>
                    </div> 
            </section>
           
        </div>
    )
}

export default Footer;
