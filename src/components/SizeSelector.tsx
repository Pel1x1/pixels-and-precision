import React from 'react';

interface SizeSelectorProps {
  sizes: string[];
  selectedSize?: string;
  onSizeSelect: (size: string) => void;
  className?: string;
}

export const SizeSelector: React.FC<SizeSelectorProps> = ({
  sizes,
  selectedSize,
  onSizeSelect,
  className = ""
}) => {
  return (
    <div className={`grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 text-black font-normal text-center ${className}`}>
      {sizes.map((size, index) => (
        <button
          key={index}
          className={`text-base sm:text-lg lg:text-xl xl:text-2xl px-4 sm:px-6 lg:px-8 xl:px-12 py-1 lg:py-2 border-2 transition-all whitespace-nowrap ${
            selectedSize === size
              ? 'border-[rgba(19,54,92,1)] bg-[rgba(219,170,80,0.1)]'
              : 'border-[rgba(219,170,80,1)] hover:bg-[rgba(219,170,80,0.05)]'
          }`}
          onClick={() => onSizeSelect(size)}
        >
          {size}
        </button>
      ))}
    </div>
  );
};
