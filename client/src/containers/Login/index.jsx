import React from "react";
import styled from "styled-components";
import Login from "./login";

const index = () => {
  return (
    <Body>
      <Login />
    </Body>
  );
};
const Body = styled.div`
  background-image: url("./background.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default index;
