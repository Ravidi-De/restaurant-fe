// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
 import { useNavigate, useParams } from "react-router-dom";

const EditRestaurant = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();
  const {id} = useParams()

  useEffect(() => {
    axios.get("http://localhost:3001/restaurant/restaurant/"+id)
      .then(res => {
        setName(res.data.name)
        setLocation(res.data.location)
        setImageUrl(res.data.imageUrl)
        
      })
      .catch((err) => console.log(err))




  },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3001/restaurant/restaurant/"+id, {
        name,
        location,
        imageUrl,
      })
      .then((res) => {
        if (res.data.updated) {
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
        <h2>Edit Restaurant</h2>
        <div className="form-group">
          <label htmlFor="restaurant">Restaurant Name:</label>
          <input
            type="text"
            id="restaurant"
            name="restaurant"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="image"
            name="image"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditRestaurant;
