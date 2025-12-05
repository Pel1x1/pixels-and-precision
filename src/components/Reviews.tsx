import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

interface Review {
  name: string;
  city: string;
  rating: number;
  text: string;
  date: string;
}

interface ReviewsData {
  title: string;
  reviews: Review[];
  bottomText: string;
}

export const Reviews: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [data, setData] = useState<ReviewsData | null>(null);
  const [loading, setLoading] = useState(true);
  const itemsPerView = 3;

  useEffect(() => {
    fetch('/modx/index.php?id=10')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading reviews:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return null;
  if (!data) return null;

  const prev = () => {
    setCurrent((prevIndex) =>
      prevIndex === 0 ? data.reviews.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrent((prevIndex) =>
      prevIndex === data.reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  // количество "страниц" для точек, чтобы каждая точка сдвигала на 1, но учитывать, что видно 3
  const totalDots = Math.max(data.reviews.length - itemsPerView + 1, 1);

  return (
    <section id="reviews" className="w-full px-10 lg:px-[10rem] py-4 lg:py-10">
      <div className="max-w-7xl relative">
        {/* Заголовок */}
        <div className="flex gap-6 text-6xl lg:text-8xl xl:text-9xl text-[rgba(19,54,92,1)] font-normal mb-4 lg:mb-10">
          <h2 className="text-5xl sm:text-6xl lg:text-8xl xl:text-9xl text-[rgba(19,54,92,1)] font-normal text-left">
            {data.title}
          </h2>
        </div>

        {/* Слайдер */}
        <div className="relative w-full mb-4 lg:mb-10">
          {/* Кнопка влево */}
          <button
            onClick={prev}
            className="hidden sm:flex items-center justify-center absolute left-[-2.5rem] top-1/2 -translate-y-1/2 
            bg-[rgba(219,170,80,1)] text-white rounded-full w-10 h-10 lg:w-6 lg:h-12 hover:bg-[rgba(219,170,80,0.85)] 
            transition-colors z-10"
            aria-label="Предыдущий отзыв"
          >
            &lt;
              
          </button>

          {/* Область слайдера */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${(current * 100) / itemsPerView}%)`
              }}
            >
              {data.reviews.map((review, index) => (
                <div
                  key={index}
                  className="w-full lg:w-1/3 flex-shrink-0 px-0 lg:px-1"
                >
                  <article className="bg-[rgba(219,170,80,1)] text-[1rem] sm:text-xl lg:text-2xl xl:text-3xl text-white 
                  font-normal px-3 py-3 sm:p-8 lg:p-10 xl:p-11 leading-relaxed flex flex-col justify-between h-full">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-white"
                        />
                      ))}
                    </div>

                    <p className="mb-6">
                      {review.text}
                    </p>

                    <div className="flex flex-col gap-1 border-t border-white/40 pt-4 mt-auto">
                      <p className="font-normal">
                        {review.name}
                      </p>
                      <p className="text-base sm:text-lg opacity-90">
                        {review.city}
                      </p>
                      <p className="text-sm sm:text-base opacity-75">
                        {review.date}
                      </p>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Кнопка вправо */}
          <button
            onClick={next}
            className="hidden sm:flex items-center justify-center absolute right-[-2.5rem] top-1/2 -translate-y-1/2 
            bg-[rgba(219,170,80,1)] text-white rounded-full w-10 h-10 lg:w-6 lg:h-12 hover:bg-[rgba(219,170,80,0.85)] 
            transition-colors z-10"
            aria-label="Следующий отзыв"
          >
            &gt;
          </button>
        </div>

        {/* Точки-индикаторы (по количеству возможных позиций, сдвиг по 1) */}
        <div className="flex justify-center gap-2 mb-4 lg:mb-10">
          {Array.from({ length: totalDots }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                current === index
                  ? 'bg-[rgba(219,170,80,1)]'
                  : 'bg-[rgba(219,170,80,0.3)]'
              }`}
              aria-label={`Перейти к позиции ${index + 1}`}
            />
          ))}
        </div>

        {/* Подпись */}
        <p className="text-[1.1rem] sm:text-xl lg:text-2xl xl:text-3xl text-[rgba(19,54,92,1)] font-normal text-left leading-relaxed">
          {data.bottomText}
        </p>
      </div>
    </section>
  );
};
