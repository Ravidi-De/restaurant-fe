// eslint-disable-next-line no-unused-vars
// import React from "react";
// import axios from "axios";
// import { Navigate } from "react-router-dom";

// const AddOwner = () => {
//     const [reg, setReg] = useState('')
//     const [ownername, setOwnername] = useState('')
//     const [hoteltype, sethoteltype] = useState('')
//     const [password, setPassword] = useState('')




//   const handleSubmit = (e) => {
//     e.preventDefault()
//     axios
//       .post("http//localhost:3001", { ownername, password, reg, hoteltype })
//       .then((res) => { console.log(res)
        
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div className="owner-form-container">
//       <form className="owner-form" onSubmit={handleSubmit}>
//         <h2>Add Owner</h2>
//         <div className="form-group">
//           <label htmlFor="reg">Reg No:</label>
//           <input
//             type="text"
//             id="reg"
//             name="reg"
//             onChange={(e) => setReg(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="ownername">Owner Name:</label>
//           <input
//             type="text"
//             id="ownername"
//             name="ownername"
//             onChange={(e) => setOwnername(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="hoteltype">Hotel Type:</label>
//           <input
//             type="text"
//             id="hoteltype"
//             name="hoteltype"
//             onChange={(e) => sethoteltype(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };
// export default AddOwner;



// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddOwner = () => {
  const [reg, setReg] = useState('');
  const [ownername, setOwnername] = useState('');
  const [hoteltype, setHoteltype] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate =useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/owner/register", { ownername, password, reg, hoteltype })
      .then((res) => {
        console.log(res);
        if (res.data.registered) {
            navigate('/dashboard')
          
        }
        console.log(res)
      })
      .catch((err) => console.log(err));
  };

//   if (isRegistered) {
//     return <Navigate to="/dashboard" />;
//   }

  return (
    <div className="owner-form-container">
      <form className="owner-form" onSubmit={handleSubmit}>
        <h2>Add Owner</h2>
        <div className="form-group">
          <label htmlFor="reg">Reg No:</label>
          <input
            type="text"
            id="reg"
            name="reg"
            onChange={(e) => setReg(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="ownername">Owner Name:</label>
          <input
            type="text"
            id="ownername"
            name="ownername"
            onChange={(e) => setOwnername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="hoteltype">Hotel Type:</label>
          <input
            type="text"
            id="hoteltype"
            name="hoteltype"
            onChange={(e) => setHoteltype(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default AddOwner;

