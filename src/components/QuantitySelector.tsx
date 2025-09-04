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
    <div className={`flex items-stretch gap-[39px] text-black font-normal whitespace-nowrap text-center flex-wrap ${className}`}>
      {quantities.map((quantity) => (
        <button
          key={quantity}
          className={`flex flex-col text-center pt-1 pb-8 px-14 border-4 transition-all ${
            selectedQuantity === quantity
              ? 'border-[rgba(19,54,92,1)] bg-[rgba(219,170,80,0.1)]'
              : 'border-[rgba(219,170,80,1)] hover:bg-[rgba(219,170,80,0.05)]'
          } max-md:px-5`}
          onClick={() => onQuantitySelect(quantity)}
        >
          <div>{quantity}</div>
        </button>
      ))}
    </div>
  );
};
