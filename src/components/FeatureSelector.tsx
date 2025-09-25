import React from 'react';

interface FeatureSelectorProps {
  options: string[];
  selectedOption?: string;
  onOptionSelect: (option: string) => void;
  className?: string;
}

export const FeatureSelector: React.FC<FeatureSelectorProps> = ({
  options,
  selectedOption,
  onOptionSelect,
  className = ""
}) => {
  return (
    <div className={`grid grid-cols-${options.length} gap-3 sm:gap-4 lg:gap-6 text-black font-normal text-center ${className}`}>
      {options.map(option => (
        <button
          key={option}
          className={`text-base sm:text-lg lg:text-xl xl:text-2xl py-0 lg:py-2 flex items-center justify-center border-2 transition-all ${
            selectedOption === option
              ? 'border-[rgba(19,54,92,1)] bg-[rgba(219,170,80,0.1)]'
              : 'border-[rgba(219,170,80,1)] hover:bg-[rgba(219,170,80,0.1)]'
          }`}

          onClick={() => onOptionSelect(option)}
          type="button"
        >
          {option}
        </button>
      ))}
    </div>
  );
};
