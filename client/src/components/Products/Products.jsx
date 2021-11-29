import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./Productsstyles";
import wheat from "../../assets/wheat.jpg";
import rice from "../../assets/rice.png";
import corn from "../../assets/corn.jpg";
import barley from "../../assets/barley.jpg";
import potato from "../../assets/potato.png";
import styled from "styled-components";

const SearchBar = styled.input`
  width: auto;
  min-width: 40%;
  height: auto;
  border: 1px solid rgba(75, 163, 159, 0.85);
  border-radius: 17px;
  :focus {
    outline: none;
  }
  font-size: 16px;
  padding-left: 2%;
  padding-right: 2%;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
`;
const SearchWrapper = styled.div`
  margin-left: 40%;
`;
const Margin = styled.div`
  margin-top: 80px;
`;

const products = [
  { id: 1, name: "Wheat", descrption: "crop1", price: "10/kg", image: wheat, number:1800-180-1551},
  { id: 2, name: "Rice", descrption: "crop2", price: "20/kg", image: rice, number:1800-180-1551},
  { id: 3, name: "Corn", descrption: "crop3", price: "30/kg", image: corn , number:1800-180-1551},
  { id: 4, name: "Barley", descrption: "crop4", price: "20/kg", image: barley, number:1800-180-1551 },
  { id: 5, name: "Potato", descrption: "crop5", price: "15/kg", image: potato , number:1800-180-1551},
  { id: 6, name: "Wheat", descrption: "crop1", price: "12/kg", image: wheat, number:1800-180-1551},
  { id: 7, name: "Rice", descrption: "crop2", price: "17/kg", image: rice , number:1800-180-1551},
  { id: 8, name: "Corn", descrption: "crop3", price: "25/kg", image: corn , number:1800-180-1551},
  { id: 9, name: "Barley", descrption: "crop4", price: "18/kg", image: barley , number:1800-180-1551},
  {
    id: 10,
    name: "Potato",
    descrption: "crop5",
    price: "9/kg",
    image: potato,
  },
];

const Products = () => {
  const searchTerm = (e) => {
    setTerm(e.target.value);
  };
  const classes = useStyles();
  const [term, setTerm] = useState("");
  console.log(term);
  return (
    <main className={classes.content}>
      <Margin />
      <SearchWrapper>
        <SearchBar
          onChange={searchTerm}
          autoComplete="off"
          placeholder="search"
        />
      </SearchWrapper>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={2} className={classes.root}>
        {products
          .filter((val) => {
            if (term === "") return val;
            else {
              return val.name.toLowerCase().includes(term.toLowerCase());
            }
          })
          .map((product) => (
            <Grid item key={product.id} xs={12} s={6} md={3} l={3}>
              <Product product={product} />
            </Grid>
          ))}
      </Grid>
    </main>
  );
};
export default Products;
