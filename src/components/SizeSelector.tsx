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
    <div className={`flex items-stretch gap-[39px] text-black font-normal text-center flex-wrap ${className}`}>
      {sizes.map((size, index) => (
        <button
          key={index}
          className={`pt-1.5 pb-[27px] px-[70px] border-4 transition-all ${
            selectedSize === size
              ? 'border-[rgba(19,54,92,1)] bg-[rgba(219,170,80,0.1)]'
              : 'border-[rgba(219,170,80,1)] hover:bg-[rgba(219,170,80,0.05)]'
          } max-md:px-5`}
          onClick={() => onSizeSelect(size)}
        >
          <div>{size}</div>
        </button>
      ))}
    </div>
  );
};
