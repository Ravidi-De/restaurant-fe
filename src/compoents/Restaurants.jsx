// eslint-disable-next-line no-unused-vars
// import React, { useEffect } from "react";
// import axios from "axios";

// const Restaurants = () => {
//   const[restaurants,setRestaurants]= useState([])

//   useEffect(() => {
//   axios.get('http://localhost:3001/restaurant/restaurants')
//   .then(res =>{
//     setRestaurants(res.data)
//     console.log(res.data)
//   }).catch(err => console.log(err))

//   },[])

//   return (
//     <div className="restaurant-list">
//       {
//         restaurants.map(restaurant =>{
//           return <RestaurantCard key={restaurant.id} restaurant = {restaurant}></RestaurantCard>
//         })
//       }

//     </div>
//   )
// };
// export default Restaurants;


//edit 1
// eslint-disable-next-line no-unused-vars 
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import RestaurantCard from "./RestaurantCard";
// import "../css/Restaurant.css";

// const Restaurants = ({role}) => {
//   const [restaurants, setRestaurants] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:3001/restaurant/restaurants")
//       .then((res) => {
//         setRestaurants(res.data);
//         console.log(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div className="restaurant-list">
//       {restaurants.map((restaurant) => {
//         return <RestaurantCard key={restaurant.id} restaurant={restaurant} role={role} />;
//       })}
//     </div>
//   );
// };

// export default Restaurants;



//edit2
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import RestaurantCard from "./RestaurantCard";
import PropTypes from "prop-types";
import "../css/Restaurant.css";

const Restaurants = ({ role }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/restaurant/restaurants")
      .then((res) => {
        setRestaurants(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="restaurant-list">
      {restaurants.map((restaurant) => {
        return <RestaurantCard key={restaurant.id} restaurant={restaurant} role={role} />;
      })}
    </div>
  );
};

Restaurants.propTypes = {
  role: PropTypes.string.isRequired,
};

export default Restaurants;





 