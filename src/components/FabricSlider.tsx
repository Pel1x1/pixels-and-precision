import React from 'react';

export interface Fabric {
  color: string;
  img: string;
}

interface FabricSliderGalleryProps {
  fabrics: Fabric[];
  selectedColor: string;
  onColorSelect: (color: string) => void;
  visibleCount?: number;
}

export const FabricSliderGallery: React.FC<FabricSliderGalleryProps> = ({
  fabrics,
  selectedColor,
  onColorSelect,
  visibleCount = 3
}) => {
  const selectedIndex = fabrics.findIndex(f => f.color === selectedColor);
  const [start, setStart] = React.useState(
    Math.max(0, selectedIndex - Math.floor(visibleCount / 2))
  );

  React.useEffect(() => {
    if (selectedIndex < start) setStart(selectedIndex);
    else if (selectedIndex >= start + visibleCount) setStart(selectedIndex - visibleCount + 1);
  }, [selectedIndex, visibleCount, start]);

  const canGoPrev = start > 0;
  const canGoNext = start + visibleCount < fabrics.length;
  const visibleFabrics = fabrics.slice(start, start + visibleCount);

  const handlePrev = () => { if (canGoPrev) setStart(start - 1); };
  const handleNext = () => { if (canGoNext) setStart(start + 1); };

  return (
    <div
      className="relative flex items-center w-full h-[230px]"
      style={{ minHeight: 350 }}
    >
      <button
        onClick={handlePrev}
        disabled={!canGoPrev}
        className="absolute left-2 z-10 p-2 rounded-full bg-white/70 hover:bg-white text-2xl shadow disabled:opacity-50"
        type="button"
        style={{ top: '50%', transform: 'translateY(-50%)' }}
        aria-label="Назад"
      >&#8249;</button>

      <div className="flex-1 h-full">
        <div className="grid grid-cols-3 gap-6 h-full">
          {visibleFabrics.map((fabric, idx) => {
            const realIndex = start + idx;
            const isActive = fabric.color === selectedColor;
            return (
              <img
                key={realIndex}
                src={fabric.img}
                onClick={() => onColorSelect(fabric.color)}
                className={
                  `object-contain w-full h-full cursor-pointer transition-all duration-200
                  ${isActive
                    ? 'border-2 border-[rgba(219,170,80,1)] shadow-xl scale-105'
                    : 'opacity-80 hover:opacity-100 ring-0'}`
                }
                alt={`Ткань ${realIndex + 1}`}
                loading="lazy"
                draggable={false}
                style={{ maxHeight: 350, maxWidth: '100%' }}
                tabIndex={0}
                aria-label={`Выбрать ткань ${realIndex + 1}`}
              />
            );
          })}
        </div>
      </div>

      <button
        onClick={handleNext}
        disabled={!canGoNext}
        className="absolute right-2 z-10 p-2 rounded-full bg-white/70 hover:bg-white text-2xl shadow disabled:opacity-50"
        type="button"
        style={{ top: '50%', transform: 'translateY(-50%)' }}
        aria-label="Вперёд"
      >&#8250;</button>
    </div>
  );
};
