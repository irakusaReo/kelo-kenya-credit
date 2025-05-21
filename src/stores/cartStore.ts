
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  partnerName: string;
  partnerLogo: string;
  selectedTenor: number;
  quantity?: number;
  [key: string]: any;
}

interface CartStore {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cart: [],
      
      addToCart: (item) => set((state) => {
        const existingItemIndex = state.cart.findIndex(cartItem => cartItem.id === item.id);
        
        if (existingItemIndex !== -1) {
          // Item exists, update quantity
          const updatedCart = [...state.cart];
          updatedCart[existingItemIndex] = {
            ...updatedCart[existingItemIndex],
            quantity: (updatedCart[existingItemIndex].quantity || 1) + 1
          };
          return { cart: updatedCart };
        } else {
          // Add new item
          return { cart: [...state.cart, { ...item, quantity: 1 }] };
        }
      }),
      
      removeFromCart: (id) => set((state) => ({
        cart: state.cart.filter(item => item.id !== id)
      })),
      
      updateQuantity: (id, quantity) => set((state) => ({
        cart: state.cart.map(item => 
          item.id === id ? { ...item, quantity } : item
        )
      })),
      
      clearCart: () => set({ cart: [] })
    }),
    {
      name: 'kelo-cart-storage'
    }
  )
);
