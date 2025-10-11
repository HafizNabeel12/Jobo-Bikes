'use client';

import React from 'react';
import { useCart } from '@/components/CartContext'; // Adjust path as needed
import { ShoppingCart } from 'lucide-react';

interface CartIconProps {
  onClick?: () => void;
  className?: string;
}

export const CartIcon: React.FC<CartIconProps> = ({ onClick, className = '' }) => {
  const { totalItems,  } = useCart();

  return (
    <button
      onClick={onClick}
      className={`relative p-2 text-gray-700 hover:text-[#12b190] transition-colors ${className}`}
     
    >
      <ShoppingCart className="h-6 w-6" />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-[#12b190] text-black text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {totalItems > 99 ? '99+' : totalItems}
        </span>
      )}
    
    </button>
  );
};
