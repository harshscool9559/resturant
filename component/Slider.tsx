"use client";

import React from "react";
import styled from "styled-components";

const SliderContainer = styled.div`
  width: 100%;
  height: 400px;
  background-image: url("/slide1.png");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 250px;
    font-size: 24px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
`;

const TextContent = styled.div`
  z-index: 10;
`;

const Slider = () => {
  return (
    <SliderContainer>
      <Overlay />
      <TextContent>🚀 Welcome to Our Store</TextContent>
    </SliderContainer>
  );
};

export default Slider;
