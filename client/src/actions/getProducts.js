import React, { useState, useEffect } from "react";
import axios from "axios";

const GetProducts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/product/getProducts")
      .then((res) => {
        console.log("res", res);
        setData(res.data);
        console.log("hey hi hello");
      })
      .catch((error) => console.log(error));
  }, []);
  return data;
};

export default GetProducts;
