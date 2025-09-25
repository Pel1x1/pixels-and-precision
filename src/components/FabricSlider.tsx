import React, { useState, useEffect, useRef } from 'react';

export interface Fabric {
  color: string;
  img: string;
}

interface FabricSliderGalleryProps {
  fabrics: Fabric[];
  selectedColor: string;
  onColorSelect: (color: string) => void;
}

export const FabricSliderGallery: React.FC<FabricSliderGalleryProps> = ({
  fabrics,
  selectedColor,
  onColorSelect,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isMobile, setIsMobile] = useState(false);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  // Определяем мобильное состояние и visibleCount
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setIsMobile(true);
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setIsMobile(false);
        setVisibleCount(2);
      } else {
        setIsMobile(false);
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Прокрутка к выбранному элементу
  useEffect(() => {
    if (!containerRef.current) return;
    const index = fabrics.findIndex(f => f.color === selectedColor);
    if (index < 0) return;

    const container = containerRef.current;
    const itemWidth = container.scrollWidth / fabrics.length;

    let scrollLeft = index * itemWidth;

    // Для десктопа центрируем выбранный элемент
    if (!isMobile) {
      const containerWidth = container.clientWidth;
      scrollLeft = index * itemWidth - containerWidth / 2 + itemWidth / 2;
      if (scrollLeft < 0) scrollLeft = 0;
      if (scrollLeft > container.scrollWidth - containerWidth) {
        scrollLeft = container.scrollWidth - containerWidth;
      }
    }

    // Безопасный вызов прокрутки
    requestAnimationFrame(() => {
      container.scrollTo({ left: scrollLeft, behavior: isMobile ? 'auto' : 'smooth' });
    });
  }, [selectedColor, fabrics, isMobile]);

  // Контролируем видимость кнопок-прокрутки (для десктопа)
  const onScroll = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    setCanScrollPrev(container.scrollLeft > 5);
    setCanScrollNext(container.scrollLeft + container.clientWidth + 5 < container.scrollWidth);
  };

  const scrollBy = (offset: number) => {
    if (!containerRef.current) return;
    containerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  if (!selectedColor) return null;

  // Рендер слайдера
  return (
    <div className="relative w-full select-none">
      {/* Кнопки прокрутки только для десктопа */}
      {!isMobile && canScrollPrev && (
        <button
          onClick={() => scrollBy(-containerRef.current!.clientWidth / visibleCount)}
          aria-label="Scroll previous"
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white/70 rounded-full shadow hover:bg-white"
        >
          &#8249;
        </button>
      )}

      <div
        ref={containerRef}
        className={`flex no-scrollbar snap-x snap-mandatory scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-[rgba(219,170,80,0.5)] overflow-y-hidden ${
          isMobile ? 'overflow-x-auto px-4' : 'overflow-x-hidden'
        }`}
        onScroll={isMobile ? undefined : onScroll}
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {fabrics.map((fabric, idx) => {
          const isSelected = fabric.color === selectedColor;
          return (
            <div
              key={fabric.color || idx}
              onClick={() => onColorSelect(fabric.color)}
              className="flex-shrink-0 snap-center cursor-pointer transition-transform duration-200"
              style={{
                width: isMobile ? '65%' : `${100 / visibleCount}%`,
                maxHeight: isMobile ? 300 : 400,

              }}
              tabIndex={0}
              aria-label={`Выбрать ткань ${idx + 1}`}
            >
              <img
                src={fabric.img}
                alt={`Ткань ${idx + 1}`}
                loading="lazy"
                draggable={false}
                className={`object-contain w-full h-full ${
                  isSelected ? 'border-2 border-[rgba(19,54,92,1)] shadow-lg' : 'border-2 border-transparent'
                }`}
              />
            </div>
          );
        })}
      </div>



      {!isMobile && canScrollNext && (
        <button
          onClick={() => scrollBy(containerRef.current!.clientWidth / visibleCount)}
          aria-label="Scroll next"
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white/70 rounded-full shadow hover:bg-white"
        >
          &#8250;
        </button>
      )}
    </div>
  );
};
