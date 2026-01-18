import React, { createContext, useContext, useState, ReactNode } from 'react';

type SectionType = 'sheet' | 'pillowcase' | 'duvet' | 'ready-set';

export interface CartItemData {
  id: string;
  section: SectionType;
  title: string;
  config: {
    color: string;
    size: string;
    quantity: number;
    feature?: string;
  };
  price: number;
  readySetData?: any;
}

interface CartContextType {
  cartItems: CartItemData[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItemData[]>>;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItemData[]>([]);

  const cartCount = cartItems.reduce((sum, item) => sum + (item.config.quantity || 1), 0);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
