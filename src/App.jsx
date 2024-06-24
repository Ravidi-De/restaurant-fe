import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./compoents/Home";
import Navbar from "./compoents/Navbar";
import Restaurants from "./compoents/Restaurants";
import Login from "./compoents/Login";
import Dashboard from "./compoents/Dashboard";
import AddOwner from "./compoents/AddOwner";
import { useEffect, useState } from "react";
import Logout from "./compoents/Logout";
import axios from "axios";
import AddRestaurant from "./compoents/AddRestaurant";
import EditRestaurant from "./compoents/EditRestaurant";
import DeleteRestaurant from "./compoents/DeleteRestaurant";


function App() {
  const[role,setRole]=useState('')

  axios.defaults.withCredentials =true;
  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/verify")
      .then((res) => {
        if (res.data.login) {
          setRole(res.data.role);
        } else {
          setRole("");
        }
        console.log(res);
      })
      .catch((error) => console.log(error));
  }, []);


  return (
    <BrowserRouter>
      <Navbar role = {role}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants role ={role} />} />
        <Route path="/login" element={<Login setRole={setRole}/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addowner" element={<AddOwner />} />
        <Route path="/logout" element={<Logout setRole ={setRole}/>} />
        <Route path="/addrestaurant" element={<AddRestaurant/>} />
        <Route path="/restaurant/:id" element={<EditRestaurant/>} />
        <Route path="/delete/:id" element={<DeleteRestaurant/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
