// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/Dashboard.css'

const Dashboard = () => {
  const [restaurants, setRestaurants] = useState(0);
  const [owners, setOwners] = useState(0);
  const [admins, setAdmins] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const restaurantsRes = await axios.get('http://localhost:3001/restaurant/count');
        const ownersRes = await axios.get('http://localhost:3001/owner/count');
        const adminsRes = await axios.get('http://localhost:3001/admin/count');

        setRestaurants(restaurantsRes.data.count);
        setOwners(ownersRes.data.count);
        setAdmins(adminsRes.data.count);
      } catch (error) {
        console.error('Error fetching counts:', error);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard-box">
        <h2>Total Restaurants</h2>
        <br />
        <h2>{restaurants}</h2>
      </div>
      <div className="dashboard-box">
        <h2>Total Owners</h2>
        <br />
        
        <h2>{owners}</h2>
      </div>
      <div className="dashboard-box">
        <h2>Total Admins</h2>
        <br />
        <h2>{admins}</h2>
      </div>
    </div>
  );
};

export default Dashboard;
