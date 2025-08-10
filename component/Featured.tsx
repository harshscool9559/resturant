"use client";

import { featuredProducts } from "@/data";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const FeaturedContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  background-color: #fff;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  white-space: nowrap;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin: 0;
  padding: 0;
`;

const ProductCard = styled.div`
  flex: 0 0 100%;
  scroll-snap-align: start;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 16px;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;
  border-right: 1px solid #e5e7eb;

  &:hover {
    background-color: #f5e1fa;
  }

  @media (min-width: 768px) {
    flex: 0 0 50%;
  }

  @media (min-width: 1280px) {
    flex: 0 0 33.3333%;
    height: 90vh;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  max-width: 100%;
  overflow: hidden;

  @media (min-width: 768px) {
    height: 250px;
  }

  @media (min-width: 1280px) {
    height: 300px;
  }

  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: rotate(5deg) scale(1.05);
  }
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 12px;
`;

const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: bold;
  text-transform: uppercase;

  @media (min-width: 1280px) {
    font-size: 1.5rem;
  }

  @media (min-width: 1536px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  padding: 0 16px;
  font-size: 0.9rem;

  @media (min-width: 1536px) {
    padding: 0 32px;
    font-size: 1rem;
  }
`;

const Price = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
  color: #ef4444;
`;

const AddToCartButton = styled.button`
  background-color: #ef4444;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #dc2626;
  }
`;
// types/Product.ts (recommended for reuse)
type Product = {
  id: number;
  title: string;
  desc?: string;   // ✅ Optional
  img?: string;    // ✅ Optional
  price: number;
};


const Featured = () => {
const handleAddToCart = (item: Product) => {
  console.log("Add to cart:", item);
};
  return (
    <FeaturedContainer>
      <Wrapper>
        {featuredProducts.map((item) => (
          <ProductCard key={item.id}>
            {item.img && (
              <ImageContainer>
                <Image
                  src={item.img}
                  alt={item.title || "Product Image"}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </ImageContainer>
            )}
            <TextContainer>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
              <Price>${item.price}</Price>
              <AddToCartButton onClick={() => handleAddToCart(item)}>
                Add to Cart
              </AddToCartButton>
            </TextContainer>
          </ProductCard>
        ))}
      </Wrapper>
    </FeaturedContainer>
  );
};

export default Featured;
