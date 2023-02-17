import React, { useState } from 'react';
import {AiOutlinePlus} from 'react-icons/ai'
import '../styles/dashboard.css'
export  function CarSelect() {
  const [selectedCar, setSelectedCar] = useState("volvo");

  const handleCarChange = (event) => {
    setSelectedCar(event.target.value);
  }

  return (
    <div>
      <label id="label">Sort by:</label>
      <select id="cars" value={selectedCar} onChange={handleCarChange}>
        <option value="volvo">latest</option>
        <option value="saab">Oldes</option>
        <option value="opel">Average rattings</option>
        <option value="audi">Name:A-Z</option>
      </select>

      <div id="top-navigation-addbox-2">
                    <div id="add-listing-button">
                        <div id="add-sign">
                            <AiOutlinePlus/>
                        </div>
                        <div>Add More Listings</div>
                    </div>
                </div>

    </div>
  );
}

 





