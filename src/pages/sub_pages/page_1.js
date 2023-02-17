import React, { Component } from "react";
import ListingCards from "./page_cards";
import UpdateListings from "./form";
import Fade from "react-awesome-reveal";
import axios from "axios";
import { useState, useEffect } from "react";
import './page_1.css'

export  const MyListings = () => {
  const [blogs, setBlogs] = useState([]);
  console.log(blogs, "blogs");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    axios({
      method: "GET",
      url: "https://klabapi.onrender.com/api/posts",
    })
      .then((response) => {
        
        setBlogs(response.data);
      })
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
        {/* <Fade left> */}
          <ListingCards
            image="https://homeradar.kwst.net/images/all/3.jpg"
            paragraph="mudugudu House For Rent"
            address="70 Bright St New York , USA "
            views={645}
          />
        {/* </Fade> */}
        {/* <Fade left> */}
          <ListingCards
            image="https://homeradar.kwst.net/images/all/1.jpg"
            paragraph="Taba Point House"
            address="40 Journal Square , Nj , USA"
            views={56}
          />
        {/* </Fade> */}
        {/* <Fade left> */}
          <ListingCards
            image="https://homeradar.kwst.net/images/all/10.jpg"
            paragraph="Queens Family Home"
            address="44-32 Montgomery St ,  NY , USA"
            views={300}
          />
        {/* </Fade> */}
        {/* <Fade left> */}
          <ListingCards
            image="https://homeradar.kwst.net/images/all/6.jpg"
            paragraph="Contemporary Apartment"
            address="75 Prince St ,  NY , USA"
            views={500}
          />
        {/* </Fade> */}
        {/* <Fade left> */}
          <ListingCards
            image="https://homeradar.kwst.net/images/all/2.jpg"
            paragraph="Urban House"
            address="70 Bright St , Jersy City , NJ USA"
            views={600}
          />
        {/* </Fade> */}
        {/* <Fade left> */}
          <ListingCards
            image="https://homeradar.kwst.net/images/all/9.jpg"
            paragraph="Gorgeous House For Sale"
            address="70 Bright St New York , USA "
            views={120}
          />
        {/* </Fade> */}
        {/* {
          blogs?.map((item)=>{
            return (
          <ListingCards
            image="https://homeradar.kwst.net/images/all/9.jpg"
            paragraph={item.description}
            address="70 Bright St New York , USA "
            views={120}
          />
            )
          })
        } */}
      </div>
    </div>
  );
};


