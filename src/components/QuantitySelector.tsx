import React from 'react';

interface QuantitySelectorProps {
  maxQuantity?: number;
  selectedQuantity?: number;
  onQuantitySelect: (quantity: number) => void;
  className?: string;
}

export const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  maxQuantity = 8,
  selectedQuantity,
  onQuantitySelect,
  className = ""
}) => {
  const quantities = Array.from({ length: maxQuantity }, (_, i) => i + 1);

  return (
    <div className={`grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-4 lg:gap-6 text-black font-normal text-center ${className}`}>
      {quantities.map((quantity) => (
        <button
          key={quantity}
          className={`text-base sm:text-lg lg:text-xl xl:text-2xl py-0 lg:py-2 flex items-center justify-center border-2 transition-all ${
            selectedQuantity === quantity
              ? 'border-[rgba(19,54,92,1)] bg-[rgba(219,170,80,0.1)]'
              : 'border-[rgba(219,170,80,1)] hover:bg-[rgba(219,170,80,0.1)]'
          }`}
          onClick={() => onQuantitySelect(quantity)}
        >
          {quantity}
        </button>
      ))}
    </div>
  );
};
