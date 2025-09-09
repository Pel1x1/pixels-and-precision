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
    <section className="w-full px-10 lg:px-[10rem] py-8 lg:py-12">
      <div className="max-w-7xl">
        {/* Title Section */}
        <div className="flex gap-6 text-6xl lg:text-8xl xl:text-9xl text-[rgba(19,54,92,1)] font-normal mb-4 lg:mb-10">
          <h2 className="text-5xl sm:text-6xl lg:text-8xl xl:text-9xl text-[rgba(19,54,92,1)] font-normal text-center">
            ПРЕИМУЩЕСТВА
          </h2>
          <img
            src="https://api.builder.io/api/v1/image/assets/e80f950f6d514655b299aa20146ab877/32a783704e4d94e36ed7b96fa96218e64be5778a?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-10 lg:w-20 xl:w-[85px] shrink-0"
            alt="Декоративный элемент"
          />
        </div>

        {/* Advantages Grid */}
        <div className="space-y-8 lg:space-y-12 mb-6 lg:mb-24">
          {[0, 2, 4].map((startIndex) => (
            <div key={startIndex} className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {advantages.slice(startIndex, startIndex + 2).map((advantage, index) => (
                <article
                  key={startIndex + index}
                  className="bg-[rgba(219,170,80,1)] text-[1rem] sm:text-xl lg:text-2xl xl:text-3xl text-white font-normal p-6 sm:p-8 lg:p-10 xl:p-11 leading-relaxed"
                >
                  <p>
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

        {/* Bottom Text */}
        <p className="text-[1.1rem] sm:text-xl lg:text-2xl xl:text-3xl text-[rgba(19,54,92,1)] font-normal text-left leading-relaxed ">
          Выбирая НЮКТА, вы получаете не просто постельное бельё, а заботу и
          комфорт для вашего сна и дома.
        </p>
      </div>
    </section>
  );
};
