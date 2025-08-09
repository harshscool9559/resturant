"use client";

import styled from "styled-components";
import Featured from "@/component/Featured";
import Offer from "@/component/Offer";
import Slider from "@/component/Slider";

// 🎨 Styled Components for Home Page
const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 40px; /* Space between components */
  width: 100%;
  max-width: 1200px;
  margin: auto;
`;
import { CartProvider } from "@/context/CartContext";
export default function Home() {
  return (
    
    <CartProvider>
        <MainContainer>
      <Slider />
      <Featured />
      <Offer />
    </MainContainer>
    </CartProvider>
  
  
  );
}
