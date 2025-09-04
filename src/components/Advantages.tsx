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
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 lg:gap-12 mb-16 lg:mb-24">
          <h2 className="text-4xl sm:text-6xl lg:text-8xl xl:text-9xl text-[rgba(19,54,92,1)] font-normal">
            ПРЕИМУЩЕСТВА
          </h2>
          <img
            src="https://api.builder.io/api/v1/image/assets/e80f950f6d514655b299aa20146ab877/32a783704e4d94e36ed7b96fa96218e64be5778a?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-16 sm:w-20 lg:w-24 xl:w-[85px] shrink-0"
            alt="Декоративный элемент"
          />
        </div>

        {/* Advantages Grid */}
        <div className="space-y-8 lg:space-y-12 mb-16 lg:mb-24">
          {[0, 2, 4].map((startIndex) => (
            <div key={startIndex} className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {advantages.slice(startIndex, startIndex + 2).map((advantage, index) => (
                <article
                  key={startIndex + index}
                  className="bg-[rgba(219,170,80,1)] text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-white font-normal p-6 sm:p-8 lg:p-10 xl:p-11 leading-relaxed"
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
        <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-[rgba(19,54,92,1)] font-normal text-center leading-relaxed max-w-4xl mx-auto">
          Выбирая НЮКТА, вы получаете не просто постельное бельё, а заботу и
          комфорт для вашего сна и дома.
        </p>
      </div>
    </section>
  );
};
