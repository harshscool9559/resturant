"use client";
import { useParams } from "next/navigation";
import { pizzas } from "@/data";
import Image from "next/image";
import styled from "styled-components";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  max-width: 1000px;
  margin: auto;

  @media(min-width: 768px) {
    flex-direction: row;
  }
`;

const ImgWrapper = styled.div`
  flex: 1;
  position: relative;
  height: 300px;
  margin-bottom: 20px;

  @media(min-width: 768px) {
    height: 400px;
    margin-bottom: 0;
  }
`;

const Details = styled.div`
  flex: 1;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const Desc = styled.p`
  margin-bottom: 15px;
  color: #666;
`;

const Price = styled.h2`
  font-size: 1.5rem;
  color: #ef4444;
`;

const Button = styled.button`
  background: #ef4444;
  color: #fff;
  border: none;
  padding: 12px 20px;
  border-radius: 6px;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    background: #dc2626;
  }
`;

const BackLink = styled.div`
  margin-top: 40px;
  text-align: center;
  a {
    color: #0070f3;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = pizzas.find((p) => p.id === Number(id));
  

  if (!product) return <div style={{ padding: '20px' }}>Product not found.</div>;

  return (
    <div>
      <Container>
        <ImgWrapper>
          <Image
            src={product.img}
            alt={product.title}
            fill
            className="object-contain"
          />
        </ImgWrapper>
        <Details>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>${product.price}</Price>
          <Button onClick={() => addToCart(product)}>Add to Cart</Button>
        </Details>
      </Container>

      <BackLink>
        <Link href="/"> Back to Home</Link>
      </BackLink>
    </div>
  );
}
