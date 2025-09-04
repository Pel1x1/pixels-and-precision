import React from 'react';

export const DeliveryPayment: React.FC = () => {
  return (
    <section id="delivery" className="w-full max-w-[1734px] mt-[66px] max-md:mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="flex w-full flex-col max-md:max-w-full max-md:mt-10">
          <div className="flex items-start gap-[22px] mb-[93px] max-md:mb-10">
            <h2 className="text-[rgba(19,54,92,1)] text-9xl font-normal mt-4 max-md:max-w-full max-md:text-[40px] max-md:mt-[38px]">
              ДОСТАВКА
            </h2>
            <img
              src="https://api.builder.io/api/v1/image/assets/e80f950f6d514655b299aa20146ab877/0125581669a0d20229ca1d1058a827be9f9af864?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-[106px] shrink-0 max-w-full max-md:mt-[22px]"
              alt="Декоративный элемент"
            />
          </div>
          
          <article className="text-[rgba(19,54,92,1)] text-4xl font-normal self-stretch mb-[94px] max-md:max-w-full max-md:mb-10">
            <p>
              Доставка по всей России!
              <br />
              Отправляем заказы до пункта выдачи любой транспортной компании
              на ваш выбор.
              <br />
              Доставка по городу Ангарск — бесплатно!
              <br />
              <br />
              Стоимость доставки зависит от региона и рассчитывается
              автоматически при оформлении заказа. Вы сможете выбрать самый
              удобный для вас способ доставки.
            </p>
          </article>
          
          <h2 className="text-[rgba(19,54,92,1)] text-9xl font-normal max-md:max-w-full max-md:text-[40px]">
            ОПЛАТА
          </h2>
        </div>
        
        <div className="flex justify-center items-start">
          <img
            src="https://api.builder.io/api/v1/image/assets/e80f950f6d514655b299aa20146ab877/86431bb74ad451df0cf60861b9a8ef9393bcaafc?placeholderIfAbsent=true"
            className="aspect-[0.99] object-contain w-full mt-1 rounded-[0px_260px_0px_260px] max-md:max-w-full max-md:mt-10"
            alt="Изображение доставки"
          />
        </div>
      </div>

      <article className="text-[rgba(19,54,92,1)] text-4xl font-normal mt-[113px] max-md:max-w-full max-md:mt-10">
        <p>
          Оплата на сайте не производится. После оформления заказа, пожалуйста,
          свяжитесь с нами любым удобным способом через раздел «Контакты» для
          уточнения деталей и оплаты.
          <br />
          <br />
          Мы принимаем 100% предоплату после согласования заказа. Также возможна
          оплата в рассрочку на 4 части для вашего удобства.
        </p>
      </article>
    </section>
  );
};
