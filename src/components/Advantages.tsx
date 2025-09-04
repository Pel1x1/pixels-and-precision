import React from 'react';

export const Advantages: React.FC = () => {
  const advantages = [
    "Уникальный пошив по вашим меркам.\nКаждый комплект создаём индивидуально, чтобы идеально подходил именно вам.",
    "Высокое качество тканей.\nИспользуем натуральный сатин 100% хлопок, который мягкий, прочный и гипоаллергенный.",
    "Широкий выбор цветов.\nМы предлагаем коллекции, которые подчёркивают ваш вкус и создают неповторимую атмосферу уюта.",
    "Бережный уход и долговечность — наши изделия сохраняют цвет и форму даже после многократных стирок.",
    "Индивидуальный подход и поддержка.\nМы всегда готовы помочь с выбором и ответить на все вопросы.",
    "Бесплатная доставка по Ангарску и удобная доставка по всей России с выбором транспортной компании."
  ];

  return (
    <section className="w-full max-w-[1734px] mt-[89px] max-md:mt-10">
      <div className="flex w-[1057px] max-w-full items-stretch gap-[40px_64px] text-9xl text-[rgba(19,54,92,1)] font-normal whitespace-nowrap flex-wrap ml-20 mb-[93px] max-md:text-[40px] max-md:mb-10">
        <h2 className="grow shrink w-[889px] basis-auto max-md:max-w-full max-md:text-[40px]">
          ПРЕИМУЩЕСТВА
        </h2>
        <img
          src="https://api.builder.io/api/v1/image/assets/e80f950f6d514655b299aa20146ab877/32a783704e4d94e36ed7b96fa96218e64be5778a?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-[85px] shrink-0 mt-[15px]"
          alt="Декоративный элемент"
        />
      </div>

      <div className="w-full max-w-[1495px] mx-auto space-y-[57px]">
        {[0, 2, 4].map((startIndex) => (
          <div key={startIndex} className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {advantages.slice(startIndex, startIndex + 2).map((advantage, index) => (
              <article
                key={startIndex + index}
                className="bg-[rgba(219,170,80,1)] text-4xl text-white font-normal p-11 max-md:p-5"
              >
                <p className="max-md:max-w-full">
                  {advantage.split('\n').map((line, lineIndex) => (
                    <React.Fragment key={lineIndex}>
                      {line}
                      {lineIndex < advantage.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </article>
            ))}
          </div>
        ))}
      </div>

      <p className="text-[rgba(19,54,92,1)] text-4xl font-normal mt-[71px] max-md:max-w-full max-md:mt-10 text-center">
        Выбирая НЮКТА, вы получаете не просто постельное бельё, а заботу и
        комфорт для вашего сна и дома.
      </p>
    </section>
  );
};
