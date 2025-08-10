"use client";

import React from "react";
import styled from "styled-components";

const Banner = styled.div`
  background-color: #3b82f6; /* Tailwind's bg-blue-500 */
  color: white;
  padding: 8px 16px;
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  border-radius: 0 0 8px 8px;
`;

const Notification = () => {
  return (
    <Banner>
      Free delivery for all orders over $50. Order your food now!
    </Banner>
  );
};

export default Notification;
