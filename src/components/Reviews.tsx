import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Анна М.",
    city: "Москва",
    rating: 5,
    text: "Заказывала комплект для нестандартной кровати. Всё сделали идеально по размерам, ткань просто восхитительная! Спим как в облаке.",
    date: "15 ноября 2024"
  },
  {
    name: "Елена К.",
    city: "Санкт-Петербург", 
    rating: 5,
    text: "Третий раз заказываю здесь бельё. Качество неизменно высокое, цвета не выцветают после стирок. Рекомендую!",
    date: "3 ноября 2024"
  },
  {
    name: "Ольга С.",
    city: "Екатеринбург",
    rating: 5,
    text: "Долго искала качественный сатин для детской. Здесь нашла именно то, что нужно — мягкий, гипоаллергенный, красивый.",
    date: "28 октября 2024"
  }
];

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="w-full py-16 px-4 lg:px-8 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-5xl text-[rgba(19,54,92,1)] font-normal text-center mb-4">
          Отзывы наших клиентов
        </h2>
        <p className="text-lg text-[rgba(19,54,92,0.7)] text-center mb-12">
          Более 500 довольных клиентов по всей России
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[rgba(219,170,80,1)] text-[rgba(219,170,80,1)]" />
                ))}
              </div>
              
              <p className="text-[rgba(19,54,92,0.8)] mb-4 leading-relaxed">
                "{review.text}"
              </p>
              
              <div className="flex justify-between items-center pt-4 border-t border-[rgba(219,170,80,0.2)]">
                <div>
                  <p className="font-semibold text-[rgba(19,54,92,1)]">{review.name}</p>
                  <p className="text-sm text-[rgba(19,54,92,0.6)]">{review.city}</p>
                </div>
                <p className="text-sm text-[rgba(19,54,92,0.5)]">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
