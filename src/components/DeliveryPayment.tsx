import React from 'react';

export const DeliveryPayment: React.FC = () => {
  return (
    <section id="delivery" className="w-full px-10 lg:px-[10rem] py-8 lg:py-12">
      <div className="max-w-7xl ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20">
          
          {/* Left Column - Delivery Content */}
          <div className="space-y-6 lg:space-y-16">
            <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8 lg:gap-12">
              <h2 className="text-5xl sm:text-6xl lg:text-8xl xl:text-9xl text-[rgba(19,54,92,1)] font-normal">
                ДОСТАВКА
              </h2>
            </div>
            
            <article className="text-[1.15rem] sm:text-1xl lg:text-2xl xl:text-[1.9rem] text-[rgba(19,54,92,1)] font-normal leading-relaxed">
              <p className="space-y-4">
                <span className="block">
                  Доставка по всей России!<br/>
                  Отправляем заказы до пункта выдачи любой транспортной компании
                  на ваш выбор.<br/> Доставка по городу Ангарск — бесплатно!
                </span>
                <span className="block">
                  Стоимость доставки зависит от региона и рассчитывается
                  автоматически при оформлении заказа. Вы сможете выбрать самый
                  удобный для вас способ доставки.
                </span>
              </p>
            </article>

          </div>
          
          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end items-start">
            <img
              src="https://api.builder.io/api/v1/image/assets/e80f950f6d514655b299aa20146ab877/86431bb74ad451df0cf60861b9a8ef9393bcaafc?placeholderIfAbsent=true"
              className="aspect-[0.99] object-contain w-full max-w-md lg:max-w-lg xl:max-w-xl "
              alt="Изображение доставки"
            />
          </div>
        </div>

        {/* Payment Information */}
        <article className="text-[1.1rem] sm:text-2xl lg:text-3xl xl:text-4xl text-[rgba(19,54,92,1)] font-normal leading-relaxed mt-16 lg:mt-24">
                      
            <h2 className="text-5xl sm:text-6xl lg:text-8xl xl:text-9xl text-[rgba(19,54,92,1)] font-normal lg:mb-16">
              ОПЛАТА
            </h2>
          <p className="space-y-6 mt-6">
            <span className="block">
              Оплата на сайте не производится. После оформления заказа, пожалуйста,
              свяжитесь с нами любым удобным способом через раздел «Контакты» для
              уточнения деталей и оплаты.
            </span>
            <span className="block">
              Мы принимаем 100% предоплату после согласования заказа. Также возможна
              оплата в рассрочку на 4 части для вашего удобства.
            </span>
          </p>
        </article>
      </div>
    </section>
  );
};
