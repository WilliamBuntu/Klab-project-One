import React from "react";
import '../styles/listng';
import {IoLocationSharp} from 'react-icons/io5';
import {BsFillStarFill} from 'react-icons/bs';
import {BsFillEyeFill} from 'react-icons/bs';
import { NavLink } from "react-router-dom";

export const Listing = () => {
    return(
        <div id="listing-card">
            <div id="listing-card-image" onMouseOver={()=>{
                document.getElementById("view-popup").style.display = "flex";
            }} onMouseOut={()=>{
                document.getElementById("view-popup").style.display = "none";
            }}>
                <div id="view-popup">
                    <NavLink to={"listing-details"}>
                        <div id="view-listing-details">VIEW</div>
                    </NavLink>
                </div>
            </div>
            <div id="listing-card-desc">
                <div id="listing-card-title">
                    Gourgeous House For Sale
                </div>
                <div id="listing-card-address">
                    <IoLocationSharp style={{color:"#3270FC"}}/>
                    70 Bright St New York, USA


                </div>
                <div id="listing-card-rating">
                    <BsFillStarFill className="verified"/>
                    <BsFillStarFill className="verified"/>
                    <BsFillStarFill className="verified"/>
                    <BsFillStarFill className="verified"/>
                    <BsFillStarFill/>
                </div>
                <div id="listing-card-viewership">
                    <BsFillEyeFill style={{marginRight:5,color:"#3270FC"}}/>
                    <span>Viewed - 645</span>
                </div>
            </div>
        </div>
    )
}