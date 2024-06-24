// eslint-disable-next-line no-unused-vars
// import React from 'react'

// const RestaurantCard = ({restaurant}) => {
//     const{name,location,imageUrl} = restaurant;
//   return (
//     <div className='restaurant-card'>
//         <img src={imageUrl} alt={name} className='restaurant-image' />
//         <div className="restaurant-details">
//             <h3>{name}</h3>
//             <p>{location}</p>
//         </div>
//         <div className="restaurant-actions">
//             <button>edit</button>
//             <button>delete</button>
//         </div>

//     </div>
//   )
// }
// export default RestaurantCard

//edition 1
// eslint-disable-next-line no-unused-vars
// import React from "react";
// import PropTypes from "prop-types";
// import {Link} from 'react-router-dom';

// const RestaurantCard = ({ restaurant,role }) => {
//   const { name, location, imageUrl } = restaurant;
  

//   return (
//     <div className="restaurant-card">
//       <img src={imageUrl} alt={name} className="restaurant-image" />
//       <div className="restaurant-details">
//         <h3>{name}</h3>
//         <p>{location}</p>
//       </div>
//       {role === "admin" &&
//       <div className="restaurant-actions">
//       <button><Link to={'/restaurant/+${restaurant._id}'} className="btn-link">Edit</Link></button>
//       <button><Link to={'/Delete/+${restaurant._id}'} className="btn-link">Delete</Link></button>
      
//     </div>}
      
//     </div>
//   );
// };

// RestaurantCard.propTypes = {
//   restaurant: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     location: PropTypes.string.isRequired,
//     imageUrl: PropTypes.string.isRequired,
//   }).isRequired,
// };

// export default RestaurantCard;


//edition2
// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const RestaurantCard = ({ restaurant, role }) => {
  const { name, location, imageUrl, _id } = restaurant;

  return (
    <div className="restaurant-card">
      <img src={imageUrl} alt={name} className="restaurant-image" />
      <div className="restaurant-details">
        <h3>{name}</h3>
        <p>{location}</p>
      </div>
      {role === "admin" && (
        <div className="restaurant-actions">
          <Link to={`/restaurant/${_id}`} className="btn-link">
            <button>Edit</button>
          </Link>
          <Link to={`/delete/${_id}`} className="btn-link">
            <button>Delete</button>
          </Link>
        </div>
      )}
    </div>
  );
};

RestaurantCard.propTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
  role: PropTypes.string.isRequired,
};

export default RestaurantCard;

