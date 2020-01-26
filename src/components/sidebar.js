import React, { Component } from 'react';
import './pollform.css';
import {Button , Form , FormGroup , Label , Input} from 'reactstrap';

class Sidebar extends Component{
    render() {
    
        return (





<div class="container">
  <input data-function="swipe" id="swipe" type="checkbox"/>
  <label data-function="swipe" for="swipe"><span class="close"></span></label>
  <label data-function="swipe" for="swipe"><span class="hamburger"></span></label>
 
 
  <div class="sidebar"><br/><br/>
    <nav class="menu">
  
      <img class="img1"   src="black1.png" alt="MUN"/><br/>
      
      <li ><a href="#">Home</a></li>
      <li><a href="#">XYZ</a></li>


      <li><a href="#">XYZ</a></li>
      <li><a href="#">XYZ</a></li>
      <li><a href="#">XYZ</a></li>
      <li><a href="#">XYZ</a></li>
      
    </nav>
  </div>
  
</div>
    );
        }
    }
export default Sidebar;