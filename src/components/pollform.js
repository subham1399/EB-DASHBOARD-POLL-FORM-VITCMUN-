import React, { Component } from 'react';

import './pollform.css';
import {Button , Form , FormGroup , Label , Input} from 'reactstrap';

 class Pollform extends Component{
//class App extends Component {
  state={
    Agenda:"",
    Type:"",
    Total_Speaker_Time:"" ,
    Description:"",
    raised_by:"" 

  };//For updating all input fields
 
  handleChangeAgenda = event => {
   // console.log(event.target.value);
    this.setState({ Agenda: event.target.value});
    /*this.setState({ Type: event.target.value});
    this.setState({ Total_Speaker_Time: event.target.value});
    this.setState({ Description: event.target.value});
    this.setState({ raised_by: event.target.value});*/
  };

  handleChangeType = event => {
    this.setState({ Type: event.target.value});
  };

  handleChangeTST = event => {
    this.setState({ Total_Speaker_Time: event.target.value});
  };
  handleChangeDescription = event =>{
    this.setState({ Description: event.target.value});
  };
  handleChangeraisedby = event =>{
    this.setState({ raised_by: event.target.value});
  };


  render() {
    
    return (
    
     
      <div class="resolution">
      
         <style>{'body { background-color: #511926; }'}</style>



         <div className="App">
       <div >
         

      
  
 
 
  <div> <Sidebar/></div>
  


        
       <img class="img2"  src= "mun.png" alt="MUN"/>
             <h4 class="EB" ><b>EXECUTIVE BOARD'S DASHBOARD</b></h4><br/>
             
  


             <div class="div1" ><CountryFlags/><br/>
             
            
             
             </div><br/>
            
             <button class="button" id="join" ><b>SELECT COUNTRIES TO BROADCAST</b></button>
            <Form className="Appp">
              <h1>
              
                <span  className="font-weight-bold" style={{fontSize:"30px"}}>POLL FORM</span>
              </h1><br/>
              <FormGroup>
                <label style={{marginRight:"280px",marginTop:"-5px",display:"flex"}}><b>Agenda</b></label>

                <div class="input">
                  
                <input type="text" value={this.state.name} onChange={this.handleChangeAgenda} name="FirstName" class="no-outline"  />
                </div>
                <br/>
                <label style={{marginRight:"400px"}}><b>Type</b></label><br/>
                <div class="input">
                
                <input type="text" value={this.state.Type} onChange={this.handleChangeType}  name="FirstName" class="no-outline"  />
                </div>
                <br/>
                <br/>
               <div class="tst">
                <label style={{marginRight:"285px"}}><b>Total Speaker Time</b></label><br/></div>
                <div class="input">
                
                <input type="text" value={this.state.Total_Speaker_Time} onChange={this.handleChangeTST}  name="FirstName" class="no-outline"  />
                
                </div>
                <br/>
                <br/>
                <label style={{marginRight:"350px"}}><b>Description</b></label><br/>
                <div class="input">
                
                <input type="text" value={this.state.Description} onChange={this.handleChangeDescription} name="FirstName" class="no-outline"  />
                </div>
                <br/>
                <br/>
                <label style={{marginRight:"355px"}}><b>Raised by</b></label><br/>
                <div class="input">
               
               
                <input type="text" value={this.state.raised_by} onChange={this.handleChangeraisedby} name="FirstName" class="no-outline"  />
              
                </div>
              <br/>
                <div class="imp">
                
	</div>

    
<div id="menuBall1" class="menuBall" >
  <a href="#" class="ball blueball" >
    <div class="menuText" >
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
export default Pollform;
