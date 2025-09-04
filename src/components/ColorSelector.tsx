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
    <div className={`grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-3 sm:gap-4 lg:gap-6 ${className}`}>
      {colors.map((color, index) => (
        <button
          key={index}
          className={`aspect-[2/1] sm:w-20 sm:h-10 lg:w-24 lg:h-12 xl:w-[122px] xl:h-[59px] border-2 transition-all ${
            selectedColor === color 
              ? 'border-[rgba(19,54,92,1)] border-4' 
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
