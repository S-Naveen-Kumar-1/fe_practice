import axios from "axios";
import React, { useEffect } from "react";

export const Home = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(`https://backened-z9a2.onrender.com/notes/get`, config)
      .then((res) => {
        console.log(res.data);
      });
  }, []);
  return <div></div>;
};
