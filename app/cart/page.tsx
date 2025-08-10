// // pages/cart.js
// "use client";
// import Cart from '@/component/Cart';
// import Link from 'next/link';
// import styled from 'styled-components';

// const BackLink = styled.div`
//   text-align: center;
//   margin-top: 20px;

//   a {
//     text-decoration: none;
//     color: #0070f3;

//     &:hover {
//       text-decoration: underline;
//     }
//   }
// `;

"use client";
import Cart from '@/component/Cart';
import Link from 'next/link';
import styled from 'styled-components';
import React from 'react';

const BackLink = styled.div`
  text-align: center;
  margin-top: 20px;

  a {
    text-decoration: none;
    color: #0070f3;

    &:hover {
      text-decoration: underline;
    }
  }
`;

import { FC } from 'react';

const CartPage: FC = () => {
  return (
    <div>
      <Cart />
      <BackLink>
        <Link href="/">← Back to Products</Link>
      </BackLink>
    </div>
  );
};

export default CartPage;

