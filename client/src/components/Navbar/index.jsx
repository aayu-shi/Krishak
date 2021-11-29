import { Button } from "../../components/Button";
import React from "react";
import styled from "styled-components";
import { Logo } from "../Logo";
import { Marginer } from "../Margin";
import { Link, useLocation } from "react-router-dom";

const NavConatiner = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  overflow: hidden;
`;

const AcessisbilityContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const AnchorLink = styled.a`
  font-size: 17px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  transition: all 200ms ease-in-out;

  &:hover {
    filter: contrast(0.6);
  }
`;

const Seperator = styled.div`
  height: 35%;
  width: 1px;
  background-color: #fff;
`;

export function Navbar() {
  const { pathname } = useLocation();
  let color = "";
  let position = "";
  if (pathname !== "/") {
    color = "rgba(75, 163, 159, 0.85)";
    position = "fixed";
  } else {
    color = "";
    position = "";
  }
  return (
    <div>
      <NavConatiner style={{ backgroundColor: color, position: position }}>
        <Link to={{ pathname: "/" }} style={{ textDecoration: "none" }}>
          <Logo />
        </Link>
        <AcessisbilityContainer>
          <Link
            to={{ pathname: "/cropcart" }}
            style={{ textDecoration: "none" }}
          >
            <AnchorLink>Crop Cart </AnchorLink>
          </Link>
          <Marginer direction="horizontal" margin={15} />
          <Link
            to={{ pathname: "/weather" }}
            style={{ textDecoration: "none" }}
          >
            <AnchorLink>Weather </AnchorLink>
          </Link>
          <Marginer direction="horizontal" margin={15} />
          <Link
            to={{ pathname: "https://kishikamittal.github.io/covidUpdate/" }}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <AnchorLink>Covid Update</AnchorLink>
          </Link>
          <Marginer direction="horizontal" margin={15} />
          <Link
            to={{ pathname: "/helpline" }}
            style={{ textDecoration: "none" }}
          >
            <AnchorLink>Helpline </AnchorLink>
          </Link>
          <Marginer direction="horizontal" margin={10} />
          <Seperator />
          <Marginer direction="horizontal" margin={10} />
          <Link to={{ pathname: "/signin" }} style={{ textDecoration: "none" }}>
            <Button size={13}>Login/Signup</Button>
          </Link>
        </AcessisbilityContainer>
      </NavConatiner>
    </div>
  );
}
