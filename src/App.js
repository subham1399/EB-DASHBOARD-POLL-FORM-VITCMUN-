import React, { Component } from 'react';

import './App.css';
import {Button , Form , FormGroup , Label , Input} from 'reactstrap';


class App extends Component {
  
  render() {
    return (
      
      <div class="resolution">
         <style>{'body { background-color: #511926; }'}</style>
         
         <div className="App">
       <div >
         <br/>
       <img style={{width:"150px" , marginRight:"950px",marginTop:"-20px"}} src= "mun.png"/>
             <h4 style={{color:"#F6DBA6" ,fontSize:"32px", marginLeft:"40px",fontFamily:"Nunito" , marginTop:"-98px"}}><b>EXECUTIVE BOARD'S DASHBOARD</b></h4><br/>
             
  


             <div class="div1" style={{fontFamily:"Nunito" , color:"#F6DBA6" , fontSize:"32px"}}><b>UNHRC</b><br/><div style={{color:"#34434A", fontSize:"24px"}}><b>Countries</b></div>
             
             </div><br/>
             <div id="btn2">
             <div id="menuBall1" class="menuBall" style={{marginRight:"-827px",position:"relative",marginTop:"-10px", width:"150px",height:"130px"}}>
  <a href="#" class="ball blueball" style={{marginRight:"260px"}}>
    <div class="menuText" style={{marginLeft:"-5px",color:"#000000", fontSize:"18px",marginTop:"-25px",marginRight:"-4px"}}>
       <b> SELECT COUNTRIES TO BROADCAST</b>
    </div>
  </a>
</div>
</div>
            <Form className="Appp">
              <h1>
              
                <span className="font-weight-bold" style={{fontSize:"24px"}}>POLL FORM</span>
              </h1><br/>
              <FormGroup>
                <label style={{marginRight:"280px",marginTop:"-5px",display:"flex"}}><b>Agenda</b></label>

                <div class="input">
                  <form >
                <input type="text"  name="FirstName" class="no-outline"  /></form>
                </div>
                <br/>
                <label style={{marginRight:"400px"}}><b>Type</b></label><br/>
                <div class="input">
                <form >
                <input type="text"  name="FirstName" class="no-outline"  /></form>
                
                </div>
                <br/>
                <br/>
               < div class="tst">
                <label style={{marginRight:"285px"}}><b>Total Speaker Time</b></label><br/></div>
                <div class="input">
                <form >
                <input type="text"  name="FirstName" class="no-outline"  /></form>
                
                </div>
                <br/>
                <br/>
                <label style={{marginRight:"350px"}}><b>Description</b></label><br/>
                <div class="input">
                <form >
                <input type="text"  name="FirstName" class="no-outline"  /></form>
                </div>
                <br/>
                <br/>
                <label style={{marginRight:"355px"}}><b>Raised by</b></label><br/>
                <div class="input">
               
               <form >
                <input type="text"  name="FirstName" class="no-outline"  /></form>
              
                </div>
              <br/>
                <div class="imp">
                
		<input type="checkbox" id="checkbox-1-1" class="regular-checkbox" style={{marginRight:"200px",marginLeft:"-185px" ,marginTop:"0px",maxWidth:"1440px"}} />
    <div class="size" style={{marginTop:"-25px"}}>
    <label style={{marginRight:"266px",marginTop:"-2px",marginBottom:"20px" , position:"relative"}}><b>IMPORTANT</b></label></div>
    </div>

    
<div id="menuBall1" class="menuBall" style={{marginRight:"140px",marginTop:"-1px"}}>
  <a href="#" class="ball blueball" style={{marginRight:"200px"}}>
    <div class="menuText" style={{marginLeft:"-5px",color:"#000000"}}>
       <b> CREATE</b>
    </div>
  </a>
</div>
    
              </FormGroup>
              
             
            </Form>
            
          
            </div>
       
      </div>
    
     </div>
      
    );
  }
}

export default App;
