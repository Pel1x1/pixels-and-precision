import React from 'react';

export const DeliveryPayment: React.FC = () => {
  return (
    <section id="delivery" className="w-full px-10 lg:px-[10rem] py-4 lg:py-10">
      <div className="max-w-7xl ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20">
          
          {/* Left Column - Delivery Content */}
          <div className="space-y-4 lg:space-y-10">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-8 lg:gap-12">
              <h2 className="text-[2.8rem] sm:text-6xl lg:text-8xl xl:text-9xl text-[rgba(19,54,92,1)] font-normal">
                ДОСТАВКА
              </h2>
            </div>
            
            <article className="text-[1.15rem] sm:text-1xl lg:text-2xl xl:text-[1.9rem] text-[rgba(19,54,92,1)] font-normal leading-relaxed tracking-[1px]">
              <p className="space-y-10">
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
              src="/img/delivery.png"
              className="aspect-[0.99] object-contain w-full max-w-md lg:max-w-lg xl:max-w-xl "
              alt="Изображение доставки"
            />
          </div>
        </div>

        
      </div>
    </section>
  );
};
