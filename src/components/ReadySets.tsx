import React, { useState } from 'react';
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

// Примерные данные готовых комплектов
const readySetsData: ReadySetItem[] = [
  {
    id: 'set-1',
    name: 'Комплект "Крем"',
    bedSize: '1.5-спальный',
    images: [
      '/img/fabrics/cream.webp',
      '/img/fabrics/pouder.webp',
      '/img/fabrics/sand.webp',
    ],
    description: {
      sheet: '150 x 220 см',
      pillowcase: '50 x 70 см (2 шт)',
      duvet: '145 x 215 см',
    },
    price: 8500,
    color: 'cream',
  },
  {
    id: 'set-2',
    name: 'Комплект "Изумруд"',
    bedSize: '2-спальный',
    images: [
      '/img/fabrics/emerald.webp',
      '/img/fabrics/mint.webp',
      '/img/fabrics/evkalipt.webp',
    ],
    description: {
      sheet: '180 x 220 см',
      pillowcase: '50 x 70 см (2 шт)',
      duvet: '175 x 215 см',
    },
    price: 10500,
    color: 'emerald',
  },
  {
    id: 'set-3',
    name: 'Комплект "Индиго"',
    bedSize: 'Евро',
    images: [
      '/img/fabrics/indigo.webp',
      '/img/fabrics/water.webp',
      '/img/fabrics/blue.webp',
    ],
    description: {
      sheet: '240 x 260 см',
      pillowcase: '50 x 70 см (2 шт)',
      duvet: '200 x 220 см',
    },
    price: 12500,
    color: 'indigo',
  },
  {
    id: 'set-4',
    name: 'Комплект "Лаванда"',
    bedSize: '1.5-спальный',
    images: [
      '/img/fabrics/lavanda.webp',
      '/img/fabrics/pink.webp',
      '/img/fabrics/pouder.webp',
    ],
    description: {
      sheet: '150 x 220 см',
      pillowcase: '50 x 70 см (2 шт)',
      duvet: '145 x 215 см',
    },
    price: 8500,
    color: 'lavanda',
  },
  {
    id: 'set-5',
    name: 'Комплект "Мокко"',
    bedSize: '2-спальный',
    images: [
      '/img/fabrics/mokko.webp',
      '/img/fabrics/chocolate.webp',
      '/img/fabrics/milk_chocolate.webp',
    ],
    description: {
      sheet: '180 x 220 см',
      pillowcase: '50 x 70 см (2 шт)',
      duvet: '175 x 215 см',
    },
    price: 10500,
    color: 'mokko',
  },
  {
    id: 'set-6',
    name: 'Комплект "Терракота"',
    bedSize: 'Евро',
    images: [
      '/img/fabrics/terracota.webp',
      '/img/fabrics/sand.webp',
      '/img/fabrics/cream.webp',
    ],
    description: {
      sheet: '240 x 260 см',
      pillowcase: '50 x 70 см (2 шт)',
      duvet: '200 x 220 см',
    },
    price: 12500,
    color: 'terracota',
  },
];

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
    <div className="relative w-full aspect-square overflow-hidden rounded-lg group">
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
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <ImageSlider images={set.images} />
      
      <div className="p-4 sm:p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-[rgba(19,54,92,1)] text-xl sm:text-2xl font-bold">
            {set.name}
          </h3>
          <span className="bg-[rgba(219,170,80,0.2)] text-[rgba(19,54,92,1)] px-3 py-1 rounded-full text-sm font-medium">
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
            <span>Пододеяльник:</span>
            <span className="font-medium">{set.description.duvet}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <div className="text-[rgba(19,54,92,1)] text-2xl sm:text-3xl font-bold">
            {set.price.toLocaleString('ru-RU')} ₽
          </div>
        </div>
        
        <button
          onClick={() => onAddToCart(set)}
          className="w-full mt-4 bg-[rgba(219,170,80,1)] text-white text-lg sm:text-xl font-medium py-3 rounded-lg hover:bg-[rgba(199,150,60,1)] transition-all duration-300 transform hover:scale-[1.02]"
        >
          Добавить в корзину
        </button>
      </div>
    </div>
  );
};

export const ReadySets: React.FC<ReadySetsProps> = ({ onAddToCart }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {readySetsData.map((set) => (
        <SetCard key={set.id} set={set} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};
