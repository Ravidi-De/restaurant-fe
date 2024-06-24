// eslint-disable-next-line no-unused-vars
import React, { useEffect} from 'react'
import axios from 'axios';
import PropTypes from "prop-types";
import { useNavigate, useParams } from 'react-router-dom';




const DeleteRestaurant = () => {
    const navigate = useNavigate();
    const {id} = useParams()

    useEffect(() => {
      axios
        .delete("http://localhost:3001/restaurant/restaurant/"+id)
        .then((res) => {
          if (res.data.deleted) {
            navigate("/restaurants");
          }
        })
        .catch((error) => console.log(error));
    }, [id,navigate]);
}

DeleteRestaurant.propTypes = {
  id:PropTypes.number.isRequired,
};

export default DeleteRestaurant