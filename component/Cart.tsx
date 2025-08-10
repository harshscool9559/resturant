// // components/Cart.js
// import styled from 'styled-components';
// // import { useCart } from '@/context/CartContext';
// // type CartItem = {
// //   id: string | number;
// //   name: string;
// //   price: number;
// //   quantity: number;
// // };
// const Container = styled.div`
//   max-width: 600px;
//   margin: 30px auto;
//   padding: 20px;
//   background-color: #fff;
//   border-radius: 8px;
//   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
//   font-family: Arial, sans-serif;
// `;

// const Title = styled.h2`
//   text-align: center;
//   margin-bottom: 20px;
//   color: #333;
// `;

// const Item = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 15px 0;
//   border-bottom: 1px solid #eee;
// `;

// const ItemTotal = styled.div`
//   font-weight: bold;
//   color: #444;
// `;

// const Divider = styled.hr`
//   margin: 20px 0;
// `;

// const Total = styled.div`
//   text-align: right;
//   font-size: 18px;
//   color: #111;
// `;

// const Empty = styled.p`
//   text-align: center;
//   color: #888;
//   padding: 40px 0;
// `;
// import { useCart } from '@/context/CartContext';
// export default function Cart() {
//   const { cart } = useCart();
//   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <Container>
//       <Title>Your Shopping Cart</Title>

//       {cart.length === 0 ? (
//         <Empty>Your cart is empty.</Empty>
//       ) : (
//         <div>
//           {cart.map((item) => (
//             <Item key={item.id}>
//               <div>
//                 <h3>{item.name}</h3>
//                 <p>Price: ${item.price}</p>
//                 <p>Quantity: {item.quantity}</p>
//               </div>
//               <ItemTotal>${(item.price * item.quantity).toFixed(2)}</ItemTotal>
//             </Item>
//           ))}
//           <Divider />
//           <Total><strong>Total:</strong> ${total.toFixed(2)}</Total>
//         </div>
//       )}
//     </Container>
//   );
// }

import styled from 'styled-components';
import { useCart } from '@/context/CartContext';

type CartItem = {
  id: string | number;
  name: string;
  price: number;
  quantity: number;
};

const Container = styled.div`
  max-width: 600px;
  margin: 30px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
`;

const ItemTotal = styled.div`
  font-weight: bold;
  color: #444;
`;

const Divider = styled.hr`
  margin: 20px 0;
`;

const Total = styled.div`
  text-align: right;
  font-size: 18px;
  color: #111;
`;

const Empty = styled.p`
  text-align: center;
  color: #888;
  padding: 40px 0;
`;

export default function Cart() {
  const { cart } = useCart();

  // Cast cart items to the CartItem[] type for type safety
const typedCart = cart as unknown as CartItem[];
  const total = typedCart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Container>
      <Title>Your Shopping Cart</Title>

      {typedCart.length === 0 ? (
        <Empty>Your cart is empty.</Empty>
      ) : (
        <div>
          {typedCart.map((item) => (
            <Item key={item.id}>
              <div>
                <h3>{item.name}</h3>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <ItemTotal>${(item.price * item.quantity).toFixed(2)}</ItemTotal>
            </Item>
          ))}
          <Divider />
          <Total>
            <strong>Total:</strong> ${total.toFixed(2)}
          </Total>
        </div>
      )}
    </Container>
  );
}
