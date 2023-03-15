import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import styled from "styled-components";

// Import 3 Main Components
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import Positionen from "./components/Positionen";

function App() {
  const Wrapper = styled.div`
    width: 92rem;
    height: 40rem;
    background-color: transparent;
    border: 2px solid #ddd;
    margin: 1rem auto;
    box-shadow: 0.1rem 0.05rem 0.2rem lightgrey;
  `;
  return (
    <BrowserRouter>
      <Wrapper>
        <Title></Title>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Positionen />}></Route>
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
