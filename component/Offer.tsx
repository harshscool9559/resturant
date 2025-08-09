"use client";

import React from "react";
import styled from "styled-components";

// 📌 Styled Components
const OfferContainer = styled.div`
  width: 100%;
  height: 300px;
  background-image: url("/images/offer-bg.jpg"); /* Change image */
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 200px; /* Adjust for mobile */
  }
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Dark overlay for better text visibility */
`;

const OfferContent = styled.div`
  z-index: 10;
  max-width: 600px;
`;

const OfferTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const OfferButton = styled.button`
  background-color: #ef4444;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #dc2626;
  }
`;
import { useRouter } from 'next/navigation';

const Offer = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/menu/pizzas');
  };

  return (
    <OfferContainer>
      <Overlay />
      <OfferContent>
        <OfferTitle>🔥 Limited-Time Offer! 50% Off</OfferTitle>
        <OfferButton onClick={handleClick}>Shop Now</OfferButton>
      </OfferContent>
    </OfferContainer>
  );
};
export default Offer;
