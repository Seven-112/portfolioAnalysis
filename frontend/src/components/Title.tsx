import React from "react";
import styled from "styled-components";

// Styled Components
const TitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 3rem;
  margin: 1rem 0 0 0;
  padding: 0 0 0 3rem;
`;

const Content = styled.div`
  font-size: 1.2rem;
  color: #333;
  display: flex;
  align-items: baseline;
  justify-content: center;
`;

const SVG = styled.svg`
  filter: drop-shadow(1.5px 1.5px 8px rgb(0 0 0 / 0.9));
`;

const P = styled.p`
  display: flex;
  margin: 0 0 0 1rem;
  align-self: center;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
`;

function Title() {
  return (
    <TitleWrapper>
      <Content>
        <SVG
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 22 22"
          stroke-width="1.5"
          stroke="blue"
          width="1.2rem"
          height="1.2rem"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
          />
        </SVG>

        <P>Analyse</P>
      </Content>
    </TitleWrapper>
  );
}

export default Title;
