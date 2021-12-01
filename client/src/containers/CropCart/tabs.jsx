import React, { useState } from "react";
import styled from "styled-components";
import Products from "../../components/Products/Products";
const Tab = styled.button`
  font-size: 16px;
  padding: 20px 40px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  justify-content: center;
  width: 100%;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid rgba(75, 163, 159);
    opacity: 1;
  `}
`;
const Margin = styled.div`
  margin-top: 80px;
`;
const ButtonGroup = styled.div`
  display: flex;
`;
const MembersContainer = styled.div`
  width: 100%;
  margin-top: 5%;
`;
const types = ["Products", "My Products"];

export default function TabGroup(props) {
  const token = sessionStorage.getItem("token");
  const [active, setActive] = useState(types[0]);
  return (
    <div>
      <ButtonGroup>
        {types.map((type) => (
          <Tab
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
            {type}
          </Tab>
        ))}
      </ButtonGroup>
      {active === "Products" ? (
        <Products show="allProducts" />
      ) : token ? (
        <Products show="myProducts" />
      ) : (
        <div />
      )}
    </div>
  );
}