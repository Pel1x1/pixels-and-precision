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
    <div className={`flex items-stretch gap-[39px] flex-wrap ${className}`}>
      {colors.map((color, index) => (
        <button
          key={index}
          className={`w-[122px] h-[59px] border-2 transition-all ${
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
