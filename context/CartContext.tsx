// // context/CartContext.js
// import { createContext, useContext, useReducer } from 'react';

// const CartContext = createContext();

// const initialState = {
//   items: [],
// };

// function cartReducer(state, action) {
//   switch (action.type) {
//     case 'ADD_ITEM':
//       const exists = state.items.find(item => item.id === action.payload.id);
//       if (exists) {
//         return {
//           ...state,          
//           items: state.items.map(item =>
//             item.id === action.payload.id
//               ? { ...item, quantity: item.quantity + 1 }
//               : item
//           ),
//         };
//       }
//       return {
//         ...state,
//         items: [...state.items, { ...action.payload, quantity: 1 }],
//       };
//     default:
//       return state;
//   }
// }

// export function CartProvider({ children }) {
//   const [state, dispatch] = useReducer(cartReducer, initialState);

//   const addToCart = (item) => {
//     dispatch({ type: 'ADD_ITEM', payload: item });
//   };

//   return (
//     <CartContext.Provider value={{ cart: state.items, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// }

// export const useCart = () => useContext(CartContext);
import React, { createContext, useContext, useReducer, ReactNode } from 'react';

interface Product {
  id: string | number;
  title: string;
  price: number;
  img?: string;
  quantity?: number;
}

interface CartState {
  items: Product[];
}

type CartAction = 
  | { type: 'ADD_ITEM'; payload: Product };

interface CartContextType {
  cart: Product[];
  addToCart: (item: Product) => void;
}

const initialState: CartState = {
  items: [],
};

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM':
      const exists = state.items.find(item => item.id === action.payload.id);
      if (exists) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: (item.quantity ?? 1) + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };
    default:
      return state;
  }
}

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: CartProviderProps) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (item: Product) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  return (
    <CartContext.Provider value={{ cart: state.items, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
