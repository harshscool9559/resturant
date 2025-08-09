"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

// 📌 Styled Components
const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: #ef4444; /* Tailwind's text-red-500 */
`;

const ProductCard = styled(Link)`
  width: 100%;
  height: 60vh;
  border-right: 2px solid #ef4444;
  border-bottom: 2px solid #ef4444;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: background 0.3s ease-in-out;
 text-decoration:none;
  &:nth-child(odd) {
    background-color: #f5e1fa; /* Tailwind's bg-fuchsia-50 */
  }

  @media (min-width: 640px) {
    width: 50%;
  }

  @media (min-width: 1024px) {
    width: 33.33%;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: 80%;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
`;

const ProductTitle = styled.h1`
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 8px;
`;

const Price = styled.h2`
  font-size: 1.25rem;
  transition: opacity 0.3s ease;
`;

const AddToCartButton = styled.button`
  display: none;
  text-transform: uppercase;
  background-color: #ef4444;
  color: white;
  padding: 8px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: opacity 0.3s ease;

  ${ProductCard}:hover & {
    display: block;
  }
`;

import { burgers } from "@/data";
import { pastas } from "@/data";
import { pizzas} from "@/data"; // Assuming you have a `data.ts` that exports these arrays
import { useCart } from "@/context/CartContext";
// Styled components here (same as before)...

const CategoryPage = () => {
  const params = useParams();
  const {addToCart}=useCart();
  const category = params.category as string;

  // Fetch products dynamically based on category
  let products = [];
  if (category === "pizzas") {
    products = pizzas; // Assuming pizzas data is in `pizzas` array
  } else if (category === "burgers") {
    products =burgers // Assuming burgers data is in `burgers` array
  } else {
    products = pastas; // No products found if category doesn't match
  }

  if (!category) return <div>Category not found.</div>;

  return (
    <CategoryContainer>
      {products.length === 0 ? (
        <div>No products found for this category.</div>
      ) : (
        products.map((item) => (
          <ProductCard href={`/product/${item.id}`} key={item.id}>
            {/* IMAGE CONTAINER */}
            {item.img && (
              <ImageContainer>
                <Image src={item.img} alt={item.title} fill className="object-contain" />
              </ImageContainer>
            )}
            {/* TEXT CONTAINER */}
            <TextContainer>
              <ProductTitle>{item.title}</ProductTitle>
              <Price>${item.price}</Price>
              <AddToCartButton onClick={(e)=>{
                addToCart(item);
                e.preventDefault(); // stop the link navigation
                e.stopPropagation();}}>Add to Cart</AddToCartButton>
            </TextContainer>
          </ProductCard>
        ))
      )}
    </CategoryContainer>
  );
};

export default CategoryPage;

