import React from 'react'
import '../styles/dashboard.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {ListingCards} from './ListingCards'
import{UpdateListings} from './UpdateListings'
import {CarSelect} from './drop'
import{AiOutlineSearch} from 'react-icons/ai'
import{AiOutlinePlus} from 'react-icons/ai'
import {MyListings} from '../pages/sub_pages/page_1'


export const Dashboard_2 = () => {
  return (
    <div   style={{height:"200vh",width:"100%" , background:' #F5F7FB'}}>


{/* 

    
    <div id='listingsGrid' >
<div id='listingsImage'>
  <img src='https://homeradar.kwst.net/images/all/3.jpg
'  style={{        height:"200px"
}} />
</div>

<div id='listingsDesc'>

<div className='descriptionGrid'>
<div>
  <h1>Gougeouse House</h1>
</div>
<div>
  <p> location </p>
</div>
<div>
  <span> star</span>
  <span> star</span>
  <span> star</span>
</div>



</div>



</div>


    </div>
     */}



<div  >
    <MyListings  />
    </div>


      
    </div>
  )
}

 
