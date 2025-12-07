import React, { useState, useEffect } from 'react';
import { useIsMobile } from "@/hooks/use-mobile";

interface AboutData {
  title: string;
  paragraphs: string[];
  decorIconUrl: string;
}

export const About: React.FC = () => {
  const isMobile = useIsMobile();
  const [aboutData, setAboutData] = useState<AboutData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Загружаем данные с MODX API при монтировании
  useEffect(() => {
    const fetchAbout = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://xn--80ativ2d.xn--p1ai/modx/index.php?id=8');
        
        if (!response.ok) {
          throw new Error(`Ошибка загрузки: ${response.status}`);
        }
        
        const data: AboutData = await response.json();
        setAboutData(data);
        setError(null);
      } catch (err) {
        console.error('Ошибка загрузки about:', err);
        setError(err instanceof Error ? err.message : 'Неизвестная ошибка');
      } finally {
        setLoading(false);
      }
    };

    fetchAbout();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Загрузка...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-600">Ошибка: {error}</div>;
  }

  if (!aboutData) {
    return null;
  }

  return (
    <section id="about" className="w-full py-4 lg:py-10">
      <div className="max-w-[90rem]">
        <div className="grid grid-cols-1 items-start">
          <article
            className={`lg:col-span-3 text-[1.25rem] lg:text-3xl xl:text-3xl text-[rgba(19,54,92,1)] font-normal leading-relaxed ${
              isMobile 
                ? 'h-[75%] w-[80%] ml-[10%] mr-[10%] mt-2' 
                : 'w-full h-full pl-[10rem] pr-[0px]'
            }`}
          >
            <div className="flex gap-6 text-[2.8rem] lg:text-8xl xl:text-9xl text-[rgba(19,54,92,1)] font-normal mb-4 lg:mb-10">
              <h2 className="text-center">{aboutData.title}</h2>
              <img
                src={aboutData.decorIconUrl}
                className="aspect-[1] object-contain w-11 lg:w-20 xl:w-[85px] shrink-0"
                alt="Декоративный элемент"
              />
            </div>

            <p className="space-y-6 lg:space-y-10">
              {aboutData.paragraphs.map((paragraph, index) => (
                <span key={index} className="block">
                  {isMobile && index === 0 ? (
                    <>
                      {paragraph.split('В каждом').map((part, i) => (
                        <React.Fragment key={i}>
                          {i === 0 ? part : 'В каждом'}
                          {i === 0 && <br />}
                          {i > 0 && part}
                        </React.Fragment>
                      ))}
                    </>
                  ) : (
                    paragraph
                  )}
                </span>
              ))}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};
