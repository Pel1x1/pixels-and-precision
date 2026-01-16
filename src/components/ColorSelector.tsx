import React from 'react';

interface ColorSelectorProps {
  colors: string[];
  selectedColor?: string;
  onColorSelect: (color: string) => void;
  className?: string;
}

export const ColorSelector: React.FC<ColorSelectorProps> = ({
  colors,
  selectedColor,
  onColorSelect,
  className = ""
}) => {
  return (
    <div className={`grid grid-cols-8 sm:grid-cols-8 lg:grid-cols-8 gap-[0.49rem] sm:gap-3 lg:gap-4 ${className}`}>
      {colors.map((color, index) => (
        <button
          key={index}
          className={`aspect-[2/1] w-8 h-8 sm:w-20 sm:h-10 lg:w-[4rem] lg:h-[2rem] xl:w-[6.5rem] xl:h-[3rem] border-2 transition-all duration-300 transform hover:scale-105 ${
            selectedColor === color
              ? 'border-[rgba(19,54,92,1)] animate-scale-in border-[2px]'
              : 'border-[rgba(219,170,80,1)] hover:border-[rgba(19,54,92,1)]'
          }`}
          style={{ backgroundColor: color }}
          onClick={() => onColorSelect(color)}
          aria-label={`Выбрать цвет ${color}`}
        />

      ))}
    </div>
  );
};
