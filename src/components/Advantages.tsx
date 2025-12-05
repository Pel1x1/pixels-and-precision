import React, { useState, useEffect } from 'react';

interface AdvantagesData {
  title: string;
  advantages: string[];
  bottomText: string;
}

export const Advantages: React.FC = () => {
  const [advantagesData, setAdvantagesData] = useState<AdvantagesData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Загружаем данные с MODX API при монтировании
  useEffect(() => {
    const fetchAdvantages = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://xn--80ativ2d.xn--p1ai/modx/index.php?id=7');
        
        if (!response.ok) {
          throw new Error(`Ошибка загрузки: ${response.status}`);
        }
        
        const data: AdvantagesData = await response.json();
        setAdvantagesData(data);
        setError(null);
      } catch (err) {
        console.error('Ошибка загрузки преимуществ:', err);
        setError(err instanceof Error ? err.message : 'Неизвестная ошибка');
      } finally {
        setLoading(false);
      }
    };

    fetchAdvantages();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Загрузка...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-600">Ошибка: {error}</div>;
  }

  if (!advantagesData) {
    return null;
  }

  return (
    <section className="w-full px-10 lg:px-[10rem] py-4 lg:py-10">
      <div className="max-w-7xl">
        {/* Title Section */}
        <div className="flex gap-6 text-6xl lg:text-8xl xl:text-9xl text-[rgba(19,54,92,1)] font-normal mb-4 lg:mb-10">
          <h2 className="text-5xl sm:text-6xl lg:text-8xl xl:text-9xl text-[rgba(19,54,92,1)] font-normal text-center">
            {advantagesData.title}
          </h2>
        </div>

        {/* Advantages Grid */}
        <div className="space-y-2 lg:space-y-12 mb-4 lg:mb-24">
          {[0, 2, 4].map((startIndex) => (
            <div key={startIndex} className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-8">
              {advantagesData.advantages.slice(startIndex, startIndex + 2).map((advantage, index) => (
                <article
                  key={startIndex + index}
                  className="bg-[rgba(219,170,80,1)] text-[1rem] sm:text-xl lg:text-2xl xl:text-3xl text-white font-normal px-3 py-2 sm:p-8 lg:p-10 xl:p-11 leading-relaxed"
                >
                  <p>{advantage}</p>
                </article>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <p className="text-[1.1rem] sm:text-xl lg:text-2xl xl:text-3xl text-[rgba(19,54,92,1)] font-normal text-left leading-relaxed">
          {advantagesData.bottomText}
        </p>
      </div>
    </section>
  );
};
