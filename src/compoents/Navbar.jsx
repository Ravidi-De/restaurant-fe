// eslint-disable-next-line no-unused-vars
// import React from "react";
// import { Link } from "react-router-dom";
// import "../css/Navbar.css";

// const Navbar = ({ role }) => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         <Link to="/" className="navbar-brand">
//           RESTAURANTS
//         </Link>
//       </div>
//       <div className="navbar-right">
//         {/* <Link to="/">Home</Link>  */}
//         <Link to="/restaurants" className="navbar-link">
//           Restaurant
//         </Link>
//         {role === "admin" && (
//           <>
//             <Link to="/addrestaurant" className="navbar-link">
//               Add Restaurant
//             </Link>
//             <Link to="/addowner" className="navbar-link">
//               Add Owner
//             </Link>
//             <Link to="/dashboard" className="navbar-link">
//               Dashboard
//             </Link>
//           </>
//         )}
//         {role === "" ? (
//           <Link to="/login" className="navbar-link">
//             Login
//           </Link>
//         ) : (
//           <Link to="/logout" className="navbar-link">
//             Logout
//           </Link>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import PropTypes from "prop-types";

const Navbar = ({ role }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-brand">
          RESTAURANTS
        </Link>
      </div>
      <div className="navbar-right">
      {role === "admin" ? 
      ( <><Link to="/restaurants" className="navbar-link">
          Restaurants
        </Link>
        <Link to="/addrestaurant" className="navbar-link">
          Add Restaurant
        </Link>
        <Link to="/addowner" className="navbar-link">
          Add Owner
        </Link>
        <Link to="/dashboard" className="navbar-link">
          Dashboard
        </Link>
        <Link to="/logout" className="navbar-link">
          Logout
        </Link></>):(
          <Link to="/login" className="navbar-link">
          Login
        </Link>
        )}
      </div>
    </nav>
  );
};


Navbar.propTypes = {
  role:PropTypes.string.isRequired,
};

export default Navbar;
