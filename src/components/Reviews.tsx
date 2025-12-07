import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

type ReviewsResponse = {
  title: string;
  reviews: {
    name: string;
    city: string;
    rating: number;
    text: string;
    date: string;
  }[];
  bottomText: string;
};

export const Reviews: React.FC = () => {
  const [data, setData] = useState<ReviewsResponse | null>(null);
  const [current, setCurrent] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // загрузка из MODX
  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch('/modx/index.php?id=10');
        if (!res.ok) {
          throw new Error(`Ошибка загрузки: ${res.status}`);
        }

        const json: ReviewsResponse = await res.json();
        setData(json);
        setCurrent(0);
      } catch (e: any) {
        console.error('Error loading reviews:', e);
        setError(e.message ?? 'Ошибка загрузки отзывов');
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  // адаптивное количество карточек
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else {
        setItemsPerView(1);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const reviews = data?.reviews ?? [];
  const maxIndex = Math.max(reviews.length - itemsPerView, 0);

  const prev = () => {
    setCurrent((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
  };

  const next = () => {
    setCurrent((prevIndex) => (prevIndex === maxIndex ? 0 : prevIndex + 1));
  };

  const totalDots = maxIndex + 1;

  if (loading) {
    return (
      <section id="reviews" className="w-full px-10 lg:px-[10rem] py-4 lg:py-10">
        <p className="text-[rgba(19,54,92,1)] text-xl">Загрузка отзывов...</p>
      </section>
    );
  }

  if (error || !data || reviews.length === 0) {
    return (
      <section id="reviews" className="w-full px-10 lg:px-[10rem] py-4 lg:py-10">
        <p className="text-[#ff0000] text-xl">
          Ошибка загрузки
        </p>
      </section>
    );
  }

  return (
    <section id="reviews" className="w-full px-10 lg:px-[10rem] mb-8 lg:mb-10">
      <div className="max-w-7xl relative">
        {/* Заголовок из MODX */}
        <div className="flex gap-6 text-6xl lg:text-8xl xl:text-9xl text-[rgba(19,54,92,1)] font-normal mb-4 lg:mb-10">
          <h2 className="text-5xl sm:text-6xl lg:text-8xl xl:text-9xl text-[rgba(19,54,92,1)] font-normal text-left">
            {data.title}
          </h2>
        </div>

        {/* Слайдер тот же, только вместо локального массива используем reviews */}
        <div className="relative w-full mb-4 lg:mb-10">
          <button
            onClick={prev}
            className="flex items-center justify-center absolute left-[-1.5rem] sm:left-[-2.5rem] 
            top-1/2 -translate-y-1/2 bg-[rgba(219,170,80,1)] text-white rounded-full w-4 h-8 sm:w-5 sm:h-10 lg:w-6 lg:h-12 hover:bg-[rgba(219,170,80,0.85)] transition-colors z-10"
            aria-label="Предыдущий отзыв"
          >
            &lt;
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${(current * 100) / itemsPerView}%)`,
              }}
            >
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 px-0 lg:px-1 ${
                    itemsPerView === 1 ? 'w-full' : 'w-full lg:w-1/3'
                  }`}
                >
                  <article className="bg-[rgba(219,170,80,1)] text-[1rem] sm:text-xl lg:text-2xl xl:text-3xl text-white font-normal px-3 py-3 sm:p-8 lg:p-10 xl:p-11 leading-relaxed flex flex-col justify-between h-full">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-white"
                        />
                      ))}
                    </div>

                    <p className="mb-6">{review.text}</p>

                    <div className="flex flex-col gap-1 border-t border-white/40 pt-4 mt-auto">
                      <p className="font-normal">{review.name}</p>
                      <p className="text-base sm:text-lg opacity-90">
                        {review.city}
                      </p>
                      <p className="text-sm sm:text-base opacity-75">
                        {review.date}</p>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={next}
            className="flex items-center justify-center absolute right-[-1.5rem] sm:right-[-2.5rem] top-1/2 
            -translate-y-1/2 bg-[rgba(219,170,80,1)] text-white rounded-full w-4 h-8 sm:w-5 sm:h-10 lg:w-6 lg:h-12 hover:bg-[rgba(219,170,80,0.85)] transition-colors z-10"
            aria-label="Следующий отзыв"
          >
            &gt;
          </button>
        </div>

        {/* Точки */}
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

        {/* Подпись из MODX */}
        <p className="text-[1.1rem] sm:text-xl lg:text-2xl xl:text-3xl text-[rgba(19,54,92,1)] font-normal text-left leading-relaxed">
          {data.bottomText}
        </p>
      </div>
    </section>
  );
};
