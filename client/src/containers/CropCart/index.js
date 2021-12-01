import React, { useState } from "react";
import Products from "../../components/Products/Products";
import TabGroup from "./tabs";
import useStyles from "./styles";
import styled from "styled-components";

const Margin = styled.div`
  margin-top: 50px;
`;

const CropCart = () => {
  const classes = useStyles();
  const [term, setTerm] = useState("");
  return (
    <main className={classes.content}>
      <Margin />
      <TabGroup />
    </main>
  );
};

export default CropCart;
