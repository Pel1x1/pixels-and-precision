import React from 'react';

export const Contacts: React.FC = () => {
  return (
    <section id="contacts" className="w-full">
      {/* Hero Section with Background */}
      <div className="relative min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] w-full">
        <img
          src="https://api.builder.io/api/v1/image/assets/e80f950f6d514655b299aa20146ab877/62a806a2cdf3c79677acfe13ef6ba3dc5ec335ba?placeholderIfAbsent=true"
          className="absolute h-full w-full object-cover inset-0"
          alt="Фон контактов"
        />
        <div className="relative flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex flex-col items-center space-y-6 sm:space-y-8">
              <img
                src="https://api.builder.io/api/v1/image/assets/e80f950f6d514655b299aa20146ab877/0125581669a0d20229ca1d1058a827be9f9af864?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-20 sm:w-24 lg:w-28 xl:w-[106px]"
                alt="Декоративный элемент"
              />
              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
                <h2 className="text-4xl sm:text-6xl lg:text-8xl xl:text-9xl text-[rgba(19,54,92,1)] font-normal text-center">
                  КОНТАКТЫ
                </h2>
                <img
                  src="https://api.builder.io/api/v1/image/assets/e80f950f6d514655b299aa20146ab877/fa6bac477da9ebb902cc9e73446209403b76f894?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-16 sm:w-20 lg:w-24 xl:w-[101px] shrink-0"
                  alt="Декоративный элемент"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            <article className="lg:col-span-3 text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-[rgba(19,54,92,1)] font-normal leading-relaxed">
              <div className="space-y-6">
                <p>Свяжитесь с нами любым удобным способом — мы всегда рады помочь!</p>
                
                <div className="space-y-2">
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
            
            <div className="lg:col-span-1 flex justify-center lg:justify-end items-start lg:mt-32">
              <img
                src="https://api.builder.io/api/v1/image/assets/e80f950f6d514655b299aa20146ab877/0125581669a0d20229ca1d1058a827be9f9af864?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-20 sm:w-24 lg:w-28 xl:w-[106px]"
                alt="Декоративный элемент"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[rgba(219,170,80,1)] w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-[rgba(19,54,92,1)] font-normal">
            Дизайнер: тг @weksirtu
          </p>
        </div>
      </footer>
    </section>
  );
};
