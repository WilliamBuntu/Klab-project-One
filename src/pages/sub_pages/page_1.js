import React, { Component } from "react";
import ListingCards from "./page_cards";
import UpdateListings from "./form";
import Fade from "react-awesome-reveal";
import axios from "axios";
import { useState, useEffect } from "react";
import './page_1.css'
import { deleteSlice } from "../../features/delete/deleteSlice";
import { useSelector } from "react-redux";

export  const MyListings = () => {
  const {deleted} = useSelector((state)=>state.delete)
  const [blogs, setBlogs] = useState([]);
  console.log(blogs, "blogs");
  useEffect(() => {
    fetchData();
  }, [deleted]);
  const fetchData = () => {
    axios({
      method: "GET",
      url: "https://tresor.onrender.com/api/estates/getAll",
    })
      .then((response) => {
        console.log(response);
        setBlogs(response.data);
      }).then((response)=>{response.json()})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div style={
      {width:100}
    } >
      {/* <Fade right> */}
        <UpdateListings />
      {/* </Fade> */}
      <div className="listingCardsContainer">
       
          <ListingCards
            image="https://homeradar.kwst.net/images/all/3.jpg"
            paragraph="mudugudu House For Rent"
            address="70 Bright St New York , USA "
            views={645}
          />
       
          <ListingCards
            image="https://homeradar.kwst.net/images/all/1.jpg"
            paragraph="Taba Point House"
            address="40 Journal Square , Nj , USA"
            views={56}
          />
    
         {
          blogs?.map((item)=>{
            return (
              
              <ListingCards
              
            image={item.images[0]}
            paragraph={item.description}
            address="70 Bright St New York , USA "
            views={item.price}
            id={item._id}
          />
            )
          })
          
        } 
      </div>
    </div>
  );
};


