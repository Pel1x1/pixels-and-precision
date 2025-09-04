import React from 'react';

export const Contacts: React.FC = () => {
  return (
    <section id="contacts" className="w-full">
      <div className="flex flex-col relative min-h-[388px] w-full text-9xl text-[rgba(19,54,92,1)] font-normal whitespace-nowrap text-center justify-center mt-[23px] px-20 py-[66px] max-md:max-w-full max-md:text-[40px] max-md:px-5">
        <img
          src="https://api.builder.io/api/v1/image/assets/e80f950f6d514655b299aa20146ab877/62a806a2cdf3c79677acfe13ef6ba3dc5ec335ba?placeholderIfAbsent=true"
          className="absolute h-full w-full object-cover inset-0"
          alt="Фон контактов"
        />
        <div className="relative w-[1063px] max-w-full max-md:text-[40px]">
          <img
            src="https://api.builder.io/api/v1/image/assets/e80f950f6d514655b299aa20146ab877/0125581669a0d20229ca1d1058a827be9f9af864?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-[106px] max-w-full"
            alt="Декоративный элемент"
          />
          <div className="flex items-start gap-5 flex-wrap justify-between mt-[25px] max-md:max-w-full max-md:text-[40px]">
            <h2 className="max-md:max-w-full max-md:text-[40px]">
              КОНТАКТЫ
            </h2>
            <img
              src="https://api.builder.io/api/v1/image/assets/e80f950f6d514655b299aa20146ab877/fa6bac477da9ebb902cc9e73446209403b76f894?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-[101px] shrink-0 max-w-full mt-6"
              alt="Декоративный элемент"
            />
          </div>
        </div>
      </div>

      <div className="flex w-full max-w-[1669px] items-stretch gap-[40px_85px] text-4xl text-[rgba(19,54,92,1)] font-normal flex-wrap mr-[41px] mt-[21px] max-md:max-w-full max-md:mr-2.5">
        <article className="grow shrink w-[1455px] basis-auto max-md:max-w-full">
          <p>
            Свяжитесь с нами любым удобным способом — мы всегда рады помочь!
            <br />
            <br />
            Телефон: +7 (XXX) XXX-XX-XX<br />
            Электронная почта: 
            <a
              href="mailto:info@nyukta.ru"
              className="underline hover:text-[rgba(219,170,80,1)] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              info@nyukta.ru
            </a>
            <br />
            Адрес: город Ангарск, ул.Грибная, д. 10
            <br />
            <br />
            Для быстрого общения используйте форму обратной связи ниже или
            напишите нам в социальных сетях:
            <br />
            <br />
            <br />
            <br />
            Мы работаем без онлайн-оплаты на сайте — для оформления и оплаты
            заказа, пожалуйста, свяжитесь с нами через указанные контакты.
            <br />
            <br />
            Часы работы: (МСК +5)<br />
            Пн-Пт: 9:00 – 18:00<br />
            Сб-Вс: выходной
          </p>
        </article>
        <img
          src="https://api.builder.io/api/v1/image/assets/e80f950f6d514655b299aa20146ab877/0125581669a0d20229ca1d1058a827be9f9af864?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-[106px] shrink-0 max-w-full mt-[150px] max-md:mt-10"
          alt="Декоративный элемент"
        />
      </div>

      <footer className="bg-[rgba(219,170,80,1)] flex w-full flex-col text-4xl text-[rgba(19,54,92,1)] font-normal text-center mt-[126px] pt-3 pb-[19px] px-[70px] max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div>
          Дизайнер: тг @weksirtu
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </footer>
    </section>
  );
};
