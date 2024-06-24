// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";
 import { useNavigate } from "react-router-dom";

const AddRestaurant = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/restaurant/add", {
        name,
        location,
        imageUrl,
      })
      .then((res) => {
        if (res.data.added) {
          navigate("/restaurants");
        }
        else{
            console.log(res)
        }
      })
      .catch((err) => console.log(err));
  };

  //   if (isRegistered) {
  //     return <Navigate to="/dashboard" />;
  //   }

  return (
    <div className="owner-form-container">
      <form className="owner-form" onSubmit={handleSubmit}>
        <h2>Add Restaurant</h2>
        <div className="form-group">
          <label htmlFor="restaurant">Restaurant Name:</label>
          <input
            type="text"
            id="restaurant"
            name="restaurant"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="image"
            name="image"
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddRestaurant;
