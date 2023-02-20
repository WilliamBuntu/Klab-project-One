import React, { useEffect , useState} from "react";
import '../styles/dashboard.css';
import {FiSearch} from 'react-icons/fi';
import {RxCross2} from 'react-icons/rx';
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {IoIosNotificationsOutline} from 'react-icons/io';
import {AiOutlinePlus} from 'react-icons/ai';
import {TfiWorld} from 'react-icons/tfi';
import {TfiMapAlt}from 'react-icons/tfi'
import {AiOutlineBarChart}from'react-icons/ai'
import {FaChartLine}from'react-icons/fa'
import {FaUserEdit} from 'react-icons/fa'
import {IoIosChatboxes} from 'react-icons/io'
import {SlEnvolope} from 'react-icons/sl'
import {FaUsers} from 'react-icons/fa'
import {Dashboard_1} from '../pages/dashboard_1'
import {AiFillFileAdd} from 'react-icons/ai'
import {FaThList} from 'react-icons/fa'
import { Navigate } from "react-router-dom";
import { Dashboard_2 } from "./dashboard_2";

// import {ChartComponent} from'./pages/chart'
// import Chart from 'chart.js';
//import 'bootstrap/dist/css/bootstrap.min.css';
export const Dashboard = ()=>{
    const navigate = useNavigate();
    useEffect(()=>{
        navigate("/dashboard/news")
    },[])


    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
      // Perform login logic here, for example using API calls
      setIsClicked(true);
    };
  
    if (isClicked) {
      return <Navigate to="/dashboard/addBlogs" />;
    }
    return (
        <div id="dashboard">
            <div id="dashboard-top-navigation">
                <div id="logo">
                    HomeRador
                </div>
                <div id="search-options">
                    <button id="search-hider" onClick={()=>{
                        document.getElementById("search-opener").style.display = "flex";
                        document.getElementById("search-hider").style.display = "none";
                        document.getElementById("search-options").style.padding = "10px 20px";
                        document.getElementById("search-options").style.borderRadius = "60px";
                    }}>
                        <RxCross2 style={{color:"#3270FC"}}/>
                    </button>
                    <button id="search-opener" onClick={()=>{
                        document.getElementById("search-opener").style.display = "none";
                        document.getElementById("search-hider").style.display = "flex";
                        document.getElementById("search-options").style.padding = "10px 8px";
                        document.getElementById("search-options").style.borderRadius = "50%";
                    }}>
                        <FiSearch style={{color:"#3270FC",fontSize: 13}}/> Search...
                    </button>
                </div>
                <div id="top-navlinks">
                    <NavLink to="/dashboard/OurPropertides">Home</NavLink>
                    <NavLink to="/dashboard/mlsSearch">Listings</NavLink>
                    <NavLink to="/dashboard/communities">Agents</NavLink>
                    <NavLink to="/dashboard/news">News</NavLink>
                    <NavLink to="/dashboard/services">Pages</NavLink>
                    <NavLink to="/dashboard/about">Sign In</NavLink>
                </div>
                <div id="top-navigation-boxes">
                    <div className="top-navigation-boxes"><div id="account-image"></div></div>            
                    <div className="top-navigation-boxes">
                        <IoIosNotificationsOutline/>    
                    </div>            
                    <div className="top-navigation-boxes" style={{borderRight: "1px solid rgba(128, 128, 128, 0.473)"}}><TfiWorld/></div> 
                </div>         
                <div id="top-navigation-addbox">
                    <div id="add-listing-button">
                        <div id="add-sign">
                            <AiOutlinePlus/>
                        </div>
                        <div  onClick={handleClick}>Add More Listings</div>
                    </div>
                </div>
            </div>
            <div id="dashboard-left-navigation">
            <div id="dash-board">
            <p style={{paddingLeft:20, fontFamily:"san-serf" , marginTop:70 }}> Main </p>
                <NavLink to={"/dashboard/Dashboard_1"}>
                <div  className="sub-name"> <FaChartLine className="sub-icon" /> Dashboard</div>
                </NavLink>
                <div  className="sub-name"   onClick={()=>{
                    navigate('/dashboard/news')
                }}> <FaUserEdit  className="sub-icon"/> Edit profile</div>

<NavLink to={"/dashboard/homepage"}>
                <div   className="sub-name"> <SlEnvolope  className="sub-icon"/> Masseges</div >
                </NavLink>

                <NavLink to={"/dashboard/homepage"}>
                <div  className="sub-name"> <FaUsers className="sub-icon" />Agents List</div>
                </NavLink>
                <NavLink to={"/dashboard/homepage"}>
                <div className="sub-name" > < AiOutlinePlus className="sub-icon"/> Subname</div>
                </NavLink>
                <p style={{paddingLeft:20, fontFamily:"san-serf"  }}> LISTINGS </p>

                <NavLink to={"/dashboard/Dashboard_2"}>
                <div className="sub-name" > < FaThList className="sub-icon"/> My listings</div>
                </NavLink>
                <NavLink to={"/dashboard/addBlogs"}>
                <div className="sub-name" > < AiFillFileAdd className="sub-icon"/> Add New</div>
                </NavLink>
                              
            </div>

            </div>
            <div  style={{marginLeft:"25%" , background:' #F5F7FB' , paddingTop:40 , }}>
            <Outlet/>
            </div>
        </div>
    )
}