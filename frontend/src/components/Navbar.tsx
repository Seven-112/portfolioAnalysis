import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Styled Components
const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  margin: 1rem 0 0 0;
  padding: 0 0 0 2rem;
  background-color: white;
  border-bottom: 2px solid #ddd;
  border-bottom-style: groove;
`;

const P = styled.span`
  &: link {
    color: red;
    border-bottom: 2px solid #00c9ee;
  }
  &: visited {
    color: red;
    border-bottom: 2px solid #00c9ee;
  }
  &: hover {
    color: red;
  }
  &: active {
    color: red;
    border-bottom: 2px solid #00c9ee;
  }

  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.1em;
  color: #201f1f;
  text-align: center;
  padding: 0.1rem 2rem 0 2rem;
`;

function Navbar() {
  return (
    <Wrapper>
      <Link to="/">
        <P>Positionen</P>
      </Link>
      <Link to="/Regionen">
        <P>Regionen</P>
      </Link>
      <Link to="/Anlageklassen">
        <P>Anlageklassen</P>
      </Link>
      <Link to="/Sektoren">
        <P>Sektoren</P>
      </Link>
    </Wrapper>
  );
}

export default Navbar;
