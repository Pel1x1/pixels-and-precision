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
    <div className={`grid grid-cols-8 sm:grid-cols-8 lg:grid-cols-8 gap-3 sm:gap-4 lg:gap-8 ${className}`}>
      {colors.map((color, index) => (
        <button
          key={index}
          className={`aspect-[2/1] w-8 h-8 sm:w-20 sm:h-10 lg:w-[4rem] lg:h-[2rem] xl:w-[7rem] xl:h-[3rem] border-1 transition-all ${
            selectedColor === color 
              ? 'border-[rgba(19,54,92,1)] border-[2px]' 
              : 'border-transparent hover:border-[rgba(219,170,80,1)]'
          }`}
          style={{ backgroundColor: color }}
          onClick={() => onColorSelect(color)}
          aria-label={`Выбрать цвет ${color}`}
        />
      ))}
    </div>
  );
};
