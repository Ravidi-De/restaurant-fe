// eslint-disable-next-line no-unused-vars
// import React, { useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Logout = ({ setRole }) => {
//   const navigate = useNavigate();
//   useEffect(() => {
//     axios
//       .get("http://localhost:3001/auth/logout")
//       .then((res) => {
//         if (res.data.Logout) {
//           setRole("");
//           navigate("/");
//         }
//       })
//       .catch((error) => console.log(error));
//   }, []);
// };
// export default Logout;



// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import PropTypes for props validation

const Logout = ({ setRole }) => {
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/auth/logout')
      .then(res => {
        if (res.data.logout) {
          setRole('');
          navigate('/');
        }
      })
      .catch(err => console.log(err));
  }, [setRole, navigate]); // Added setRole and navigate to the dependency array

  return null; // Return null to avoid rendering any content
};

Logout.propTypes = {
  setRole: PropTypes.func.isRequired, // Validate setRole prop as a required function
};

export default Logout;
