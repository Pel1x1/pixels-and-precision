import React from 'react';
import { useIsMobile } from "@/hooks/use-mobile";
import vector1 from '@/lib/img/Vector 1.png';
import vector2 from '@/lib/img/Vector 2.png';
import tg from '@/lib/img/tg.png';
import vk from '@/lib/img/vk.png';
import wht from '@/lib/img/wht.png';
export const Contacts: React.FC = () => {
  const isMobile = useIsMobile();
  return (
    <section id="contacts" className="w-full">
      {/* Hero Section with Background */}
      <div className="relative min-h-[250px] h-full w-full z-20">
        <img
          src={vector1}
          className="absolute inset-0 w-full h-auto object-contain"
          style={{visibility:isMobile?"hidden":"visible"}}
          alt="Красивая линия"
        />
        <img
          src={vector2}
          className="absolute inset-0 w-full h-auto object-contain"
          style={{visibility:isMobile?"visible":"hidden"}}
          alt="Красивая линия"
        />
      </div>

      {/* Contact Information */}
      <div className="w-full px-10 lg:px-[10rem] relative z-10 lg:mt-[-70px] mt-[-10rem] mb-12">
        <h2 className="text-5xl sm:text-6xl lg:text-8xl xl:text-[7.5rem] text-[rgba(19,54,92,1)] font-normal text-left mb-6 lg:mb-16">
          КОНТАКТЫ
        </h2>
        <div className="max-w-7xl ">
          <div className=" gap-8 lg:gap-12">
            <article className="lg:col-span-3 text-xl sm:text-2xl lg:text-3xl xl:text-3xl text-[rgba(19,54,92,1)] font-normal leading-relaxed">
              <div className="space-y-6">
                
                <p>Свяжитесь с нами любым удобным способом — мы всегда рады помочь!</p>
                
                <div className="space-y-[-2px]">
                  <p>Телефон: +7 (XXX) XXX-XX-XX</p>
                  <p>
                    Электронная почта: {' '}
                    <a
                      href="mailto:info@nyukta.ru"
                      className="underline hover:text-[rgba(219,170,80,1)] transition-colors"
                    >
                      info@nyukta.ru
                    </a>
                  </p>
                  <p>Адрес: город Ангарск, ул.Грибная, д. 10</p>
                </div>
                
                <p>
                  Для быстрого общения используйте форму обратной связи ниже или
                  напишите нам в социальных сетях.
                </p>
                <div className="flex space-x-6 mt-2">
                  <a href="https://t.me/yourtelegram" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                    <img src={tg} alt="Telegram" className="w-12 h-12" />
                  </a>

                  <a href="https://vk.com/yourvk" target="_blank" rel="noopener noreferrer" aria-label="VK">
                    <img src={vk} alt="VK" className="w-12 h-12" />
                  </a>

                  <a href="https://wa.me/yourwhatsapp" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <img src={wht} alt="WhatsApp" className="w-12 h-12" />
                  </a>
                </div>

                
                <p>
                  Мы работаем без онлайн-оплаты на сайте — для оформления и оплаты
                  заказа, пожалуйста, свяжитесь с нами через указанные контакты.
                </p>
                
                <div className="space-y-2">
                  <p>Часы работы: (МСК +5)</p>
                  <p>Пн-Пт: 9:00 – 18:00</p>
                  <p>Сб-Вс: выходной</p>
                </div>
              </div>
            </article>

          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[rgba(219,170,80,1)] w-full px-4 sm:px-6 lg:px-8 py-2 lg:py-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xl sm:text-xl lg:text-2xl xl:text-2xl text-[rgba(19,54,92,1)] font-normal hover:text-[#2b7bd1] transition-colors">
            Разработка сайтов: <a href='https://t.me/weksirtu'>t.me/weksirtu</a>
          </p>
        </div>
      </footer>
    </section>
  );
};
