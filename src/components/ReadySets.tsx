import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface ReadySetItem {
  id: string;
  name: string;
  bedSize: string; // "1.5-спальный", "2-спальный", "Евро"
  images: string[];
  description: {
    sheet: string;
    pillowcase: string;
    duvet: string;
  };
  price: number;
  color: string;
}

interface ReadySetsProps {
  onAddToCart: (item: ReadySetItem) => void;
}

interface KitsData {
  kits: ReadySetItem[];
}

const ImageSlider: React.FC<{ images: string[] }> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full aspect-square overflow-hidden group">
      <img
        src={images[currentIndex]}
        alt="Комплект"
        className="w-full h-full object-cover transition-transform duration-300"
      />
      
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <ChevronLeft className="w-5 h-5 text-[rgba(19,54,92,1)]" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <ChevronRight className="w-5 h-5 text-[rgba(19,54,92,1)]" />
          </button>
          
          {/* Dots indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'bg-[rgba(219,170,80,1)] w-4'
                    : 'bg-white/70 hover:bg-white'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const SetCard: React.FC<{
  set: ReadySetItem;
  onAddToCart: (item: ReadySetItem) => void;
}> = ({ set, onAddToCart }) => {
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    if (added) return; // защита от дабл-клика
    onAddToCart(set);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000); // 2 секунды
  };
  return (
    <div className="bg-transparent border-2 border-[rgba(219,170,80,1)] overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <ImageSlider images={set.images} />
      
      <div className="p-4 sm:p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-[rgba(19,54,92,1)] text-[1rem] sm:text-[1.15rem] font-bold">
            {set.name}
          </h3>
          <span className="bg-[rgba(219,170,80,0.2)] text-[rgba(19,54,92,1)] px-3 py-1 rounded-full text-[0.8rem] font-medium">
            {set.bedSize}
          </span>
        </div>
        
        <div className="space-y-2 mb-4 text-[rgba(19,54,92,0.8)]">
          <div className="flex justify-between text-sm sm:text-base">
            <span>Простыня:</span>
            <span className="font-medium">{set.description.sheet}</span>
          </div>
          <div className="flex justify-between text-sm sm:text-base">
            <span>Наволочка:</span>
            <span className="font-medium">{set.description.pillowcase}</span>
          </div>
          <div className="flex justify-between text-sm sm:text-base">
            <span>Пободеяльник:</span>
            <span className="font-medium">{set.description.duvet}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <div className="text-[rgba(19,54,92,1)] text-2xl sm:text-3xl font-bold">
            {set.price.toLocaleString('ru-RU')} ₽
          </div>
        </div>
        
        <button
          onClick={handleClick}
          disabled={added}
          className={`w-full mt-4 text-lg sm:text-xl font-medium py-3 transition-all duration-300 transform
            ${
              added
                ? 'bg-green-600 text-white cursor-default'
                : 'bg-[rgba(219,170,80,1)] text-white hover:bg-[rgba(199,150,60,1)] hover:scale-[1.02]'
            }`}
        >
          {added ? 'Добавлено в корзину ✓' : 'Добавить в корзину'}
        </button>
      </div>
    </div>
  );
};

export const ReadySets: React.FC<ReadySetsProps> = ({ onAddToCart }) => {
  const [readySetsData, setReadySetsData] = useState<ReadySetItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchKits = async () => {
      try {
        setLoading(true);
        // Загружаем данные с MODX ресурса kits (ID 15)
        const response = await fetch('https://xn--80ativ2d.xn--p1ai/modx/index.php?id=15');
        
        if (!response.ok) {
          throw new Error(`Ошибка загрузки комплектов: ${response.status}`);
        }
        
        const data: KitsData = await response.json();
        setReadySetsData(data.kits || []);
        setError(null);
      } catch (err) {
        console.error('Ошибка загрузки готовых комплектов:', err);
        setError(err instanceof Error ? err.message : 'Неизвестная ошибка');
        // Fallback: используем пустой массив
        setReadySetsData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchKits();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-[rgba(19,54,92,1)] text-xl">Загрузка комплектов...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-red-600 text-lg">Ошибка: {error}</div>
      </div>
    );
  }

  if (readySetsData.length === 0) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-[rgba(19,54,92,1)] text-lg">Комплекты не найдены</div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {readySetsData.map((set) => (
        <SetCard key={set.id} set={set} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};
