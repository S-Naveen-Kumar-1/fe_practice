import axios from "axios";
import React, { useState } from "react";

export const Signup = () => {
  const [data, setData] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    console.log("first");
    e.preventDefault();
    console.log(data);
    axios
      .post(`https://backened-z9a2.onrender.com/users/register`, data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <input
        type="text"
        name="userName"
        id=""
        placeholder="userName"
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        id=""
        placeholder="email"
        onChange={handleChange}
      />
      <input
        type="text"
        name="password"
        id=""
        placeholder="password"
        onChange={handleChange}
      />
      <button type="submit" onClick={handleSubmit}>
        Signup
      </button>
    </div>
  );
};
