import React from 'react'

import  { useEffect } from "react";
import '../styles/dashboard.css';
import {FiSearch} from 'react-icons/fi';
import {RxCross2} from 'react-icons/rx';
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {IoIosNotificationsOutline} from 'react-icons/io';
import {AiOutlinePlus} from 'react-icons/ai';
import {TfiWorld} from 'react-icons/tfi';
import {TfiMapAlt}from 'react-icons/tfi'
import {AiOutlineBarChart}from'react-icons/ai'
import {IoIosChatboxes} from 'react-icons/io'
import{CiHeart}from 'react-icons/ci'
import { Fade } from 'react-awesome-reveal';
import {Chat} from '../pages/sub_pages/chat'
 export const Dashboard_1 = () => {
  return (
    <div>

<div style={{height:"250vh",width:"100%" , background:' #F5F7FB' }}>
<Fade left>
 
 <div id="stati-image3"></div>

 </Fade> 
               <div id="dash-dv" >
                      <div><h4>Active Listings</h4>
                       <p style={{color:"#3270FC", fontSize:20, fontWeight:600}}>125</p></div> 

                       <div> <TfiMapAlt className="dash-dv-icons"/>   </div>
                   </div>
              

                   <div id="dash-dv" >
                      <div><h4>Listing Views</h4>
                       <p style={{color:"#3270FC", fontSize:20, fontWeight:600}}>1056</p></div> 

                       <div> <AiOutlineBarChart className="dash-dv-icons"/>   </div>
                   </div>

                   <div id="dash-dv" >
                      <div><h4>Your  Views</h4>
                       <p style={{color:"#3270FC", fontSize:20, fontWeight:600}}>357</p></div> 

                       <div> <IoIosChatboxes className="dash-dv-icons"/>   </div>
                   </div>

                   <div id="dash-dv" >
                      <div><h4>Times Bookmarked</h4>
                       <p style={{color:"#3270FC", fontSize:20, fontWeight:600}}>2329</p></div> 

                       <div> <CiHeart className="dash-dv-icons"/>   </div>
                   </div>

                   
           
                     <div id="stati-image-1">
                     </div>
      <div id="stati-imag">
      <div id="stati-ima">
                       <div id="stati-image2">
                       
                       </div>
                     <div id="stati-image">
                      < Chat />
                     </div>
                     </div>

                      <div id="stati-image1">
                       
                     </div>

                     <div id="stati-image5">
                       
                       </div>

                       {/* <div id="stati-image6">
                       
                       </div> */}
                     </div>
      
                     <div id="stati-image6">
                       
                       </div>
                     
           </div>
      
    </div>
  )
}


